<script lang="ts">
	import { superForm, defaults } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';
	import {
		Field,
		ElementField,
		Control,
		Label,
		Description,
		FieldErrors,
		Fieldset,
		Legend
	} from 'formsnap';
	import {
		schema,
		homeTypes,
		relationSingleUnit,
		relationMultiUnit,
		habitability
	} from './schema.js';
	import SuperDebug from 'sveltekit-superforms';

	const form = superForm(defaults(zod(schema)));
	const { form: formData, enhance } = form;

	let relation = relationSingleUnit;
	function updateRelationOptions() {
		if ($formData.homeType == 'single-family') {
			relation = relationSingleUnit;
		} else {
			relation = relationMultiUnit;
		}
	}
</script>

<form use:enhance class="mx-auto flex max-w-md flex-col" method="POST">
	<Fieldset {form} name="homeType">
		<Description>What type of residential building?</Description>
		{#each homeTypes as type}
			<Control>
				{#snippet children({ props })}
					<input
						{...props}
						type="radio"
						value={type.id}
						onchange={updateRelationOptions}
						bind:group={$formData.homeType}
					/>
					<Label>{type.desc}</Label>
				{/snippet}
			</Control>
		{/each}
		<FieldErrors />
	</Fieldset>

	<Fieldset {form} name="relation">
		<Description>Select the option that best describes your relation to the residence</Description>
		{#each relation as type}
			<Control>
				{#snippet children({ props })}
					<input {...props} type="radio" value={type.id} bind:group={$formData.relation} />
					<Label>{type.desc}</Label>
				{/snippet}
			</Control>
		{/each}
		<FieldErrors />
	</Fieldset>

	<Fieldset {form} name="habitability">
		<Description>On a scale from 1-5, describe the habitability of your home</Description>
		{#each habitability as type}
			<Control>
				{#snippet children({ props })}
					<input {...props} type="radio" value={type.id} bind:group={$formData.habitability} />
					<Label>{type.desc}</Label>
				{/snippet}
			</Control>
		{/each}
		<FieldErrors />
	</Fieldset>

	<button>Submit</button>
</form>
<SuperDebug data={$formData} />

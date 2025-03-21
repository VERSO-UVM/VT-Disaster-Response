<script lang="ts">
	import { superForm, defaults } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';
	import { Field, ElementField, Label, Description, FieldErrors, Fieldset, Legend } from 'formsnap';
	import ControlDiv from '$lib/ControlDiv.svelte';
	import { connections, incidents, schema } from './schema';
	const _form = superForm(defaults(zod(schema)));
	const { form, enhance } = _form;
</script>

<form method="POST" use:enhance>
	<Fieldset form={_form} name="incident">
		<Description>What are you reporting?</Description>
		<ControlDiv>
			{#snippet children({ props })}
				<select bind:value={$form.incident} {...props}>
					{#each incidents as incident}
						<option value={incident} selected={$form.incident == incident}>
							{incident}
						</option>
					{/each}
				</select>
			{/snippet}
		</ControlDiv>
	</Fieldset>

	<Fieldset form={_form} name="connections">
		<Description>Select all that apply</Description>
		{#each connections as connection}
			<ControlDiv>
				{#snippet children({ props })}
					<label>
						<input type="checkbox" bind:group={$form.connection} value={connection} {...props} />
						{connection}
					</label>
				{/snippet}
			</ControlDiv>
		{/each}
	</Fieldset>
</form>

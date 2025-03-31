<script lang="ts">
	import { Label, Description, FieldErrors, Fieldset } from "formsnap";
	import { homeTypes, relationSingleUnit, relationMultiUnit, habitability } from "./schema.js";
	import ControlDiv from "$lib/elements/ControlDiv.svelte";

	let { form, formData } = $props();

	let relation = $state<typeof relationSingleUnit | typeof relationMultiUnit>(relationSingleUnit);
	function updateRelationOptions() {
		if ($formData.homeType == "single-family") {
			relation = relationSingleUnit;
		} else {
			relation = relationMultiUnit;
		}
	}
</script>

<div>
	<Fieldset {form} name="homeType">
		<Description>What type of residential building?</Description>
		{#each homeTypes as type}
			<ControlDiv>
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
			</ControlDiv>
		{/each}
		<FieldErrors />
	</Fieldset>

	<Fieldset {form} name="relation">
		<Description>Select the option that best describes your relation to the residence</Description>
		{#each relation as type}
			<ControlDiv>
				{#snippet children({ props })}
					<input {...props} type="radio" value={type.id} bind:group={$formData.relation} />
					<Label>{type.desc}</Label>
				{/snippet}
			</ControlDiv>
		{/each}
		<FieldErrors />
	</Fieldset>

	<Fieldset {form} name="habitability">
		<Description>On a scale from 1-5, describe the habitability of your home</Description>
		{#each habitability as type}
			<ControlDiv>
				{#snippet children({ props })}
					<input {...props} type="radio" value={type.id} bind:group={$formData.habitability} />
					<Label>{type.desc}</Label>
				{/snippet}
			</ControlDiv>
		{/each}
		<FieldErrors />
	</Fieldset>
</div>

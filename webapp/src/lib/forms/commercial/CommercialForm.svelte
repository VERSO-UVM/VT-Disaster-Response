<script lang="ts">
	import { connections, types } from "./schema";
	import { Label, Description, FieldErrors, Fieldset } from "formsnap";
	import ControlDiv from "$lib/elements/ControlDiv.svelte";

	let { form, formData } = $props();
</script>

<div>
	<Fieldset {form} name="type">
		<Description>What type of building?</Description>
		{#each types as type}
			<ControlDiv>
				{#snippet children({ props })}
					<input {...props} type="radio" value={type} bind:group={$formData.type} />
					<Label>{type}</Label>
				{/snippet}
			</ControlDiv>
		{/each}
		<FieldErrors />
	</Fieldset>

	<Fieldset {form} name="connection">
		<Description>Select the option that best describes your connection to the building</Description>
		{#each connections as connection}
			<ControlDiv>
				{#snippet children({ props })}
					<input {...props} type="radio" value={connection} bind:group={$formData.connection} />
					<Label>{connection}</Label>
				{/snippet}
			</ControlDiv>
		{/each}
		<FieldErrors />
	</Fieldset>
</div>

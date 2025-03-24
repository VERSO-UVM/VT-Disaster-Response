<script lang="ts">
    import { superForm, defaults } from 'sveltekit-superforms';
    import { zod } from 'sveltekit-superforms/adapters';
    import { connections, schema, types } from "./schema";
	import { Label, Description, FieldErrors, Fieldset } from 'formsnap';
    import ControlDiv from '$lib/elements/ControlDiv.svelte'

	const form = superForm(defaults(zod(schema)));
	const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance>
	<Fieldset {form} name="type">
		<Description>What type of building?</Description>
        {#each types as type}
			<ControlDiv>
				{#snippet children({ props })}
					<input {...props} type="radio" value={type} bind:group={$formData.type}/>
                    <Label>{type}</Label>
				{/snippet}
			</ControlDiv>
		{/each}
		<FieldErrors />
	</Fieldset>

	<Fieldset {form} name="connection">
		<Description>What type of building?</Description>
        {#each connections as connection}
			<ControlDiv>
				{#snippet children({ props })}
					<input {...props} type="radio" value={connection} bind:group={$formData.type}/>
                    <Label>{connection}</Label>
				{/snippet}
			</ControlDiv>
		{/each}
		<FieldErrors />
	</Fieldset>
</form>

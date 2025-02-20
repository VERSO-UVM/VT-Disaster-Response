<script lang="ts">
	import { superForm, defaults } from 'sveltekit-superforms';
    import { zod } from 'sveltekit-superforms/adapters';
	import { Field, Control, Label, Description, FieldErrors, Fieldset, Legend } from 'formsnap';
	import { schema, homeTypes, relation } from './schema.js';
	import SuperDebug from 'sveltekit-superforms';

	const form = superForm(defaults(zod(schema)));
	const { form: formData, enhance } = form;
</script>

<h2>Residential section</h2>

<form use:enhance class="mx-auto flex max-w-md flex-col" method="POST">
    <Field {form} name="homeType">
        <Description>What type of residential building?</Description>
        {#each homeTypes as type}
          <Control>
            {#snippet children({ props })}
              <input {...props} type="radio" value={type.id} bind:group={$formData.homeType} />
              <Label>{type.desc}</Label>
            {/snippet}
          </Control>
        {/each}
        <FieldErrors />
	</Field>

    <Field {form} name="multi-unit-question">
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
	</Field>

    <Field {form} name="relation">
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
	</Field>
	<button>Submit</button>
</form>
<SuperDebug data={$formData} />

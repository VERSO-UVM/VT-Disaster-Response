<script lang="ts">
    import { superForm, defaults } from 'sveltekit-superforms';
    import { zod } from 'sveltekit-superforms/adapters';
	import {
		Field,
	} from 'formsnap';
    import ControlDiv from '$lib/ControlDiv.svelte';
    import TextInput from '$lib/TextInput.svelte';
    import { schema } from "./schema";
    const form = superForm(defaults(zod(schema)));
    const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance>
    <fieldset>
        <Field {form} name="name">
            <TextInput label="Name" bind:value={$formData.name} />
        </Field>

        <Field {form} name="email">
            <TextInput label="Email" type="email" bind:value={$formData.email} />
        </Field>

        <Field {form} name="phone">
            <TextInput label="Phone" bind:value={$formData.phone} />
        </Field>

        <Field {form} name="street1">
            <TextInput label="Street 1" bind:value={$formData.stret1} />
        </Field>

        <Field {form} name="street2">
            <TextInput label="Street 2" />
        </Field>
    </fieldset>

    <button type="submit">Submit</button>
</form>

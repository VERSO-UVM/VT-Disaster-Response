<script lang="ts">
    import { superForm, defaults } from 'sveltekit-superforms';
    import { zod } from 'sveltekit-superforms/adapters';
    import { connections, schema, types } from "./schema";

    const { form, enhance } = superForm(defaults(zod(schema)));
</script>

<form method="POST" use:enhance>
    <label for="type">What type of building? </label>
    <select name="type" bind:value={$form.type}>
        {#each types as type}
            <option value={type} selected={$form.type == type}>{type}</option>
        {/each}
    </select>

    <label for="connection">Select the option that best describes your connection to the building </label>
    <select name="connection" bind:value={$form.connection}>
        {#each connections as connection}
            <option value={connection} selected={$form.connection == connection}>{connection}</option>
        {/each}
    </select>

    <button type="submit">Submit</button>
</form>

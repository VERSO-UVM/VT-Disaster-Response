<script lang="ts">
    import { superForm, defaults } from 'sveltekit-superforms';
    import { zod } from 'sveltekit-superforms/adapters';
    import { connections, incidents, schema } from "./schema";
    const { form, enhance } = superForm(defaults(zod(schema)));
</script>

<form method="POST" use:enhance>
    <label for="incident">What are you reporting? </label>
    <select name="incident" bind:value={$form.incident}>
        {#each incidents as incident}
            <option value={incident} selected={$form.incident == incident}>{incident}</option>
        {/each}
    </select>

    <span>Select all that apply </span>
    {#each connections as connection}
        <label>
            <input type="checkbox" bind:group={$form.connection} name="connections" value={connection} />
            {connection}
        </label>
    {/each}

    <button type="submit">Submit</button>
</form>

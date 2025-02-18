<script lang="ts">
    import { superForm, defaults } from 'sveltekit-superforms';
    import { zod } from 'sveltekit-superforms/adapters';
    import { schema } from "./schema";
    const { form, enhance } = superForm(defaults(zod(schema)));
</script>

<form method="POST" use:enhance>
    <label for="name">Name </label>
    <input type="text" name="name" bind:value={$form.name}>

    <label for="email">Email </label>
    <input type="email" name="email" bind:value={$form.email}>

    <label for="phone">Phone </label>
    <input type="text" name="phone" bind:value={$form.phone}>

    <label for="street1">Street 1 </label>
    <input type="text" name="street1" bind:value={$form.street1}>

    <label for="street2">Street 2 </label>
    <input type="text" name="street2" bind:value={$form.street2}>

    <label for="city">City </label>
    <input type="text" name="city" bind:value={$form.city}>

    <label for="state">State </label>
    <input type="text" name="state" bind:value={$form.state}>

    <label for="zip">ZIP </label>
    <input type="text" name="zip" bind:value={$form.zip}>

    <button type="submit">Submit</button>
</form>

<script lang="ts">
	import { Field } from "formsnap";
	import { TextInput } from "$lib/elements";

	let { form, formData } = $props();
</script>

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
		<TextInput label="Street 2" bind:value={$formData.stret2} />
	</Field>

	<Field {form} name="city">
		<TextInput label="City" bind:value={$formData.city} />
	</Field>

	<Field {form} name="state">
		<TextInput label="State" bind:value={$formData.state} />
	</Field>

	<Field {form} name="zip">
		<TextInput label="ZIP" bind:value={$formData.zip} />
	</Field>
</fieldset>

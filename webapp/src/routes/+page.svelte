<script lang="ts">
	import SuperDebug, { superForm, defaults } from "sveltekit-superforms";
	import { zod } from "sveltekit-superforms/adapters";

	import CommercialForm from "$lib/forms/commercial/CommercialForm.svelte";
	import GeneralInfoForm from "$lib/forms/general-info/GeneralInfoForm.svelte";
	import InfrastructureForm from "$lib/forms/infrastructure/InfrastructureForm.svelte";
	import Residential from "$lib/forms/residential/Residential.svelte";

	import { schema as CommercialSchema } from "$lib/forms/commercial/schema";
	import { schema as GeneralInfoSchema } from "$lib/forms/general-info/schema";
	import { schema as InfrastructureSchema } from "$lib/forms/infrastructure/schema";
	import { schema as ResidentialSchema } from "$lib/forms/residential/schema";

	import { dev } from "$app/environment";
	import { base } from "$app/paths";
	import { goto } from "$app/navigation";

	type options = "Residential" | "Commercial" | "Infrastructure" | "";
	let selected: options = $state("");

	let schema = $derived.by(() => {
		let output = GeneralInfoSchema;

		switch (selected) {
			case "Residential":
				return output.and(ResidentialSchema);
			case "Commercial":
				return output.and(CommercialSchema);
			case "Infrastructure":
				return output.and(InfrastructureSchema);
			default:
				return output;
		}
	});

	const form = superForm(
		{},
		{
			SPA: true,
			onSubmit: ({ formData }) => {
				let data: Record<string, string> = {};
				formData.forEach((value, key) => (data[key] = value as string));
				const json = JSON.stringify(data);
				goto(`${base}/view-response?response-data=` + encodeURIComponent(json));
			}
		}
	);
	const { form: formData, enhance } = form;

	$effect(() => {
		form.form.set(defaults(zod(schema)).data);
	});
</script>

<main>
	<h1>What type of disaster are you reporting?</h1>

	<button onclick={() => (selected = "Residential")}>Residential</button>
	<button onclick={() => (selected = "Commercial")}>Commercial</button>
	<button onclick={() => (selected = "Infrastructure")}>Infrastructure</button>

	<form method="POST" use:enhance>
		{#if selected === "Residential"}
			<Residential {form} {formData} />
		{/if}

		{#if selected === "Commercial"}
			<CommercialForm {form} {formData} />
		{/if}

		{#if selected === "Infrastructure"}
			<InfrastructureForm {form} {formData} />
		{/if}
		{#if selected != ""}
			<GeneralInfoForm {form} {formData} />
			<div>
				<button type="submit">Submit</button>
			</div>
		{/if}
	</form>

	{#if dev}
		<SuperDebug data={formData} />
	{/if}
</main>

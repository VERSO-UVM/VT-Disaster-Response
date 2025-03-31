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

	const options = ["Residential", "Commercial", "Infrastructure"] as const;

	let selected: (typeof options)[number] | "" = $state("");

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
	{#if selected == ""}
		<div id="selection-screen">
			<h1>What type of disaster are you reporting?</h1>
			{#each options as option}
				<button onclick={() => (selected = option)}>{option}</button>
			{/each}
		</div>
	{:else}
		<form method="POST" use:enhance>
			<h1>Disaster Assistance Form</h1>
			<div>
				You selected:
				<select bind:value={selected}>
					{#each options as option}
						<option value={option} selected={selected == option}>
							{option}
						</option>
					{/each}
				</select>
			</div>

			{#if selected === "Residential"}
				<Residential {form} {formData} />
			{/if}

			{#if selected === "Commercial"}
				<CommercialForm {form} {formData} />
			{/if}

			{#if selected === "Infrastructure"}
				<InfrastructureForm {form} {formData} />
			{/if}

			<GeneralInfoForm {form} {formData} />
			<div>
				<button type="submit">Submit</button>
			</div>
		</form>

		{#if dev}
			<SuperDebug data={formData} />
		{/if}
	{/if}
</main>

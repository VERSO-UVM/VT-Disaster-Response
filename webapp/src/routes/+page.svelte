<script lang="ts">
	import CommercialForm from '$lib/forms/commercial/CommercialForm.svelte';
	import GeneralInfoForm from '$lib/forms/general-info/GeneralInfoForm.svelte';
	import InfrastructureForm from '$lib/forms/infrastructure/InfrastructureForm.svelte';
	import Residential from '$lib/forms/residential/Residential.svelte';
	type options = 'Residential' | 'Commercial' | 'Infrastructure' | '';
	let selected: options = $state('');
</script>

<main>
	<button onclick={() => (selected = 'Residential')}>Residential</button>
	<button onclick={() => (selected = 'Commercial')}>Commercial</button>
	<button onclick={() => (selected = 'Infrastructure')}>Infrastructure</button>

	<h1>What type of disaster are you reporting?</h1>

	{#if selected === 'Residential'}
		<Residential />
	{/if}

	{#if selected === 'Commercial'}
		<CommercialForm />
	{/if}

	{#if selected === 'Infrastructure'}
		<InfrastructureForm />
	{/if}
	{#if selected != ''}
		<GeneralInfoForm />
	{/if}
</main>


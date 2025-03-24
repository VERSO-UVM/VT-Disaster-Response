<script lang="ts">
	let { data } = $props();
</script>

<main>
	<h1>Form Response</h1>
	<code lang="json">{data.responseJsonString}</code>
</main>

<style>
	main {
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: start;
		align-items: center;
		flex-direction: column;
	}
	code {
		width: 40vw;
		background: var(--bg-inner);
		padding: 1rem;
		border-radius: 0.5rem;
	}
</style>

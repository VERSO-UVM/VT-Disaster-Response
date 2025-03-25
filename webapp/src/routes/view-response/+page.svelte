<script lang="ts">
	let { data } = $props();
</script>

<main>
	<h1>Form Response</h1>
	<code lang="json"><pre>{data.responseJsonString}</pre></code>
</main>

<style>
	main {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: start;
		align-items: center;
		flex-direction: column;
	}
	code {
		width: 40%;
		background: var(--bg-inner);
		padding: 1rem;
		border-radius: 0.5rem;
	}
</style>

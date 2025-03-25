<script lang="ts">
	import type { ComponentProps } from "svelte";
	import ControlDiv from "./ControlDiv.svelte";
	import { Control, Label } from "formsnap";

	type Props = {
		label?: string;
		type?: string;
		/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
		value?: any;
	};

	let {
		label,
		type = "text",
		value = $bindable()
	}: ComponentProps<typeof Control> & Props = $props();
</script>

<ControlDiv>
	{#snippet children({ props })}
		<div class="control-input">
			<div>
				<Label>{label}</Label>
			</div>
			<input {type} bind:value {...props} />
		</div>
	{/snippet}
</ControlDiv>

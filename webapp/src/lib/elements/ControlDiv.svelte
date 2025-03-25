<script lang="ts">
	// This is a simple wrapper around the Formsnap Control component.
	// Control on its own does not create an HTML element. So it is reccomended
	// to wrap it to create consistent styling and fit our needs. The
	// documentation provides an example for this which this component is
	// based off with our own customization.
	// See https://www.formsnap.dev/docs/components/control

	import { Control } from "formsnap";
	import type { ComponentProps } from "svelte";

	let {
		// Rename the children prop to childrenProp to avoid
		// conflicts with the Control component
		children: childrenProp,
		...restProps
	}: ComponentProps<typeof Control> & {} = $props();
</script>

<Control {...restProps}>
	{#snippet children({ props })}
		<div class="control-input">
			<!-- Forward the props to the children snippet -->
			{@render childrenProp({ props })}
		</div>
	{/snippet}
</Control>

<script lang="ts">
	import type { ComponentProps } from "svelte";
    import ControlDiv from '$lib/ControlDiv.svelte';
    import { Label } from 'formsnap';
 
	let {
        label,
        type = "text",
		...restProps
	}: ComponentProps<typeof Control> & {
	} = $props();
</script>

<ControlDiv>
    {#snippet children({ props })}
        <div class="control-input">
            <div>
                <Label>{label}</Label>
            </div>
            <input {type} {...restProps} {...props}>
        </div>
    {/snippet}
</ControlDiv>

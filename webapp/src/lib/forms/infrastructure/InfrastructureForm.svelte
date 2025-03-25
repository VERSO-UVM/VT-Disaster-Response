<script lang="ts">
	import { Description, Fieldset } from "formsnap";
	import ControlDiv from "$lib/elements/ControlDiv.svelte";
	import { connections, incidents } from "./schema";

	let { form, formData } = $props();
</script>

<div>
	<Fieldset {form} name="incident">
		<Description>What are you reporting?</Description>
		<ControlDiv>
			{#snippet children({ props })}
				<select bind:value={$formData.incident} {...props}>
					{#each incidents as incident}
						<option value={incident} selected={$formData.incident == incident}>
							{incident}
						</option>
					{/each}
				</select>
			{/snippet}
		</ControlDiv>
	</Fieldset>

	<Fieldset {form} name="connections">
		<Description>Select all that apply</Description>
		{#each connections as connection}
			<ControlDiv>
				{#snippet children({ props })}
					<label>
						<input
							type="checkbox"
							bind:group={$formData.connection}
							value={connection}
							{...props}
						/>
						{connection}
					</label>
				{/snippet}
			</ControlDiv>
		{/each}
	</Fieldset>
</div>

# VT Disaster Response Webapp

This webapp serves as a proof of concept for the functional prototypes we are creating.

## Developing/Contributing

**Prerequisites**

- [Bun](https://bun.sh/)

#### Installing Dependencies

```sh
bun install
```

#### Running the dev server

```sh
bun dev
```

then go to http://localhost:5173

### Notes

When creating links in pages, make sure to respect the baseUrl config like so:

```svelte
<script lang="ts">
	import { base } from "$app/paths";
</script>

<nav>
	<a href="{base}/">Home</a>
	<a href="{base}/about">About</a>
</nav>
```

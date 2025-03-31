import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { base } from "$app/paths";

export const load = (async (ctx) => {
	const responseDataRaw = ctx.url.searchParams.get("response-data") || null;

	if (responseDataRaw === null) {
		return redirect(307, base);
	}

	try {
		const responseData = await JSON.parse(decodeURIComponent(responseDataRaw));
		const responseJsonString = JSON.stringify(responseData, null, 2);
		return {
			responseJsonString
		};
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (e) {
		return redirect(307, base);
	}
}) satisfies PageLoad;

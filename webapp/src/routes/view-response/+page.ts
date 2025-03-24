import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load = (async (ctx) => {
	const responseDataRaw = ctx.url.searchParams.get("response-data") || null;

	if (responseDataRaw === null) {
		return redirect(307, "/");
	}

	try {
		const responseData = await JSON.parse(decodeURIComponent(responseDataRaw));
		const responseJsonString = JSON.stringify(responseData, null, 2);
		return {
			responseJsonString
		};
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (e) {
		return redirect(307, "/");
	}
}) satisfies PageLoad;

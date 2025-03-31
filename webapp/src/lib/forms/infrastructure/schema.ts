import { z } from "zod";

export const incidents = [
	"Washed out road or bridge",
	"Landslide and/or fallen trees blocking roadway",
	"Burst water or sewer main, or fire hydrant",
	"Damaged utility pole and/or downed power/communications lines",
	"Other"
] as const;
export const connections = [
	"This incident is on my private property",
	"This is blocking access to/from my property",
	"I am a bystander (this incident does not directly affect me)"
] as const;

export const schema = z.object({
	incident: z.enum(incidents),
	connection: z.enum(connections)
});

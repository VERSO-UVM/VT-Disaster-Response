import { z } from "zod";

export const incidents = [
	"Washed out road or bridge",
	"Landslide and/or fallen trees blocking roadway",
	"Burst water or sewer main, or fire hydrant",
	"Damaged utility pole"
] as const;
export const connections = [
	"This incident is on my private property",
	"This is blocking access to/from my property",
	"I am a bystander (not an owner or tenant of this building)"
] as const;

export const schema = z.object({
	incident: z.enum(incidents),
	connection: z.enum(connections)
});

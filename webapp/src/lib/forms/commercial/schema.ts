import { z } from "zod";

export const types = [
	"Standalone structure",
	"Single-level shopping complex",
	"Multi-level shopping complex",
	"Multi-unit mixed-use building"
] as const;
export const connections = [
	"I rent this building",
	"I own this building",
	"I am a bystander (not an owner or tenant of this building)"
] as const;

export const schema = z.object({
	type: z.enum(types),
	connection: z.enum(connections)
});

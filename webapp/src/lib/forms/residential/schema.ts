import { z } from "zod";

export const homeTypes = [
    { id: "single-family", desc: "Single Family Home" },
    { id: "multi-unit", desc: "Multi-unit residential building" },
    { id: "mixed-use", desc: "Multi-unit mixed use building" },
] as const;

export const relationSingleUnit = [
    { id: "renter", desc: "I rent this building" },
    { id: "owner", desc: "I own this building" },
    { id: "bystander", desc: "I am a bystander, not an owner or tenant of the residence" },
] as const;

export const relationMultiUnit = [
    { id: "renter", desc: "I rent in this building" },
    { id: "owner-internal", desc: "I own and reside in this building" },
    { id: "owner-external", desc: "I own this building and reside elsewhere" },
    { id: "bystander", desc: "I am a bystander, not an owner or tenant of the residence" },
] as const;

export const schema = z.object({
    homeType: z.enum(homeTypes.map(option => option.id)),
    relation: z.enum(relationSingleUnit.concat(relationSingleUnit).map(option => option.id)),
});

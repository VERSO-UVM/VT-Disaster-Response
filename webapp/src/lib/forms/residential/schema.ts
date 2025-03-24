import { z } from 'zod';

export const homeTypes = [
	{ id: 'single-family', desc: 'Single Family Home' },
	{ id: 'multi-unit', desc: 'Multi-unit residential building' },
	{ id: 'mixed-use', desc: 'Multi-unit mixed use building' }
] as const;

export const relationSingleUnit = [
	{ id: 'renter', desc: 'I rent this building' },
	{ id: 'owner', desc: 'I own this building' },
	{ id: 'bystander', desc: 'I am a bystander, not an owner or tenant of the residence' }
] as const;

export const relationMultiUnit = [
	{ id: 'renter', desc: 'I rent in this building' },
	{ id: 'owner-internal', desc: 'I own and reside in this building' },
	{ id: 'owner-external', desc: 'I own this building and reside elsewhere' },
	{ id: 'bystander', desc: 'I am a bystander, not an owner or tenant of the residence' }
] as const;

export const habitability = [
	{ id: 1, desc: '1. There is minimum damagy to my home' },
	{ id: 2, desc: '2. Some utilities have been cut off' },
	{ id: 3, desc: '3. (todo)' },
	{
		id: 4,
		desc: '4. (My home is entirely uninhabitable (significant water ingress, structural damage, fire)'
	},
	{ id: 5, desc: '5. My home is gone (burned, washed away, collapsed)' }
];

export const schema = z.object({
	homeType: z.enum(homeTypes.map((option) => option.id)),
	relation: z.enum(relationSingleUnit.concat(relationSingleUnit).map((option) => option.id)),
	habitability: z.enum(habitability.map((option) => option.id))
});

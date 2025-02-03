# Disaster Reporting Form

_This is a living document describing the questions and overall design of the disaster reporting form._

# General Form Questions

- Name
- _At least one of:_
  - Email
  - Phone Number
- Location (coordinates via geolocation APIs)
  - If geolocation is available, confirm whether the user's current location is the incident location. If they are not near the incident, provide the user with standard fields

# Categories

On the first page of the form

## Residential

- Single family homes
- Duplexes
- Apartments
  **Category Applies To**
- Renters
- Owners of resident buildings

### Questions

1. What type of building?
   - Single Family Home
   - Multi-unit residential only
   - Multi-unit mixed-used
2. Select the option that best describes your situation
   - I rent in this building
   - I own this building
   - I own and reside in this building (_if multi-unit_)
   - I own this building and reside elsewhere (_if multi-unit_)
   - I am a bystander, not an owner or tenant of/in the structure
     **_Further questions only apply if the person is not a bystander_**
3. On a scale from 1-5, describe the habitability of your home
   1. There is minimal damage to my home
   2. Some utilities have been cut off
   3.
   4. My home is entirely uninhabitable (significant water ingress, structural damage, and/or fire)
   5. My home is gone (burned, washed away, collapsed)

## Business / Commercial (Structure)

- Stores
- Workshops
- Malls
- Gas station

### Questions

1. What type of building?
   - Standalone structure (i.e. fuel station, restaurant, or store surrounded by road/parking lot/sidewalk)
   - Single-level shopping complex (i.e. multiple stores directly next to each other or in the same structure)
   - Multi-level shopping complex
   - Multi-unit mixed-use building (i.e. storefront with apartments above )
2. Select the option that best describes your situation
   - I rent in this building
   - I own this building
   - I am a bystander, not an owner or tenant of/in the structure

## Infrastructure

- Utility poles
- Fire hydrants
- Water mains
- Sewer
- Roads/Bridges

### Questions

1. What are you reporting?
   - Washed out road or bridge
   - Landslide and/or fallen trees blocking roadway
   - Burst water or sewer main, or fire hydrant
   - Damaged utility pole (i.e. fallen pole, broken wires hanging down, etm.)
2. Select all that apply
   - This incident is on my private property (ie my driveway is washed out)
   - This is blocking access to/from my property
   - I am a bystander, not an owner or tenant of/in the structure

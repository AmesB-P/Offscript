# Offscript asset library

## Purpose

This directory holds the original local illustrations used by every Offscript page. The stories remain clearly fictional sample content for a portfolio concept.

## Shared art direction

- Medium: editorial print illustration with gouache fields, restrained screen-print texture, imperfect ink registration, and sharp graphic silhouettes.
- Palette: paper `#EDDFC8`, ink `#642F26`, deep field `#7C342C`, accent `#C75A3C`, and soft surface `#F7F0E3` only.
- Composition: landscape 3:2 covers with important subjects inside the central 55 percent so portrait, 4:3, near-square, and wide crops remain useful.
- Avoid: readable text, letters, logos, watermarks, gradients, photorealism, glossy 3D, recognisable brands, and decorative clutter.

## Generation prompt template

```text
Use case: illustration-story
Asset type: responsive editorial article cover for Offscript
Primary request: <prompt subject below>
Style/medium: tactile editorial print illustration, gouache fields with restrained screen-print texture, imperfect ink registration, sharp graphic silhouettes
Composition/framing: landscape 3:2; keep all important subjects and details inside the central 55 percent for portrait, 4:3, near-square, and wide crops
Color palette: use only #EDDFC8, #642F26, #7C342C, #C75A3C, and #F7F0E3
Constraints: original illustration; no readable text, letters, logos, watermarks, gradients, photorealism, glossy 3D, recognisable brands, or decorative clutter
```

## Illustration manifest

| File                                           | Article                                       | Alt text                                                                                                | Prompt subject                                                                      |
| ---------------------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `illustrations/culture-midnight-radio.png`     | What a local station leaves on after midnight | Two people working in a late-night community radio room with records, turntable, mixer, and microphone. | Two anonymous figures selecting records and working a compact radio mixer at night. |
| `illustrations/design-chair-after-use.png`     | The shape of a chair after use                | A worn wooden chair with visible repair joints, tools, and a replacement seat in a working studio.      | A repaired wooden chair with softened edges and practical tools.                    |
| `illustrations/design-room-for-noticing.png`   | A room built for noticing                     | A working studio table with paper studies, material samples, models, and window light.                  | An unresolved studio with studies, samples, models, and directional daylight.       |
| `illustrations/people-clay-clock.png`          | Clay keeps its own clock                      | A ceramicist shaping a vessel at a wheel with drying forms on studio shelves.                           | A fictional ceramicist working at a wheel among drying vessels.                     |
| `illustrations/culture-north-market-table.png` | The long table at North Market                | Neighbours gathering around a long market table with shared dishes and produce.                         | A communal market table and anonymous neighbours sharing food.                      |
| `illustrations/people-coat-repair.png`         | A coat repaired in public                     | Hands mending a worn coat with needle, thread, patches, and a street-facing window.                     | Hands repairing a coat near a front window.                                         |
| `illustrations/culture-borrowed-shelf.png`     | The borrowed shelf                            | Two hands exchanging a book in front of a small neighbourhood shelf with an empty space.                | A neighbourhood exchange shelf and a book passing between hands.                    |

## Provenance

All seven covers were generated for this project with the built-in image model on 2026-09-15. They are original illustrations for local sample content and are served through `next/image` from `/assets/illustrations/`.

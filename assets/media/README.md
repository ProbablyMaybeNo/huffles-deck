# Deck media — drop your audio/video here

The deck's players look for these exact filenames. Drop a file in with the matching
name and it just works (the placeholder disappears, the player plays it). Until a file
exists, the slide shows the labelled placeholder.

| Slide | File | Type | What it is |
|---|---|---|---|
| 3 — The Happening | `03-happening.mp4` | video | Early-Happening footage montage (news, protests, fuel queues, famine, empty cities, citizen phone clips). AI narration can be baked into the file. |
| 4 — Angela Overview | `04-angela-overview.mp3` | audio | Dr. Angela Ward voice log, Part 1 (Overview). |
| 5 — Angela Biology | `05-angela-biology.mp3` | audio | Dr. Angela Ward voice log, Part 2 (Biology + Behaviour). |

**Notes**
- Formats: video = `.mp4` (H.264) is safest; audio = `.mp3` (or `.m4a`/`.ogg` — update the `src` in `index.html` if you change extension).
- In the interactive deck, media **auto-plays when you land on the slide** and the in-world ▶/⏸/⏹ buttons control it (clicking the player does NOT advance the slide).
- Media never appears in the PDF / Figma export — those stay on the placeholder/poster.
- Want more players (e.g. DOLOS CCTV on slide 14, or clips in the "strategy" grid)? Tell Ross's note and they'll be wired the same way.

# The Huffles — Pitch Deck (HTML build)

A self-running, navigable **Windows-98 "classified cache" deck**. The conceit:
a TOP SECRET government case file on the Huffles (opened 2000, the year they arrived),
kept classified for 25 years, **leaked to the public by HRUMF** on the 25th anniversary (2025)
to clear the Huffles' name and expose DOLOS. Each slide is a window / dialog / app on the
original 2000-era archive terminal.

Aesthetic: authentic Win98 chrome via [`98.css`](https://jdan.github.io/98.css/) + a VT323 CRT
font for the terminal screens. All imagery is **labelled placeholder wells** — swap them when ready.

## View it
Open `index.html` in any browser (Chrome/Edge best).
- **Navigate:** → / ← arrows, Space, click **Prev / Next** in the taskbar, or click windows.
- Fits any screen (the 1920×1080 stage auto-scales, letterboxed).
- Deep-link a slide with `#s7` etc.

## The 17 screens
1 Title (CRT boot) · 2 The Happening / Mass Extinction Protocol · 3 Access logon ·
4 What is a Huffle (biology) · 5 Found footage (video exhibits) · 6 The kids who saved the world ·
7 HRUMF HQ · 8 All Stars roster · 9–12 Dossiers (Indy+Sassy, Fai+Luca, Isaac+Alan, Angela+Tic/Tac/Toe) ·
13 The Schism · 14 DOLOS (front vs leaked) · 15 The strategy IS the IP · 16 Where this goes · 17 The Invitation (close).

## Edit it
- **Text:** open `index.html`, find the `<!-- SLIDE n -->` comment, edit copy in place.
- **Swap a placeholder image:** each grey hatched box is `<div class="ph">…</div>`.
  Replace the whole div with `<img src="assets/your-image.png" style="width:…;height:…;object-fit:cover;">`
  (the label/sub/dims spans inside are just guidance — width/height tell you the target crop).
- **Video:** slide 5's black Media Player box is `<div class="ph video">` — drop an `<video>` in.
- **Desktop icon labels** carry the story (CASE FILES, FOUND FOOTAGE, DOLOS WATCH…) — edit in `js/deck.js` (`ICONS`).
- **Colours / fonts / CRT effects:** `css/deck.css` (tokens at top).

## Regenerate the PDF
After edits: `node export-pdf.mjs` → rewrites `The-Huffles-Deck.pdf` (17 pages, 1920×1080 @2×).

## Files
- `index.html` — all 17 slides
- `css/deck.css` — custom styling · `css/98.css` — Win98 chrome (vendored) · fonts vendored alongside
- `js/deck.js` — nav + desktop furniture injection
- `assets/icons/` — authentic Win98 icons (from @react95/icons)
- `export-pdf.mjs` — PDF exporter · `The-Huffles-Deck.pdf` — current export

Canon used: arrival **2000**, **25th anniversary 2025**, Ranger/Warden/Seeker divisions,
Cindy Sloane (HRUMF) & Chris Tanti (DOLOS) schism, Madeira OH origin, DOLOS (not DERP).
Copy adapted from `../pitch-deck-v2-2026-06.md`. Image targets keyed to `../pitch-deck-v2-ASSET-LIST.md`.

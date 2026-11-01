# Redline Performance Yambol — website

Live: **https://redlineyambol.github.io/**

One-page site for Redline Performance (chip tuning, DPF/EGR/AdBlue, car service, trucks & agri) in Yambol.
Plain HTML, hosted free on GitHub Pages. Languages: BG / EN / TR / RO.

## Files

| File | What it is |
|---|---|
| `index.html` | The website (texts, cars, links — everything is in here) |
| `ai-receptionist.html` | AI receptionist page, hidden from Google until you link it |
| `assets/` | Logo, workshop photo, map image, favicon, share image |
| `robots.txt`, `sitemap.xml` | For Google |
| `tools/sync-bg-text.js` | Copies Bulgarian texts into the HTML for Google (run after text changes) |
| `SEO.md` | Step-by-step Google plan |

## Making small changes

Every change pushed to `main` goes live in about 1 minute.

**Option 1 — ask Claude:** "change X on the Redline site". Claude edits, runs the sync tool, pushes.

**Option 2 — on github.com, from the phone or PC:** open `index.html` → pencil icon → edit → **Commit changes**.
Where things are inside `index.html`:

- **Phone, links, map pin, Google review link:** `const CFG = {` near the top of the script.
- **Texts:** `const T = {` → `bg:`, `en:`, `tr:`, `ro:`.
  If you change a **Bulgarian** text here, also change the same words in the HTML above
  (search for the old text), or ask Claude to run `node tools/sync-bg-text.js`.
- **Calculator cars:** `const CARS = [` — one line per engine:
  `["BMW","3 F30","320d 184",184,380,225,450]` = brand, model, engine, stock hp, stock Nm, Stage 1 hp, Stage 1 Nm (+ optional Stage 2 hp, Nm).
- **Projects:** `const PROJECTS = [`. Upload a photo to `assets/`, then add `img:"assets/photo.jpg"`, or `before:` / `after:` for the drag slider.
- **New photo for "За Redline":** replace `assets/workshop.jpg` with a file of the same name.

## Own domain later (optional)

Buy e.g. `redlineyambol.com`, then: repo **Settings → Pages → Custom domain** → type it → add the DNS records GitHub shows at the domain seller.
Then replace `https://redlineyambol.github.io` with the new address in `index.html`, `robots.txt`, `sitemap.xml`.

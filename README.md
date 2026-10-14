# Classera Inspire – rewards prototype (EN / AR)

Static, animated prototype of the Inspire rewards flow (student + parent), built from the Figma file *LMS ECO System* using its Classera tokens (primary `#01718B`, Inter, 8/16 px radii).

**Flow:** My Inspire → Marketplace → offer → redeem (free / coins) → rating.
Branches: Core-only offer → upgrade request → parent approves; 18+ offer → guardian approval; low coins → Inspire Plus request; expired / out-of-stock / duplicate states.
Use the **Student / Parent** switch to approve requests. **EN / ع** switches language and flips to RTL.

**Files:** `index.html`, `styles.css`, `app.js` (core screens), `flows.js` (extra flows: popups, requests, coin requests, parent notifications, payment).

## Run locally
    python3 -m http.server 8000   # then open http://localhost:8000

## Publish on GitHub Pages
    git init && git add . && git commit -m "Classera Inspire prototype"
    git branch -M main
    git remote add origin https://github.com/<you>/classera-inspire.git
    git push -u origin main
Then: repo **Settings → Pages → Deploy from branch → main / (root)**. Live URL: `https://<you>.github.io/classera-inspire/`

## Images
Offer tiles use official brand marks (Simple Icons, CC0) on brand-colour backgrounds. To add real photos, export them from Figma and save as `images/<brand>.jpg` (e.g. `images/starbucks.jpg`); they appear automatically over the tile. Offers are samples for prototyping, not live partnerships: get brand permission before production.

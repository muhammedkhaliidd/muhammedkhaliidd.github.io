# Muhammed Khalid — Portfolio

Static multi-page portfolio site built with **HTML/CSS/JS** (dark mode default + light toggle), designed to be hosted for free on **GitHub Pages** as a **user site**.

## Pages

- `index.html` — Home
- `projects.html` — Projects (ordered as in the CV)
- `experience.html` — Experience
- `about.html` — Skills + education + languages
- `contact.html` — Contact + CV download

## Run locally

You can open `index.html` directly, but it’s best to run a local server so navigation matches GitHub Pages behavior.

### Option A (Python)

```bash
python -m http.server 5173
```

Then open `http://localhost:5173`.

### Option B (Node)

```bash
npx serve .
```

## Publish (GitHub Pages user site)

1. Create a GitHub repo named **exactly**: `<your-username>.github.io`
2. Put all files in the repo root (this folder)
3. Commit and push to `main`
4. In GitHub:
   - **Settings** → **Pages**
   - **Source**: “Deploy from a branch”
   - **Branch**: `main` and folder `(root)`
5. Your site will be live at `https://<your-username>.github.io`

## Verification checklist

- Navigation works across all pages:
  - `index.html`, `projects.html`, `experience.html`, `about.html`, `contact.html`
- Theme toggle works:
  - Default is **dark**
  - Toggle switches to light and persists after refresh
- CV download works:
  - Google Drive CV link opens from Home/Contact
- Projects order matches CV:
  - ATOM CME → ATOM PORTAL → DYNE APP → DYNE DASHBOARD → E-خدمات → ISCOPE INSPECTION → ISCOPE REPORT
- Personal photo loads:
  - `assets/img/headshot.png` is visible on Home

## Customize

- **LinkedIn URL**: update the LinkedIn card on `contact.html`
- **Theme**: palette is defined in `assets/css/styles.css` using CSS variables
- **CV link**: update the Google Drive URL used in the HTML pages (keep the same Drive file ID by uploading a new _version_ in Drive)
- **Photo**: replace `assets/img/headshot.png`

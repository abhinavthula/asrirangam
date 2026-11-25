# Abhinav Srirangam — Portfolio

A lightweight, responsive, static portfolio for GitHub Pages. Built with semantic HTML, modern CSS and vanilla JavaScript; no build step or package installation is required.

## Run locally

From this directory:

```bash
python3 -m http.server 8000
```

Open http://localhost:8000/asrirangam/ if serving the parent directory, or http://localhost:8000/ if serving this directory directly.

## Build / validation

There is no compile step. Validate the files with:

```bash
python3 - <<'PY'
from pathlib import Path
from html.parser import HTMLParser

class Check(HTMLParser):
    pass

html = Path('index.html').read_text(encoding='utf-8')
Check().feed(html)
for path in ['styles.css', 'script.js', 'asset/abhinav-srirangam.webp']:
    assert Path(path).is_file(), f'Missing: {path}'
print('HTML parsed; required assets are present.')
PY
```

For a production smoke test, serve the directory and check the page, styles, script and image return HTTP 200.

## Deploy to GitHub Pages

This project is configured for the existing project site URL:

`https://abhinavthula.github.io/asrirangam/`

1. Copy the contents of this folder into the root of the `asrirangam` repository.
2. Commit and push to the branch configured for GitHub Pages (typically `main`):

```bash
git add .
git commit -m "Redesign personal portfolio"
git push origin main
```

3. In GitHub, open **Settings → Pages** and confirm the source is the intended branch and `/ (root)` (or the existing deployment workflow).
4. Wait for the Pages deployment to complete, then verify the live URL.

## Content notes

- Career details and credentials were drawn from the supplied portfolio and publicly indexed LinkedIn profile information available during the redesign.
- Some employment dates and role titles were not exposed in the public profile snapshot, so they are intentionally not invented. Update the experience timeline when a current CV or LinkedIn PDF export is available.
- Credential status is shown using the available issue/expiry dates and should be rechecked with the issuing bodies.
- No email address, GitHub profile URL, downloadable CV or unverified project URLs have been fabricated.


## Refined professional content

The experience and project sections distinguish:
- Individual implementation: Jenkins pipeline automation, Prisma Cloud image scanning, Twistcli integration on Windows Azure DevOps agents, and GitLab API governance automation.
- Team contribution: Centricity AWS Data Warehouse architecture.

Quantified achievements are intentionally not claimed because verified metrics have not been supplied. The portfolio uses qualitative engineering outcomes instead. Exact job titles and employment dates remain pending confirmation from the latest CV/LinkedIn export.


## Resume-aligned content update

The experience timeline and certification list have been updated from the resume supplied by Abhinav. The timeline now reflects the dates and client/project descriptions stated in that document (August 2017 onward), including the Arita Solutions engagements for QDB and QNB, the Microsoft AKS Engineer role, and earlier Ford, River Stone, Corinex and AWS projects. The resume does not provide certification issue/expiry dates, so the site does not claim current validity. The resume lists B.Tech at CJITS, JNTU Hyderabad (2012–2016).

Contact details on the site are taken from the supplied resume. Please verify that the phone number and email address are still intended for public display before publishing.

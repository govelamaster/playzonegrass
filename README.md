# playzonegrass.com

Landing oficial de **PlayZone Grass · by Sportmaster (Grupo Master México)**.

## Stack

Single-file HTML + CSS + vanilla JS. Sin frameworks. Deploy en **Cloudflare Pages**.

## Desarrollo local

```bash
npx serve -l 4332 .
```

## Deploy

```bash
wrangler pages deploy . --project-name=playzonegrass --branch=main
```

## Estructura

- `index.html` — landing single-page
- `assets/img/` — 5 fotos (hero + 3 escenarios + close-up fibras)
- `assets/img/logo-playzone.png` — logo oficial
- `robots.txt`, `sitemap.xml`, `_redirects` — SEO

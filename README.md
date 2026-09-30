# Hermes Bot Mobile site

Public beta site for **Hermes Bot Mobile** and `hermes-bot.app`.

## Deployment

The site is deliberately static: `index.html`, `styles.css`, `site-data.js`, and `app.js`. It can be served directly by GitHub Pages or Cloudflare Pages with no build step.

## Content sources

- App capabilities and roadmap: private HermesBotMobile `docs/FEATURES.md`.
- HMP compatibility and installation: public [MahdiHedhli/hermes-hmp](https://github.com/MahdiHedhli/hermes-hmp).
- `site-data.js` is the public, marketing-safe projection of those sources.

Do not copy private implementation details, credentials, tailnet addresses, test identities, or unreleased security findings into this repository.

## Beta links

The iOS and Android buttons are intentionally disabled until public beta URLs are available.

## Website screenshots

`assets/screenshots/android-demo-00-pairing.png` through
`android-demo-04-model.png` are synthetic, offline Android demo captures from
the mobile app's beta listing. They contain no live host or conversation data.
Label them as demo previews when using them on the website.

## Next automation

Add a workflow in the private app repository that publishes a sanitized feature-data artifact or opens a PR here when `docs/FEATURES.md` changes. HMP should similarly publish version/compatibility metadata once releases exist.

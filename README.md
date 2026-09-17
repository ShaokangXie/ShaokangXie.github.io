# Shaokang Xie — academic website

Live site: https://shaokangxie.github.io/

A customized [Minimal Light](https://github.com/yaoyao-liu/minimal-light) layout, integrated with the existing Jekyll Scholar bibliography and Jekyll content collections. The upstream light-mode Sass and CC0 license are retained locally. See [design and validation notes](docs/website-refresh.md).

## Editing

- Biography: `_pages/about.md`
- Papers and poster/slides links: `_bibliography/papers.bib`
- Presentation PDFs: `assets/pdf/`
- News: `_news/` (date entries by announcement date; keep historical entries intact)
- CV: `_data/cv.yml`
- Projects: `_projects/`
- Teaching/service: `_pages/teaching.md`
- Page shell: `_layouts/default.liquid`
- Theme adjustments: `_sass/_academic-site.scss`

## Build and check

Use Ruby 3.3, Bundler 2.5.23, and ImageMagick:

```sh
bundle install
bundle exec jekyll build
python3 _scripts/check_site.py
bundle exec jekyll serve --port 4000
```

The checker validates generated local links/anchors, publication resources, PDF signatures, key content, and counter integration. After design changes, inspect desktop and mobile layouts too.

GitHub Actions builds pushes to `main` and deploys generated content to `gh-pages`.

## Visitor statistics

The unavailable ClustrMaps image was replaced with Busuanzi site visitor and page-view counters in September 2026. Counts start separately from the old provider; the old ClustrMaps history link remains available. The external counter only loads on the production hostname, not local previews. If the service cannot load, numeric counters stay hidden and the site remains usable.

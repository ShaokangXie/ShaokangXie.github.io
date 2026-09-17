# Website refresh — September 2026

## Scope and implementation plan

- Apply an adapted Minimal Light presentation while retaining Jekyll, existing page URLs, bibliography data, and project/news collections.
- Use a compact profile sidebar, readable white main column, blue text links, and unboxed publication and project lists. Stack the layout on phones. Avoid external font/icon and UI-library dependencies in the rendered pages.
- Update Cassandra's acceptance, the upcoming ResilientDB release responsibility, and completed conference presentations. Do not infer Apache graduation or claim the September 30 release has shipped.
- Publish the four supplied PDFs under stable descriptive filenames, retaining older asset URLs.
- Replace the unavailable ClustrMaps image with Busuanzi site visitor/page-view counters, preserve the original history link, and label the new statistics as starting September 2026. Only count the production hostname. The provider hides counters if unavailable.

## Validation

Build with the existing locked dependencies. Check generated navigation, local links, publication count, PDF links and file signatures, BibTeX controls, and new factual text. Inspect the rendered desktop and mobile layouts and the production deployment before reporting completion.

## Theme provenance

Minimal Light: https://github.com/yaoyao-liu/minimal-light

The upstream light-mode Sass is vendored in `_sass/vendor/_minimal-light.scss`; the CC0 license is retained in `docs/licenses/minimal-light.txt`. The layout is adapted to this site's existing Jekyll collections and Jekyll Scholar bibliography. Site-specific styling is in `_sass/_academic-site.scss`. Existing al-folio source remains available in version control and unused templates for compatibility.

## Verification results

- Production Jekyll build and the deployment CSS purge pass with the existing Gemfile.lock.
- Generated-site checker passes for 23 HTML pages, local links and anchors, all six papers, four PDF signatures/links, CV locations, and upcoming release details.
- Desktop and phone layouts inspected in Chrome; the publications page has equal viewport/content width (375 px) with no horizontal overflow. Native BibTeX disclosure works without a JavaScript UI library.
- Cassandra's conference acceptance is displayed as VLDB 2027. The exported citation keeps its known 2026 manuscript year and an explicit forthcoming note, without inventing journal volume/issue/page metadata.
- News dates retain their precise announcement dates in source and HTML time metadata; the compact list displays month and year.

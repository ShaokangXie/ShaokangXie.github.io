#!/usr/bin/env python3
"""Check rendered site navigation, publication resources, and important content."""
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit
import sys

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.path = path
        self.links, self.ids, self.text, self.publications = [], [], [], []
        self.feed(path.read_text())

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        for key in ('href', 'src'):
            if attrs.get(key):
                self.links.append(attrs[key])
        if tag == 'article' and 'publication' in attrs.get('class', '').split():
            self.publications.append(attrs['id'])

    def handle_data(self, data):
        self.text.append(data)

root = Path(sys.argv[1] if len(sys.argv) > 1 else '_site').resolve()
assert root.is_dir(), f'Missing build: {root}'
pages = {p.relative_to(root).as_posix(): Page(p) for p in root.rglob('*.html')}
errors = []
for name, page in pages.items():
    for item, count in Counter(page.ids).items():
        if count > 1:
            errors.append(f'{name}: duplicate id {item}')
    for link in page.links:
        parsed = urlsplit(link)
        if parsed.scheme or parsed.netloc:
            continue
        resolved = urlsplit(urljoin('/' + name, link))
        target = root / unquote(resolved.path).lstrip('/')
        if target.is_dir():
            target /= 'index.html'
        if not target.is_file():
            errors.append(f'{name}: missing local link {link}')
        elif resolved.fragment and target.suffix == '.html':
            dest = pages[target.relative_to(root).as_posix()]
            if unquote(resolved.fragment) not in dest.ids:
                errors.append(f'{name}: missing anchor {link}')

for name in ('index.html', 'publications/index.html'):
    page = pages[name]
    assert len(page.publications) == 6, f'{name}: missing publications'
    assert 'VLDB 2027' in ''.join(page.text)
    assert '<details class="bib-details">' in page.path.read_text()
    for stem in ('fides-vldb-2026', 'hydra-icde-2026'):
        for kind in ('poster', 'slides'):
            asset = f'/assets/pdf/{stem}-{kind}.pdf'
            assert asset in page.links, f'{name}: missing {asset}'
            assert (root / asset.lstrip('/')).read_bytes().startswith(b'%PDF-')

for name in ('index.html', 'projects/resilientdb/index.html', 'cv/index.html'):
    text = ' '.join(pages[name].text)
    assert 'v1.13.0' in text and 'September 30, 2026' in text, name

home = pages['index.html'].path.read_text()
assert 'www.clustrmaps.com/map_v2.png' not in home
assert home.count('id="busuanzi_value_site_uv"') == 1
assert "hostname === 'shaokangxie.github.io'" in home
assert 'second-year' not in home
assert 'USAAccepted' not in home
assert 'ResearchGate' in home
cv_text = ' '.join(pages['cv/index.html'].text)
for location in ('Boston, MA, US', 'Davis, CA, US', 'Shenzhen, China'):
    assert location in cv_text, f'CV missing location: {location}'
assert 'publication details forthcoming' in pages['publications/index.html'].path.read_text()
assert 'Preprint available' not in pages['publications/index.html'].path.read_text()
if errors:
    raise SystemExit('\n'.join(errors))
print(f'PASS: {len(pages)} pages; local links and anchors; six publications; four PDF assets; release details; counter integration.')

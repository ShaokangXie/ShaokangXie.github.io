---
layout: page
title: Projects
permalink: /projects/
description: Open-source systems and selected software projects.
nav: true
nav_order: 3
---

{% assign categories = 'research,course' | split: ',' %}
{% for category in categories %}
<h2>{% if category == 'research' %}Research & open source{% else %}Earlier projects{% endif %}</h2>
<div class="project-list">
{% assign projects = site.projects | where: 'category', category | sort: 'importance' %}
{% for project in projects %}
<article class="project-entry">
<h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
<p>{{ project.description }}</p>
</article>
{% endfor %}
</div>
{% endfor %}

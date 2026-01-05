---
layout: single
title: "Blog"
permalink: /blog/
author_profile: false
nav_order: 5
---

{: .lead }
Notes on applied machine learning, Bayesian modeling, graph + manifold learning, and the engineering work required to ship them.

## Recent posts

{% if site.posts.size > 0 %}
<ul class="post-list">
  {% for post in site.posts limit:10 %}
  <li>
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <p class="page__meta"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d, %Y" }}</time></p>
    <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>
  </li>
  {% endfor %}
</ul>
{% else %}
<p class="notice--info">Posts are on the way. Check back soon for deep dives, design notes, and lessons learned from production systems.</p>
{% endif %}

## Topics you can expect

- Structure-aware learning on graphs and manifolds  
- Bayesian inference, calibration, and uncertainty-aware decision-making  
- Evaluation harnesses and observability for ML systems  
- Collaborating across research and production teams  

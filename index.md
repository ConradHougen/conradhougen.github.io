---
layout: home
title: "Conrad D. Hougen"
permalink: /
author_profile: false
classes: wide
nav_order: 1
header:
  overlay_color: "#0e1724"
  overlay_filter: "0.75"
  overlay_image: "/assets/img/headshot-placeholder.png"
  caption: ""
  actions:
    - label: "View Projects"
      url: "/projects/"
      icon: "fas fa-folder-open"
    - label: "Read the Blog"
      url: "/blog/"
      icon: "fas fa-rss"
    - label: "Contact"
      url: "/contact/"
      icon: "fas fa-paper-plane"
excerpt: "Applied Machine Learning • Bayesian Methods • Graph + Manifold Learning Methods"
value_props:
  - title: "Applied ML systems"
    excerpt: "Designing models, data pipelines, and evaluation harnesses that survive production constraints."
    url: "/projects/"
    btn_label: "See projects"
    icon: "fas fa-cubes"
  - title: "Bayesian + graph learning"
    excerpt: "Structure-aware inference, uncertainty calibration, and graph signal processing for sensing and decision-making."
    url: "/blog/"
    btn_label: "Read insights"
    icon: "fas fa-project-diagram"
  - title: "Delivery with rigor"
    excerpt: "Tight feedback loops with researchers, engineers, and stakeholders to ship reliable, interpretable systems."
    url: "/contact/"
    btn_label: "Work together"
    icon: "fas fa-handshake"
---

# Conrad D. Hougen

{: .lead }
Applied machine learning researcher and engineer focused on structure-aware models, Bayesian methods, and the systems work that turns research into robust products.

I build end-to-end pipelines—from data strategy and model design to deployment and evaluation—that earn trust under uncertainty. Recent work spans distributed sensing, graph learning, signal processing, and topic modeling, blending theory with production pragmatism.

## What I do

{% include feature_row id="value_props" type="left" %}

## At a glance

- **Recent focus:** Probabilistic sensing, graph neural methods for structure-aware signals, and robust decision-making.  
- **Tooling:** Python, PyTorch, NumPy/SciPy, JAX, Ray, Spark, Docker/Kubernetes, C++ for performance-critical paths.  
- **Collaboration style:** Pairing research and engineering, emphasizing reproducibility, interpretable outputs, and crisp delivery milestones.  

## Selected work

- **Graph + manifold learning for sensing:** Built hierarchical topic models and graph signal processors to surface structure and confidence intervals in high-dimensional streams.  
- **Uncertainty-aware decision pipelines:** Shipped Bayesian inference workflows that balance latency with calibrated risk for distributed platforms.  
- **Production ML foundations:** Established evaluation harnesses, data contracts, and observability hooks that keep iterative research stable in production.  

[View the projects portfolio →](/projects/){: .btn .btn--primary .btn--large } [Review experience →](/career/){: .btn .btn--inverse .btn--large }

## Latest writing

{% if site.posts.size > 0 %}
<div class="archive__list">
  {% for post in site.posts limit:3 %}
  <article class="archive__item">
    <h3 class="archive__item-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <p class="page__meta"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d, %Y" }}</time></p>
    <p class="archive__item-excerpt">{{ post.excerpt | strip_html | truncate: 150 }}</p>
  </article>
  {% endfor %}
</div>
<p><a class="btn btn--light-outline" href="/blog/">Browse the blog →</a></p>
{% else %}
<p class="notice--info">Writing hub is coming soon. Subscribe via RSS once posts are published.</p>
{% endif %}

## Let’s build something reliable

If you’re exploring structure-aware models, uncertainty calibration, or production-grade ML systems, I’d love to help.

[Get in touch →](/contact/){: .btn .btn--primary }

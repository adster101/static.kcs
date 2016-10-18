---
title: Portfolio
page-class: portfolio
anchor-class: portfolio site-nav__link
layout: page
order: 3
---

Check out our most recent jobs. 

  <ul class="post-list">
    {% assign posts = site.posts %}
    {% for post in posts %}
      <li>
      {{ post.categories }}
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title | escape }}</a>
        </h2>
      </li>
    {% endfor %}
  </ul>
  <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>

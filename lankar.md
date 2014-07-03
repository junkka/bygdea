---
layout: page
title: Länkar
permalink: /lankar/
icon: external-link
---


<div ng-app="bygdea" ng-controller="lankar">
  
    <ul class="list-group">
      {% for link in site.data.links %}
      <a href="{{link.url}}" class="list-group-item">
        <p class="lead">{{link.name}}</p>
        <p>{{ link.desc }}</p>
      </a>
      {% endfor %}
    </ul>
  
</div>
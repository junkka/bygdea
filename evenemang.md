---
layout: page
title: Evenemang
permalink: /evenemang/
icon: calendar
---

<ul class="list-group" ng-app="bygdea" ng-controller="evenemang">
  {% raw %}
  <a ng-href="{{ even.url }}" 
  class="list-group-item" 
  ng-repeat="even in filtered = (evenemang | futureEvent) | orderBy: 'date'">
  <table style="width: 100%;">
    <tbody>
      <tr>
        <td width="80" style="padding-right:20px; text-align:center;">
          <span class="text-primary"><span style="font-size:200%;">{{ dateToISO(even.date) | date: 'd'}}</span><br>
          {{ dateToISO(even.date) | date: 'MMMM'}}<br><br>
          <span ng-hide="{{even.allday}}">{{dateToISO(even.date)| date: 'HH:mm'}}</span></span>
        </td>
        <td>
          <p class="lead">{{even.title}}</p>
          <p class="event-content" ng-bind-html="to_trusted(even.desc)"></p>
        </td>
        <td ng-show="{{even.url}}"><i class="text-primary fa fa-angle-right fa-3x pull-right"></i></td>
      </tr>
    </tbody>
  </table>

</a>
{% endraw %}
</ul>
var app = angular.module("bygdea", []);

app.controller('evenemang', function ($scope, $http, $sce) {

  $http({method: 'GET', url: 'events.json'}).
    success(function(d) {
      console.log(d);
      $scope.evenemang = d;
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });

  $scope.dateToISO = function(stringT) {
    stringT = stringT.replace(/ /,'T');
    return stringT.replace(/ /g,'');
  }

  $scope.to_trusted = function(html_code) {
    return $sce.trustAsHtml(html_code);
  }
  $scope.moreEvents = function(filtered) {
     return filtered > 5;
  }

  

});

app.filter('futureEvent', function () {
  return function (items) {
    return items.filter(function (item) {
      var d = new Date(item.date);
      var t = new Date();
      t.setHours(1); 
      t.setMinutes(0);
      return d >= t;
    });
  };
});


$( document ).ready(function() {
  var map = L.map('map').setView([64.06126, 20.85378], 15);
  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map from openstreetmap',
    maxZoom: 18
  }).addTo(map);
  var marker = L.marker([64.06166, 20.85378]).addTo(map);
  marker.bindPopup('Bygdeå!').openPopup();

});
angular.module("bygdea", []);

function evenemang($scope, $http, $sce) {

  $http({method: 'GET', url: '/events.json'}).
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
};

// function lankar($scope, $http) {

//   $scope.filtered = false;
//   $http({method: 'GET', url: '/events.json'}).
//     success(function(d) {
//       console.log(d);
//       $scope.evenemang = d;
//     }).
//     error(function(data, status, headers, config) {
//       // called asynchronously if an error occurs
//       // or server returns response with an error status.
//     });

//   $scope.dateToISO = function(stringT) {
//     stringT = stringT.replace(/ /,'T');
//     return stringT.replace(/ /g,'');
//   }
// };

$( document ).ready(function() {
  var map = L.map('map').setView([64.05966, 20.85378], 15);
  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map from openstreetmap',
    maxZoom: 18
  }).addTo(map);
  var marker = L.marker([64.06166, 20.85378]).addTo(map);
  marker.bindPopup('Bygdeå!').openPopup();

});
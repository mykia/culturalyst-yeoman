'use strict';

angular.module('culturalystApp')
  .controller('ArtistCtrl', function($scope, $location, $http){
    var artistId = $location.path().split('/').pop();
    console.log(artistId)
    // Artist(artistId).then(function(artist){
    //   $scope.artistData = artist;
    //

    $http.get('/api/users/' + artistId).then(function(res) {
      console.log(res);
      $scope.artist = res.data;
    })
    
  });


    // $firebaseObject(cultFire.child('Users').child('/' + artistId))
    //   .$loaded()
    //   .then(function(data){
    //   $scope.artist = data
    //   console.log($scope.artist)
    // })


  });

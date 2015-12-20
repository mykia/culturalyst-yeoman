'use strict';



// class UploadController {
//
//   constructor($log) {
//       this.$log = $log;
//       this.$log.info('uploader works!');
//   }
//
//
// } 

angular.module('culturalystApp.uploadArtistContent', ['ngFileUpload'])
  .controller('UploadCtrl', ['$scope', 'Upload', '$timeout', '$http', '$location', function ($scope, Upload, $timeout, $http, $location) {
    $scope.$watch('files', function () {
        $scope.upload($scope.files);
    });
    $scope.$watch('file', function () {
        if ($scope.file != null) {
            $scope.files = [$scope.file];
        }
    });

    $scope.artistId;

    $scope.log ='';

    $scope.getArtistID = function(){
        $http.get('/api/users/me').then(function(response) {
        $scope.me = response.data;
        $scope.artistId = response.data._id
        console.log($scope.me);
        console.log($scope.artistId);
      })
    };

    $scope.saveContent = function(imgName){
        $http.post('/api/content/' + $scope.artistId + '/' + imgName, {name: imgName}).then(function(response){
            console.log(response.data);
        })
    };

    $scope.test = function(){
        console.log('this fired');
    }

    $scope.upload = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
              var file = files[i];
              if (!file.$error) {
                Upload.upload({
                    url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                    data: {
                      username: $scope.username,
                      file: file
                    }
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    $scope.log = 'progress: ' + progressPercentage + '% ' +
                                evt.config.data.file.name + '\n' + $scope.log;
                }).success(function (data, status, headers, config) {
                    console.log('This data: ', data);
                    var imgName = data.result[0].name;
                    console.log(imgName);
                    $scope.saveContent(imgName);
                    $timeout(function() {
                        $scope.log = 'file: ' + config.data.file.name + ', Response: ' + JSON.stringify(data) + '\n' + $scope.log;
                    });
                });
              }
            }
        }
    };

}]);

    // $scope.getArtistProfile = function() {
    //   $http.get('/api/users/artist/' + artistId).then(function(response) {
    //     $scope.artist = response.data;
    //     console.log(response.data);
    //   })
    // };


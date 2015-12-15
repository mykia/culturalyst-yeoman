'use strict';

angular.module('culturalystApp')
  .controller('DiscoveryCtrl', function ($scope) {
    $scope.message = 'Hello';
    $scope.medium = ['Comics', 'Crafts','Culture Bearers','Design','Fashion','Film & Video','Games','Music','Performing Arts','Photography','Visual Arts','Writing'];
    $scope.submedium = {
    	'Comics': ['Digital']
    };

    $scope.loadSubMediums = function(medium){
    	if (typeof $scope.submedium[medium] !== 'undefined'){
    		return;
    	}
    	if (medium === 'Crafts'){
    		setTimeout(function(){
    			$scope.$apply(function(){
    				$scope.submedium[medium] = ['Knitting','Crochet']; 
    			});
    		},200);
    	}
    	if (medium === "Culture Bearers"){
    		setTimeout(function(){
    			$scope.$apply(function(){
    				$scope.submedium[medium] = ['Mardi Gras Indians', 'Social Aid & Pleasure Clubs'];
    			})
    		},200);
    	}
    	if (medium === "Design"){
    		setTimeout(function(){
    			$scope.$apply(function(){
    				$scope.submedium[medium] = ['TBD', 'TBD','TBD'];
    			})
    		},200);
    	}
    	if (medium === "Fashion"){
    		setTimeout(function(){
    			$scope.$apply(function(){
    				$scope.submedium[medium] = ['TBD', 'TBD','TBD'];
    			})
    		},200);
    	}
    	if (medium === "Film & Video"){
    		setTimeout(function(){
    			$scope.$apply(function(){
    				$scope.submedium[medium] = ['TBD', 'TBD','TBD'];
    			})
    		},200);
    	}
    	if (medium === "Games"){
    		setTimeout(function(){
    			$scope.$apply(function(){
    				$scope.submedium[medium] = ['TBD', 'TBD','TBD'];
    			})
    		},200);
    	}
    	if (medium === "Music"){
    		setTimeout(function(){
    			$scope.$apply(function(){
    				$scope.submedium[medium] = ['TBD', 'TBD','TBD'];
    			})
    		},200);
    	}
    	if (medium === "Performing Arts"){
    		setTimeout(function(){
    			$scope.$apply(function(){
    				$scope.submedium[medium] = ['TBD', 'TBD','TBD'];
    			})
    		},200);
    	}
    	if (medium === "Photography"){
    		setTimeout(function(){
    			$scope.$apply(function(){
    				$scope.submedium[medium] = ['TBD', 'TBD','TBD'];
    			})
    		},200);
    	}
    	if (medium === "Visual Arts"){
    		setTimeout(function(){
    			$scope.$apply(function(){
    				$scope.submedium[medium] = ['TBD', 'TBD','TBD'];
    			})
    		},200);
    	}
    	if (medium === "Writing"){
    		setTimeout(function(){
    			$scope.$apply(function(){
    				$scope.submedium[medium] = ['TBD', 'TBD','TBD'];
    			})
    		},200);
    	}
    };

    $scope.test = function(){
    	console.log("this was clicked");
    }
  });

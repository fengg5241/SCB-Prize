var prizeApp = angular.module('prizeApp', ['angular.filter']);

prizeApp.controller('CategoryListCtrl', function ($rootScope,$scope,$http) {
	$http.get("http://api.nobelprize.org/v1/prize.json")  
    .success(function(response) {
    	$rootScope.categoryList = response;
    	
    });  
});

//prizeApp.controller('laureateListCtrl', function ($rootScope,$scope,$http) {
////	$http.get("http://api.nobelprize.org/v1/prize.json")  
////    .success(function(response) {
////    	$rootScope.categoryList = response;
////    	
////    });  
//});
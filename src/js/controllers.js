var prizeApp = angular.module('prizeApp', ['angular.filter','ngRoute']);

prizeApp.controller('CategoryListCtrl', function ($rootScope,$scope,$http) {
	$http.get("http://api.nobelprize.org/v1/prize.json")  
    .success(function(response) {
    	$rootScope.categoryList = response;
    	
    });  
});

prizeApp.controller('laureateListCtrl', function ($rootScope,$scope,$http,$routeParams,$filter) {
//	$http.get("http://api.nobelprize.org/v1/prize.json")  
//    .success(function(response) {
//    	$rootScope.categoryList = response;
//    	
//    });  
	$rootScope.category = $routeParams.category;
	if(!$rootScope.categoryList){
		$http.get("http://api.nobelprize.org/v1/prize.json")  
	    .success(function(response) {
	    	$rootScope.categoryList = response;
	    	$scope.laureateList = $filter('filter')($rootScope.categoryList.prizes,{category:$routeParams.category});
	    });  
	}else {
		$scope.laureateList = $filter('filter')($rootScope.categoryList.prizes,{category:$routeParams.category});
	}
	
});

prizeApp.controller('laureateCtrl', function ($rootScope,$scope,$http,$routeParams,$filter) {
//	$http.get("http://api.nobelprize.org/v1/prize.json")  
//    .success(function(response) {
//    	$rootScope.categoryList = response;
//    	
//    });  
	$scope.laureate = $routeParams.laureate;
	$scope.laureateId = $routeParams.laureateId;
	if(!$rootScope.allLaureateDetail){
		$http.get("http://api.nobelprize.org/v1/laureate.json")  
	    .success(function(response) {
	    	$rootScope.allLaureateDetail = response.laureates;
	    	$scope.laureateDetail = $filter('filter')($rootScope.allLaureateDetail,{id:$scope.laureateId})[0];
	    }); 
	}else {
		$scope.laureateDetail = $filter('filter')($rootScope.allLaureateDetail,{id:$scope.laureateId})[0];
	}
	
});

prizeApp.config(
		[  '$routeProvider',
				function config( $routeProvider) {
//					$locationProvider.hashPrefix('!');

					$routeProvider.when('/', {
//						template : '<phone-list></phone-list>'
						template: '<div class="container-fluid">'+
					      '<div class="row">'+
				          '<div class="col-lg-12">'+
				              '<h1 class="page-header">'+
				                  'Dashboard <small>Statistics Overview</small>'+
				              '</h1>'+
				              '<ol class="breadcrumb">'+
				                  '<li class="active">'+
				                      '<i class="fa fa-dashboard"></i> <a href="#/">Dashboard</a>'+
				                  '</li>'+
				              '</ol>'+
				          '</div>'+
				      '</div>'+
				      '<div class="row">'+
				            '<div class="col-lg-3 col-md-6" ng-repeat="(key, value) in categoryList.prizes | groupBy: \'category\'">'+
				              '<div class="panel panel-primary panel-{{key}}" >'+
				                  '<div class="panel-heading">'+
				                      '<div class="row">'+
				                          '<div class="col-xs-3">'+
				                              '<i class="fa fa-{{key}} fa-5x"></i>'+
				                          '</div>'+
				                          '<div class="col-xs-9 text-right">'+
				                              '<div class="huge">{{value.length}}</div>'+
				                              '<div>{{key}}</div>'+
				                          '</div>'+
				                      '</div>'+
				                  '</div>'+
				                  '<a href="#/category/{{key}}">'+
				                      '<div class="panel-footer">'+
				                         ' <span class="pull-left">View Details</span>'+
				                          '<span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>'+
				                         ' <div class="clearfix"></div>'+
				                     ' </div>'+
				                  '</a>'+
				              '</div>'+
				          '</div>'+
				      '</div>',
				        controller: 'CategoryListCtrl'
					}).
					when('/category/:category', {
				        template: '<div class="container-fluid">'+
					      '<div class="row">'+
				          '<div class="col-lg-12">'+
				              '<h1 class="page-header">'+
				                  'Dashboard <small>Statistics Overview</small>'+
				              '</h1>'+
				              '<ol class="breadcrumb">'+
				                  '<li class="active">'+
				                      '<i class="fa fa-dashboard"></i> <a href="#/">Dashboard</a>'+
				                  '</li>'+
				                  '<li class="active">'+
			                      '	<i class="fa fa-{{category}}"></i> <a href="#/category/{{category}}">{{category}}</a>'+
			                      '</li>'+
				              '</ol>'+
				          '</div>'+
				      '</div>'+
				      '<div class="row">'+
			          	'<div class="col-lg-12">'+
			                '<!-- Tab panes -->'+
			                '<div class="tab-content">'+
			                        '<div class="table-responsive">'+
			                            '<table class="table table-bordered table-hover table-striped">'+
			                                '<thead>'+
			                                    '<tr>'+
			                                        '<th rowspan="2">year</th>'+
			                                        '<th rowspan="2">category</th>'+
			                                        '<th colspan="3">laureates</th>'+
			                                    '</tr>'+
			                                    '<tr>'+
			        	                            '<th>name</th>'+
			        	                            '<th>motivation</th>'+
			        	                            '<th>share</th>'+
			        	                        '</tr>'+
			                                '</thead>'+
			                                '<tbody>'+
			                                    '<tr ng-repeat="row in categoryList.prizes | filter:{ category: category }">'+
			        	                            '<td>{{row.year}}</td>'+
			        	                            '<td>{{row.category}}</td>'+
			        	                            '<td><a style="display:block" ng-repeat="laureate in row.laureates" href="#/laureate/{{laureate.id}}/{{laureate.firstname}} {{laureate.surname}}">{{laureate.firstname}} {{laureate.surname}}</a></td>'+
			        	                            '<td>{{row.laureates[0].motivation}}</td>'+
			        	                            '<td><span style="display:block" ng-repeat="ele in row.laureates">{{ele.share}}</span></td>'+
			                                    '</tr>'+
			                                '</tbody>'+
			                            '</table>'+
			                        '</div>'+
			                '</div>'+
			          	'</div>'+
				      '</div>'+
				          '</div>',
				        controller: 'laureateListCtrl'
				      }).
				      when('/laureate/:laureateId/:laureate', {
					        template: '<div class="container-fluid">'+
						      '<div class="row">'+
					          '<div class="col-lg-12">'+
					              '<h1 class="page-header">'+
					                  'Dashboard <small>Statistics Overview</small>'+
					              '</h1>'+
					              '<ol class="breadcrumb">'+
					                  '<li class="active">'+
					                      '<i class="fa fa-dashboard"></i> <a href="#/">Dashboard</a>'+
					                  '</li>'+
					                  '<li class="active">'+
				                      	'	<i class="fa fa-{{category}}"></i> <a href="#/category/{{category}}">{{category}}</a>'+
				                      '</li>'+
					                  '<li class="active">'+
				                      	'	<i class="fa fa-laureate"></i> <a href="#/laureate/{{laureateId}}/{{laureate}}">{{laureate}}</a>'+
				                      '</li>'+
					              '</ol>'+
					          '</div>'+
					      '</div>'+
					      
					      '<div class="row">'+
				          	'<div class="col-lg-12">'+
					          	'<div class="form-group">'+
	                            	'<label>laureate detail</label> '+       
	                            '</div>'+
				                '<!-- Tab panes -->'+
				                '<table class="table table-bordered table-hover">'+
                                '<tbody>'+
                                    '<tr>'+
                                        '<td>firstname</td>'+
                                        '<td>{{laureateDetail.firstname}}</td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<td>surname</td>'+
                                        '<td>{{laureateDetail.surname}}</td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<td>born</td>'+
                                        '<td>{{laureateDetail.born}}</td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<td>died</td>'+
                                        '<td>{{laureateDetail.died}}</td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<td>bornCountry</td>'+
                                        '<td>{{laureateDetail.bornCountry}}</td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<td>bornCountryCode</td>'+
                                        '<td>{{laureateDetail.bornCountryCode}}</td>'+
                                    '</tr>'+
                                    '<tr>'+
                                    '<td>bornCity</td>'+
                                    '<td>{{laureateDetail.bornCity}}</td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<td>diedCountry</td>'+
                                    '<td>{{laureateDetail.diedCountry}}</td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<td>diedCountryCode</td>'+
                                    '<td>{{laureateDetail.diedCountryCode}}</td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<td>diedCity</td>'+
                                    '<td>{{laureateDetail.diedCity}}</td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<td>gender</td>'+
                                    '<td>{{laureateDetail.gender}}</td>'+
                                '</tr>'+
                                    
                                '</tbody>'+
                            '</table>'+
					      '</div>'+
					          '</div>'+
					          
					      '<div class="row">'+
				          	'<div class="col-lg-12">'+
					          	'<div class="form-group">'+
					          		'<label>prize record</label> '+       
	                        	'</div>'+
				                '<!-- Tab panes -->'+
				                '<div class="tab-content">'+
				                        '<div class="table-responsive">'+
				                            '<table class="table table-bordered table-hover table-striped">'+
				                                '<thead>'+
				                                    '<tr>'+
				                                        '<th rowspan="2">year</th>'+
				                                        '<th rowspan="2">category</th>'+
				                                        '<th rowspan="2">share</th>'+
				                                        '<th rowspan="2">motivation</th>'+
				                                        '<th colspan="3">affiliations</th>'+
				                                    '</tr>'+
				                                    '<tr>'+
				        	                            '<th>name</th>'+
				        	                            '<th>city</th>'+
				        	                            '<th>country</th>'+
				        	                        '</tr>'+
				                                '</thead>'+
				                                '<tbody>'+
				                                    '<tr ng-repeat="row in laureateDetail.prizes">'+
				        	                            '<td>{{row.year}}</td>'+
				        	                            '<td>{{row.category}}</td>'+
				        	                            '<td>{{row.share}}</td>'+
				        	                            '<td>{{row.motivation}}</td>'+
				        	                            '<td><span style="display:block" ng-repeat="ele in row.affiliations">{{ele.name}}</span></td>'+
				        	                            '<td><span style="display:block" ng-repeat="ele in row.affiliations">{{ele.city}}</span></td>'+
				        	                            '<td><span style="display:block" ng-repeat="ele in row.affiliations">{{ele.country}}</span></td>'+
				                                    '</tr>'+
				                                '</tbody>'+
				                            '</table>'+
				                        '</div>'+
				                '</div>'+
				          	'</div>'+
					      '</div>'+
					          '</div>',
					        controller: 'laureateCtrl'
					      }).
				      otherwise('/');
				} ]);


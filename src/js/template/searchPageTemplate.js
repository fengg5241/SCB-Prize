var SEARCH_PAGE_TEMPLATE = {
		searchPageHtml : 
			'<div class="container-fluid">'+
		      '<div class="row">'+
	          '<div class="col-lg-12">'+
	              '<h1 class="page-header">'+
	                  'Search Page'+
	              '</h1>'+
	              '<ol class="breadcrumb">'+
	                  '<li class="active">'+
	                      '<i class="fa fa-dashboard"></i> <a href="#/">Dashboard</a>'+
	                  '</li>'+
	                  '<li class="active">'+
	                      '<i class="fa fa-search"></i> <a href="#/goSearch">Search Page</a>'+
	                  '</li>'+
	              '</ol>'+
	          '</div>'+
	      '</div>'+
	      '<div class="row">'+
        	'<div class="col-lg-12">'+
              '<!-- Tab panes -->'+
              '<div class="col-xs-1">'+
              	'country:'+
              '</div>'+
              '<div class="col-xs-2">'+
	                '<select class="form-control" ng-model="search.country">'+
	                	'<option value="">'+
	                	'<option ng-repeat="option in allCountryList" value="{{option.name}}">{{option.name}}</option>'+
	                '</select>'+
          	'</div>'+
          	
          	'<div class="col-xs-1" style="padding-left:0">'+
              	'start year:'+
              '</div>'+
              '<div class="col-xs-2">'+
	                '<input class="form-control" ng-model="search.startYear">'+
          	'</div>'+
          	
          	'<div class="col-xs-1" style="padding-left:0">'+
              	'end year:'+
              '</div>'+
              '<div class="col-xs-2">'+
	                '<input class="form-control" ng-model="search.endYear">'+
          	'</div>'+
          	
          	'<div class="col-xs-1">'+
              	'categories:'+
              '</div>'+
              '<div class="col-xs-2">'+
              	'<select class="form-control" ng-model="search.categories" multiple>'+
              		'<option value="">'+
          			'<option ng-repeat="(key, value) in categoryList.prizes | groupBy: \'category\'" value="{{key}}">{{key}}</option>'+
          		'</select>'+
          	'</div>'+
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
                                      '<th colspan="4">laureates</th>'+
                                  '</tr>'+
                                  '<tr>'+
      	                            '<th width="30%">name</th>'+
      	                            '<th width="40%">motivation</th>'+
      	                            '<th width="10%">share</th>'+
      	                            '<th width="20%">country</th>'+
      	                        '</tr>'+
                              '</thead>'+
                              '<tbody>'+
                                  '<tr ng-repeat="row in categoryList.prizes | searchFilter:search">'+
      	                            '<td>{{row.year}}</td>'+
      	                            '<td>{{row.category}}</td>'+
      	                            '<td><a style="display:block" ng-repeat="laureate in row.laureates" href="#/laureate/{{laureate.id}}/{{laureate.firstname}} {{laureate.surname}}">{{laureate.firstname}} {{laureate.surname}}</a></td>'+
      	                            '<td>{{row.laureates[0].motivation}}</td>'+
      	                            '<td><span style="display:block" ng-repeat="ele in row.laureates">{{ele.share}}</span></td>'+
      	                            '<td><span style="display:block" ng-repeat="ele in row.laureates">{{ele.bornCountry}}</span></td>'+
                                  '</tr>'+
                              '</tbody>'+
                          '</table>'+
                      '</div>'+
              '</div>'+
        	'</div>'+
	      '</div>'+						      
	          '</div>'
}
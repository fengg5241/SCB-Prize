var LAUREATE_LIST_TEMPLATE = {
		laureateListHtml:
			'<div class="container-fluid">'+
		      '<div class="row">'+
	          '<div class="col-lg-12">'+
	              '<h1 class="page-header">'+
	                  'Prize List'+
	                  '<button  class="btn btn btn-primary pull-right" ng-click="goSearch()">Go Search&nbsp;<span aria-hidden="true" class="glyphicon glyphicon-search"></span></button>'+
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
                                      '<th colspan="3" class="text-center">laureates</th>'+
                                  '</tr>'+
                                  '<tr>'+
      	                            '<th width="30%">name</th>'+
      	                            '<th width="60%">motivation</th>'+
      	                            '<th width="10%">share</th>'+
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
	      '</div>'
}
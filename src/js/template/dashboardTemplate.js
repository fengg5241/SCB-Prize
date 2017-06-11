var DASHBOARD_TEMPLATE = {
		dashboardHtml:
			'<div class="container-fluid">'+
			      '<div class="row">'+
		          '<div class="col-lg-12">'+
		              '<h1 class="page-header">'+
		                  'Dashboard <small>Statistics Overview</small>'+ 
		              		'<button  class="btn btn btn-primary pull-right" ng-click="goSearch()">Go Search&nbsp;<span aria-hidden="true" class="glyphicon glyphicon-search"></span></button>'+
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
		      '</div>'+
		      
	            '<div class="row">'+
				'<div class="col-lg-12">'+
				    '<div class="panel panel-default">'+
				        '<div class="panel-heading">'+
				            '<h3 class="panel-title"><i class="fa fa-bar-chart-o fa-fw"></i> Area Chart</h3>'+
				        '</div>'+
				        '<div class="panel-body">'+
				            '<div id="morris-area-chart"></div>'+
				        '</div>'+
				    '</div>'+
				'</div>'+
				'</div>'+
				'<!-- /.row -->'+
				
				'<div class="row">'+
				'<div class="col-lg-4">'+
				    '<div class="panel panel-default">'+
				        '<div class="panel-heading">'+
				            '<h3 class="panel-title"><i class="fa fa-long-arrow-right fa-fw"></i> Donut Chart</h3>'+
				        '</div>'+
				        '<div class="panel-body">'+
				            '<div id="morris-donut-chart"></div>'+
				            '<div class="text-right">'+
				                '<a href="#/">View Details <i class="fa fa-arrow-circle-right"></i></a>'+
				            '</div>'+
				        '</div>'+
				    '</div>'+
				'</div>'+
				'<div class="col-lg-4">'+
				    '<div class="panel panel-default">'+
				        '<div class="panel-heading">'+
				            '<h3 class="panel-title"><i class="fa fa-clock-o fa-fw"></i> Tasks Panel</h3>'+
				        '</div>'+
				        '<div class="panel-body">'+
				            '<div class="list-group">'+
				                '<a href="#/" class="list-group-item">'+
				                    '<span class="badge">just now</span>'+
				                    '<i class="fa fa-fw fa-calendar"></i> Calendar updated'+
				                '</a>'+
				                '<a href="#/" class="list-group-item">'+
				                    '<span class="badge">4 minutes ago</span>'+
				                    '<i class="fa fa-fw fa-comment"></i> Commented on a post'+
				                '</a>'+
				                '<a href="#/" class="list-group-item">'+
				                    '<span class="badge">1 hour ago</span>'+
				                    '<i class="fa fa-fw fa-user"></i> A new user has been added'+
				                '</a>'+
				                '<a href="#/" class="list-group-item">'+
				                    '<span class="badge">2 hours ago</span>'+
				                    '<i class="fa fa-fw fa-check"></i> Completed task: "Id 1133"'+
				                '</a>'+
				                '<a href="#/" class="list-group-item">'+
				                    '<span class="badge">yesterday</span>'+
				                    '<i class="fa fa-fw fa-globe"></i> Saved the world'+
				                '</a>'+
				                '<a href="#/" class="list-group-item">'+
				                    '<span class="badge">two days ago</span>'+
				                    '<i class="fa fa-fw fa-check"></i> Completed task: "fix error on search page"'+
				               ' </a>'+
				            '</div>'+
				            '<div class="text-right">'+
				                '<a href="#/">View All Activity <i class="fa fa-arrow-circle-right"></i></a>'+
				            '</div>'+
				        '</div>'+
				    '</div>'+
				'</div>'+
				'<div class="col-lg-4">'+
				    '<div class="panel panel-default">'+
				        '<div class="panel-heading">'+
				            '<h3 class="panel-title"><i class="fa fa-money fa-fw"></i> Recent Prize Panel</h3>'+
				        '</div>'+
				        '<div class="panel-body">'+
				            '<div class="table-responsive">'+
				                '<table class="table table-bordered table-hover table-striped">'+
				                    '<thead>'+
				                        '<tr>'+
				                            '<th>Year</th>'+
				                            '<th>Name</th>'+
				                            '<th>Category</th>'+
				                            '<th>Country</th>'+
				                        '</tr>'+
				                    '</thead>'+
				                    '<tbody>'+
				                        '<tr>'+
				                            '<td>2016</td>'+
				                            '<td>David</td>'+
				                            '<td>physics</td>'+
				                            '<td>USA</td>'+
				                        '</tr>'+
				                        '<tr>'+
				                            '<td>2016</td>'+
				                            '<td>Shan</td>'+
				                            '<td>physics</td>'+
				                            '<td>China</td>'+
				                       '</tr>'+
				                        '<tr>'+
				                            '<td>2016</td>'+
				                            '<td>Feng</td>'+
				                            '<td>chemistry</td>'+
				                            '<td>China</td>'+
				                        '</tr>'+
				                        '<tr>'+
				                            '<td>2016</td>'+
				                            '<td>Chong</td>'+
				                            '<td>physics</td>'+
				                            '<td>Singapore</td>'+
				                        '</tr>'+
				                        '<tr>'+
				                            '<td>2016</td>'+
				                            '<td>Java</td>'+
				                            '<td>physics</td>'+
				                            '<td>USA</td>'+
				                       '</tr>'+
				                        '<tr>'+
				                            '<td>2016</td>'+
				                            '<td>Shan</td>'+
				                            '<td>physics</td>'+
				                            '<td>China</td>'+
				                       '</tr>'+
				                        '<tr>'+
				                            '<td>2016</td>'+
				                            '<td>David</td>'+
				                            '<td>physics</td>'+
				                            '<td>USA</td>'+
				                        '</tr>'+
				                        '<tr>'+
				                            '<td>2016</td>'+
				                            '<td>Yexi</td>'+
				                            '<td>physics</td>'+
				                            '<td>China</td>'+
				                        '</tr>'+
				                    '</tbody>'+
				                '</table>'+
				            '</div>'+
				            '<div class="text-right">'+
				                '<a href="#/">View All Transactions <i class="fa fa-arrow-circle-right"></i></a>'+
				            '</div>'+
				        '</div>'+
				    '</div>'+
				'</div>'+
				'</div>'+
				'<!-- /.row -->'+
				
				'</div>'+
				'<!-- /.container-fluid -->'
		
}
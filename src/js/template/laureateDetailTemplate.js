var LAUREATE_DETAIL_TEMPLATE = {
		laureateDetailHtml : 
			'<div class="container-fluid">'+
		      '<div class="row">'+
	          '<div class="col-lg-12">'+
	              '<h1 class="page-header">'+
	                  'Laureate Detail'+
	                  '<button  class="btn btn btn-primary pull-right" ng-click="goSearch()">Go Search&nbsp;<span aria-hidden="true" class="glyphicon glyphicon-search"></span></button>'+
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
                     '<td width="50%">firstname</td>'+
                     '<td>{{laureateDetail.firstname}}</td>'+
                 '</tr>'+
                 '<tr>'+
                     '<td width="50%">surname</td>'+
                     '<td>{{laureateDetail.surname}}</td>'+
                 '</tr>'+
                 '<tr>'+
                     '<td width="50%">born</td>'+
                     '<td>{{laureateDetail.born}}</td>'+
                 '</tr>'+
                 '<tr>'+
                     '<td width="50%">died</td>'+
                     '<td>{{laureateDetail.died}}</td>'+
                 '</tr>'+
                 '<tr>'+
                     '<td width="50%">bornCountry</td>'+
                     '<td>{{laureateDetail.bornCountry}}</td>'+
                 '</tr>'+
                 '<tr>'+
                     '<td width="50%">bornCountryCode</td>'+
                     '<td>{{laureateDetail.bornCountryCode}}</td>'+
                 '</tr>'+
                 '<tr>'+
                 '<td width="50%">bornCity</td>'+
                 '<td>{{laureateDetail.bornCity}}</td>'+
             '</tr>'+
             '<tr>'+
                 '<td width="50%">diedCountry</td>'+
                 '<td>{{laureateDetail.diedCountry}}</td>'+
             '</tr>'+
             '<tr>'+
                 '<td width="50%">diedCountryCode</td>'+
                 '<td>{{laureateDetail.diedCountryCode}}</td>'+
             '</tr>'+
             '<tr>'+
                 '<td width="50%">diedCity</td>'+
                 '<td>{{laureateDetail.diedCity}}</td>'+
             '</tr>'+
             '<tr>'+
                 '<td width="50%">gender</td>'+
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
                                      '<th colspan="3" class="text-center">affiliations</th>'+
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
	          '</div>'
		
}
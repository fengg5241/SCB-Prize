angular.module('prizeApp').config(
		[  '$routeProvider',
			function config( $routeProvider) {
				$routeProvider.when('/', {
//					templateurl:xx.html
					template: DASHBOARD_TEMPLATE.dashboardHtml,
			        controller: 'CategoryListCtrl'
				}).
				when('/category/:category', {
			        template: LAUREATE_LIST_TEMPLATE.laureateListHtml,
			        controller: 'laureateListCtrl'
			      }).
			   when('/laureate/:laureateId/:laureate', {
				        template: LAUREATE_DETAIL_TEMPLATE.laureateDetailHtml,
				        controller: 'laureateCtrl'
				      }).
		       when('/goSearch', {
			        template: SEARCH_PAGE_TEMPLATE.searchPageHtml,
			        controller: 'searchCtrl'
			      }).
			      otherwise('/');
			} ]);
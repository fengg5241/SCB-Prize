describe('prize controllers', function() {

  describe('CategoryListCtrl', function(){
    var scope, ctrl, $httpBackend;

    // load modele 
    beforeEach(module('prizeApp'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller,$location) {
      $httpBackend = _$httpBackend_;
      
      var mockResponseObject = {
    		  prizes:[{year:"2016",category:"physics",
    			  laureates:[{id:"928",firstname:"David",surname:"Thouless",
    				  motivation:"XXXX",share:"2"}]},
    				  {year:"2015",category:"chemistry",
    	    			  laureates:[{id:"931",firstname:"Jean",surname:"Sauvage",
    	    				  motivation:"XXXX",share:"1"}]}]
    		  }
      }
    		  
      };
      $httpBackend.expectGET('http://api.nobelprize.org/v1/prize.json').
          respond(mockResponseObject]);

      scope = $rootScope.$new();
      ctrl = $controller('CategoryListCtrl', {$scope: scope});
      
      it('should create "category list" model with 2 category fetched from xhr', function() {
          expect($rootScope.categoryList).toBeUndefined();
          $httpBackend.flush();

          expect($rootScope.categoryList).toEqual(mockResponseObject);
        });
    }));
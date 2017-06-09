angular.module('PricingApp', [])
                .controller('CalController', ['$scope', function($scope) {
    $scope.calculatePrice = function () {
        var testValue = parseFloat($scope.stockPrice) + parseFloat($scope.strikePrice) + 
          parseFloat($scope.volatility) + parseFloat($scope.interestRate);
        $scope.callPrice = testValue / 1.87; 
        $scope.putPrice = testValue / 27.23;  
        $scope.callDelta = testValue / 15;  
        $scope.putDelta = testValue / -208.95;  
        $scope.callGamma = testValue / 1166.66;  
        $scope.putGamma = testValue / 1166.66;  
        $scope.callVega = testValue / 9.82;  
        $scope.putVega = testValue / 9.82;  
        $scope.callTheta = testValue / -3.98;  
        $scope.putTheta = testValue / 26.11;  
        $scope.callRho = testValue / 5;  
        $scope.putRho = testValue / -11.2;
      };

      $scope.clearInput = function () {
        $scope.stockPrice="";          
        $scope.strikePrice="";
        $scope.volatility="";
        $scope.interestRate="";
        $scope.timeToExp="";
      };
    }]
  );



(function(){
    var geosilesia = angular.module('geosilesia', ['ngRoute', 'ngAnimate', 'duScroll', 'ngTouch']);

    angular.module('geosilesia').controller('MainController', ['$scope', '$window', '$rootScope', function($scope, $window, $rootScope){



        $scope.init = function(){
            setSize();
        };
        $scope.init();
        $window.addEventListener('scroll', showButtonUp);
        $window.addEventListener('resize', function () {
            setSize(true);
        });


        function showButtonUp(){
            if (this.pageYOffset >= 100) {
                $scope.showButtonUp = true;
            } else {
                $scope.showButtonUp = false;
            }
            $scope.$apply();
        }

        $rootScope.$on("$routeChangeSuccess", function(){
            $window.scrollTo(0,0);
            $rootScope.blur = false;
        });

        function resetSizes(){
            $rootScope.isS = false;
            $rootScope.isM = false;
            $rootScope.isL = false;
            $rootScope.isX = false;
        }


        function setSize(apply){
            resetSizes();
            var width = $window.innerWidth;
            if(width < 568){
                $rootScope.isS = true;
            } else if (width < 850){
                $rootScope.isM = true;
            } else if (width < 1400){
                $rootScope.isL = true;
            } else {
                $rootScope.isX = true;
            }
            if(apply){
                $scope.$apply();
            }
        }
    }]);
})();

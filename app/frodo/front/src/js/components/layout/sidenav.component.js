(function(){
    angular.module('frodo').component('sidenav', {
        templateUrl: 'html/components/layout/sidenav.html',
        controllerAs: 'vm',
        controller: SidenavController
    });

    SidenavController.$inject = ['postTypesService', '$location', '$scope', '$transitions', '$state'];
    function SidenavController(postTypesService, $location, $scope, $transitions, $state){
        var vm  = this;
        vm.$onInit = onInit;

        function onInit(){
            getPostTypes();
            if($state.current.family){
                $state.params.type ? setCurrentFamily($state.current.family, $state.params.type) : setCurrentFamily($state.current.family);
            } else {
                vm.currentFamily = undefined;
            }

            $scope.$on('postTypesUpdated', function(){
                getPostTypes();
            });
            $transitions.onSuccess({}, function ($transition$) {
                if($transition$.$to().self.family){
                    $transition$.params().type ? setCurrentFamily($transition$.$to().self.family, $transition$.params().type) : setCurrentFamily($transition$.$to().self.family);
                } else {
                    vm.currentFamily = undefined;
                }
            })
        }

        function setCurrentFamily(family, type){
            if(family) {
                if(family === 'posts'){
                    vm.currentFamily = type ? family + type : undefined;
                } else {
                    vm.currentFamily = family;
                }
            } else{
                vm.currentFamily = undefined;
            }
        }

        function getPostTypes(){
            postTypesService.getAll()
                .then(function(response){
                    vm.postTypes = response.data;
                })
        }

    }
})();
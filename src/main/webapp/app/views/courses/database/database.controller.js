(function() {
    'use strict';

    angular
        .module('zonesionCloudApplicationApp')
        .controller('DatabaseController', DatabaseController);

    DatabaseController.$inject = ['$scope', '$rootScope', '$stateParams', 'CourseService','Principal','CommonFactory'];

    function DatabaseController($scope, $rootScope, $stateParams, CourseService,Principal,CommonFactory) {
        var vm = this;
        vm.isAuthenticated = Principal.isAuthenticated;
        vm.currentPage = 1;
        vm.pageSize = 10;
        loadReviews();

        function loadReviews() {
        	CourseService.getCourseAttachements({
        		id: $stateParams.id,
            page:vm.currentPage-1,
            size:vm.pageSize
            }, onSuccess, onError);

            function onSuccess(data, headers) {
                vm.attachements = data;
                angular.forEach(vm.attachements,function(att){
                  att.fileSize=CommonFactory.bytesToSize(att.fileSize);
                })
                console.log(data);

            }
            function onError(error) {
                //AlertService.error(error.data.message);
            }
        }
    }
})();

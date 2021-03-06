(function() {
    'use strict';

    angular
        .module('zonesionCloudApplicationApp')
        .controller('EditLessonController', EditLessonController);

    EditLessonController.$inject = ['Principal', 'Course', 'entity', 'AlertService', '$state', '$log',
     '$scope', '$rootScope', 'JhiLanguageService', 'Upload','CourseManagementService','$uibModal','CourseService','$stateParams'];

    function EditLessonController(Principal, Course, entity, AlertService, $state, $log,
      $scope, $rootScope, JhiLanguageService, Upload,CourseManagementService,$uibModal,CourseService,$stateParams) {
        var vm = this;
        vm.currentAccount = $rootScope.accountInfo;
        vm.languages = null;
        vm.courseLessons = [];
        vm.majors = [];
        vm.selectedMajors = [];
        // vm.testData=[{name:'第一章',unit:[{name:'第一节',lesson:[{name:'第一课时'}]}]},{name:'第2章',unit:[{name:'第2节',lesson:[{name:'第2课时'}]}]}]

        vm.stateGo = stateGo;
        vm.openModal = openModal;
        vm.getCourseLesson = getCourseLesson;
        vm.addAttachement = addAttachement;
        vm.getCourseLesson();
        // 认证成功以后刷新页面信息
        $scope.$on('authenticationSuccess', function() {
          vm.currentAccount =  $rootScope.accountInfo;
        });
        //
        function openModal(type,operation,parentId,currentId,selectedInfo){
          $uibModal.open({
              templateUrl: 'app/admin/course-management/edit/lesson/modal/modal.html',
              controller: 'EditLessonModalController',
              controllerAs: 'vm',
              backdrop: 'static',
              size:type==2?'lg':'',
              resolve: {
                  options:  {
                    type:type,// 0章 1节 2课时
                    operation:operation,// 0 添加 1 修改 2删除
                    courseId:$state.params.id,//课程id
                    userId:vm.currentAccount.id,//userid
                    parentId:parentId,
                    currentId:currentId,
                    selectedInfo:selectedInfo
                  }
              }
          }).result.then(function(result) {
            getCourseLesson();
          }, function() {
              // $state.go('^');
          });
        }

        function addAttachement(lessonId){
          $uibModal.open({
              templateUrl: 'app/admin/course-management/edit/lesson/modal/addAttachement.html',
              controller: 'AddAttachementController',
              controllerAs: 'vm',
              backdrop: 'static',
              size:'lg',
              resolve: {
                  options:  {
                  lessonId:lessonId,
                  userId:vm.currentAccount.id
                  }
              }
          }).result.then(function(result) {
            getCourseLesson();
          }, function() {
              // $state.go('^');
          });
        }

        function getCourseLesson(deal){
          CourseService.getCourseLessons({id: $stateParams.id},function(result){
              var lessonNum = 0;
              vm.courseLessons = result.chapters;
              _.forEach(vm.courseLessons,function(chapter,chapterIndex){
                chapter.num = chapterIndex+1;
                _.forEach(chapter.units,function(unit,unitIndex){
                  unit.num = unitIndex+1;
                  _.forEach(unit.lessons,function(lesson,lessonIndex){
                    lessonNum+=1;
                    lesson.num = lessonNum;
                  })
                })
              })
          },function(error){

          });
        }

        //
        function stateGo(url){
          $state.go(url,{id:$state.params.id});
        }
    }
})();

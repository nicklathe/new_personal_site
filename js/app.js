var myApp = angular.module('MyApp', ['ui.bootstrap', 'duScroll']);

myApp.controller('MainController', ['$scope', function($scope){

    // var sectionAbout = angular.element(document.getElementById('section-about'));
    // var sectionWork = angular.element(document.getElementById('section-work'));
    // var sectionContact = angular.element(document.getElementById('section-contact'));

    // $scope.toSectionAbout = function(){
    //       container.scrollTo(sectionAbout, 0, 2000);
    // };

    // $scope.toSectionWork = function(){
    //     container.scrollTo(sectionWork, 0, 2000);
    // };

    // $scope.toSectionContact = function(){
    //     container.scrollTo(sectionContact, 0, 2000);
    // };

}]);

myApp.controller('NavController', ['$scope', function($scope){

    $scope.navCollapsed = true;

}]);

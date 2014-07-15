
//var util = require('../utils/util');


//var myApp = angular.module('myApp', ['ngSanitize']);
var myApp = angular.module('myApp', []);


//myApp.config(function ($routeProvider) {
//
//    $routeProvider
//    .when('/login',
//        {
//            controller: 'userCtrl',
//            templateUrl: 'user.html'
//        })
//    .when('/book',
//        {
//            controller: 'bookCtrl',
//            templateUrl: 'book.html'
//        })
//    .when('/admin',
//        {
//            controller: 'adminCtrl',
//            templateUrl:'deshboard.html'
//        })
//    .otherwise({redirect: '/'});
//
//});


/*====Route Provider
* =====================================================*/

//myApp.factory('myFactory', function ($scope, $http) {
//    console.log('>>>>>>>>>>factory');
//
//    var list = [];
//
//    var webServiceURL = "http://localhost:8888/user";
//    var webServiceName = webServiceURL.split('/')[3];
//
//    $scope.webServiceName = webServiceName;
//    var responsePromise = $http.get(webServiceURL);
//
//    responsePromise.success(function (data, status, header, config) {
//        list.push(data);
//        console.log('factory', list);
//    });
//    responsePromise.error(function (data, status, header, config) {
//        alert("web service doesn't work. TRY AGAIN!!!");
//    });
//})
//
//myApp.controller('userCtrl', function ($scope, $http) {
//    console.log('>>>>>>>>>>userCtrl');
//    console.log('>>>>>>>>>>>>>>>>>>emit');
//
//    var webServiceURL = "http://localhost:8888/user";
//    var webServiceName = webServiceURL.split('/')[3];
//
//    $scope.webServiceName = webServiceName;
//    var responsePromise = $http.get(webServiceURL);
//
//    responsePromise.success(function (data, status, header, config) {
//        $scope.data = data;
//    });
//    responsePromise.error(function (data, status, header, config) {
//        alert("web service doesn't work. TRY AGAIN!!!");
//    });
//} );
//
////    =======================================Book GET =================================
//
//
//
//myApp.controller('bookCtrl', function ($scope, $http ) {
//    console.log('>>>>>>>>>>bookCtrl');
//
//    var webServiceURL = "http://localhost:8888/book";
//
//    var webServiceName = webServiceURL.split('/')[3];
//
//    $scope.webServiceName = webServiceName;
//    var responsePromise = $http.get(webServiceURL);
//
//    responsePromise.success(function (data, status, header, config) {
//        $scope.data = data;
//    });
//    responsePromise.error(function (data, status, header, config) {
//        alert("web service doesn't work. TRY AGAIN!!!");
//    });
//} );
//
//
//myApp.controller('adminCtrl', function ($scope, $http ) {
//    console.log('>>>>>>>>>>adminCtrl');
//
//    var webServiceURL = "http://localhost:8888/admin"
//    var webServiceName = webServiceURL.split('/')[3];
//
//    $scope.webServiceName = webServiceName;
//    var responsePromise = $http.get(webServiceURL);
//
//    responsePromise.success(function (data, status, header, config) {
//        $scope.data = data;
//    });
//    responsePromise.error(function (data, status, header, config) {
//        alert("web service doesn't work. TRY AGAIN!!!");
//    });
//} );


myApp.controller('addUserCtrl',['$scope','$http',function ($scope, $http ) {


//=====================userDataPost==================

    $scope.userDataPost = function(){

        console.log('userdatapost');
        var obj = {
            FirstName: $scope.firstName,
            lastName: $scope.lastName,
            email:$scope.email,
            password: $scope.password
        };
//======================================POST USER DATA===========================

        var webServiceURL = 'http://localhost:3000/login';

        var responsePromise = $http.post(webServiceURL, obj);

        responsePromise.success(function (data, status, header, config) {
            $scope.status = data;
            $scope.style =  " hide-div alert alert-dismissable alert-danger";


        });
        responsePromise.error(function (data, status, header, config) {
            alert("web service doesn't work. TRY AGAIN!!!");
        });


}
}
]);


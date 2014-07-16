


//var myApp = angular.module('myApp', ['ngSanitize']);
var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(function ($routeProvider) {

    $routeProvider
    .when('/dashboard',
        {
            templateUrl: 'dashboard.html'
        })
    .when('/book',
        {
            controller: 'bookCtrl',
            templateUrl: 'book.html'
        })
    .when('/admin',
        {
            controller: 'adminCtrl',
            templateUrl:'dashboard.html'
        })
    .otherwise({redirect: '/'});

});


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

//Post Register data
myApp.controller('addUserCtrl',['$scope','$http',function ($scope, $http ) {

    $scope.userDataPost = function(){

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

//sign in

myApp.controller('signINCtrl',['$scope','$http', '$location',function ($scope, $http, $location ) {

    $scope.signIN = function(){

        var obj = {
            email: $scope.emailID,
            password: $scope.password
        };

//======================================POST USER DATA===========================

        var webServiceURL = 'http://localhost:3000/authUser';

        var responsePromise = $http.post(webServiceURL, obj);

        responsePromise.success(function (data, status, header, config) {
            console.log('verifyUser');
//          $location.replace('deshboard');
            $location.path('dashboard');


        });
        responsePromise.error(function (data, status, header, config) {
            alert("web service doesn't work. TRY AGAIN!!!");
        });

    }
}
]);


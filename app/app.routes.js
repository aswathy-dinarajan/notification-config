'use strict';
const app = angular.module("myApp");
app.config(function($routeProvider) {
    $routeProvider

        .when("/home", {
            controller : "HomeController",
            templateUrl : "app/components/home/home.html"
        })
        .when("/notification", {
            controller : "notificationController",
            templateUrl : "app/components/notification/notificationView.html"
        });
});
'use strict';
const app = angular.module("myApp");

app.directive("datepicker", function () {
 
    function link(scope, element, attrs, controller) {
        element.datepicker({
            onSelect: function (val) {
                scope.$apply(function () {
                    controller.$setViewValue(val);   
                });
            },
            dateFormat: "yy-mm-dd"
        });
    }
 
    return {
        require: 'ngModel',
        link: link
    };
});
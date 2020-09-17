const app = angular.module("myApp");
app.factory('notificationService', function($http) {
    return {
		saveNotificationConfig: saveNotificationConfig,
		getNotificationConfig: getNotificationConfig
	};
	
	function saveNotificationConfig(createJson){	  
	   var data = {};
	   angular.copy(createJson,data);
	   data.dob = new Date(data.dob);
	   return $http({
		   method : "POST",
		   url : "http://localhost:8090/sales/saveNotification",
		   data : data
	   }).then(
		   function success(response){
             console.log(response.data);
		   },
		   function error(response){
            console.log("error"+response);
		   }
	   );
	}

	function getNotificationConfig(searchJson,pagination){
        var data = {};
		angular.copy(searchJson,data);
		data.pageSize = pagination.pageSize;
		data.pageNumber = pagination.pageNumber;
	    return $http({
		   method : "POST",
		   url : "http://localhost:8090/sales/getNotificationConfig",
		   data : data
	   });
	}
});
const app = angular.module("myApp");
app.factory('notificationService', function($http) {
    return {
		saveNotificationConfig: saveNotificationConfig,
		getNotificationConfig: getNotificationConfig
	};
	
	function saveNotificationConfig(createJson,domainname){	  
	   var data = {};
	   angular.copy(createJson,data);
	   data.dob = new Date(data.dob);
	   return $http({
		   method : "POST",
		   url : domainname+"/notification/saveNotificationConfig",
		   data : data
	   });
	}

	function getNotificationConfig(searchJson,pagination,domainname){
        var data = {};
		angular.copy(searchJson,data);
		data.pageSize = pagination.pageSize;
		data.pageNumber = pagination.pageNumber;
	    return $http({
		   method : "POST",
		   url : domainname+"/notification/fetchNotificationConfig",
		   data : data
	   });
	}
	function newfunction(){
	}
	function newfunction2(){
		
});

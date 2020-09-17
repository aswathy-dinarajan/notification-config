const app = angular.module("myApp");
app.controller('notificationController', function ($scope,notificationService) {
	$scope.createJson = {};
	$scope.searchJson = {};
	$scope.notifications = [{
		name : "Aswathy",
		dob : "02-08-1989",
		message : "Hi,How r u?",
		mobile: "971561123456"
	},
{
		name : "Aswathy",
		dob : "03-08-1989",
		message : "Hi,How r u?",
		mobile: "971561123456"
	},
{
		name : "Aswathy",
		dob : "02-08-1989",
		message : "Hi,How r u?",
		mobile: "971561123456"
	},
{
		name : "Aswathy",
		dob : "02-08-1989",
		message : "Hi,How r u?",
		mobile: "971561123456"
	}];

	$scope.displayRow = function(row){
		$scope.createJson = row;
	}
	var paginationOptions = {
    pageNumber: 1,
    pageSize: 5
  };
	$scope.gridOptions = {
paginationPageSizes: [5,25, 50, 75],
paginationPageSize: 5,
columnDefs: [
{ field: 'name' },
{ field: 'dob' },
{ field: 'message' },
{field: 'mobile'},
{name: 'Edit',cellTemplate: '<input type="button" class="button"  value="Edit" ng-click="grid.appScope.displayRow(row.entity)">'}
],
useExternalPagination: true,
onRegisterApi: function (gridApi) {
$scope.gridApi = gridApi;

gridApi.pagination.on.paginationChanged($scope, function (newPage, pageSize) {
        paginationOptions.pageNumber = newPage;
		paginationOptions.pageSize = pageSize;
		$scope.search();
      });

}
};

/* $scope.gridOptions.data = $scope.notifications;
$scope.gridOptions.totalItems  = 20; */

$scope.saveNotificationConfig = function(){
	notificationService.saveNotificationConfig($scope.createJson);
}

$scope.search = function(){
	console.log('Search-------');
  notificationService.getNotificationConfig($scope.searchJson,paginationOptions)
  .then(function success(response){
   $scope.gridOptions.data = response.data.notifications;
   angular.forEach($scope.gridOptions.data,function(item){
	   item.dob = moment(item.dob).format('YYYY-MM-DD');
   });
  $scope.gridOptions.totalItems  = response.data.totalItems; 
  },
  function error(){
	  console.log(error);
  });
   
}

});
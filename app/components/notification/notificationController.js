const app = angular.module("myApp");
app.controller('notificationController', function ($scope) {
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

	$scope.gridOptions = {
paginationPageSizes: [25, 50, 75],
paginationPageSize: 5,
columnDefs: [
{ field: 'name' },
{ field: 'dob' },
{ field: 'message' },
{field: 'mobile'}
],
onRegisterApi: function (gridApi) {
$scope.grid1Api = gridApi;
}
};

$scope.gridOptions.data = $scope.notifications;
});
var app = angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.names = [
        {name:'sam',country:'America',currency:'USD',income:100000},
        {name:'bill',country:'Britain',currency:'GBP',income:150000},
        {name:'tran',country:'Thailand',currency:'THB',income:200000}
    ];

    $scope.orderByMe= function(orderBy) {

    	$scope.myOrderBy = orderBy;

    };
});


app.filter('capitalizeFirstLetter', function(){

	return function(text) {
		return text.charAt(0).toUpperCase() + text.slice(1);
	};	

})
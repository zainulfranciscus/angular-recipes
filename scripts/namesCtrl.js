angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.names = [
        {name:'Sam',country:'America',currency:'USD',income:100000},
        {name:'Bill',country:'Britain',currency:'GBP',income:150000},
        {name:'Tran',country:'Thailand',currency:'THB',income:200000}
    ];

    $scope.orderByMe= function(orderBy) {

    	$scope.myOrderBy = orderBy;

    };
});
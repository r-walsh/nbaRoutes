var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $routeParams, teamService, teamData){

	$scope.teamData = teamData;
	$scope.newGame = {};
	$scope.showNewGameForm = false;

	$scope.toggleNewGameForm = function() {
		!$scope.showNewGameForm;
	}

	if ($routeParams.team === 'utahjazz') {
		$scope.homeTeam = 'Utah Jazz';
	} else if ($routeParams.team === 'losangeleslakers') {
		$scope.homeTeam = 'Los Angeles Lakers';
	} else if ($routeParams.team === 'miamiheat') {
		$scope.homeTeam = 'Miami Heat';
	}

	$scope.submitGame = function() {
		$scope.newGame.homeTeam = $scope.homeTeam.split(' ').join('').toLowerCase();
		$scope.newGame = teamService.addNewGame
	}


});
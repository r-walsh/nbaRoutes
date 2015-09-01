var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $routeParams, teamService, teamData){

	$scope.teamData = teamData;
	$scope.newGame = {};
	$scope.showNewGameForm = false;

	$scope.toggleNewGameForm = function() {
		$scope.showNewGameForm = !$scope.showNewGameForm;
	}

	if ($routeParams.team === 'utahjazz') {
		$scope.homeTeam = 'Utah Jazz';
		$scope.homeLogo = 'http://tylermcginnis.github.io/nbaRoutes/images/jazz-logo.png';
	} else if ($routeParams.team === 'losangeleslakers') {
		$scope.homeTeam = 'Los Angeles Lakers';
		$scope.homeLogo = 'http://tylermcginnis.github.io/nbaRoutes/images/lakers-logo.png';
	} else if ($routeParams.team === 'miamiheat') {
		$scope.homeTeam = 'Miami Heat';
		$scope.homeLogo = 'http://tylermcginnis.github.io/nbaRoutes/images/heat-logo.png';
	}

	$scope.submitGame = function() {
		$scope.newGame.homeTeam = $scope.homeTeam.split(' ').join('').toLowerCase();
		$scope.newGame.opponent = $scope.addNewGameOpponent;
		console.log(teamService);
		$scope.newGame = teamService.addNewGame($scope.newGame)
			.then(function() {
				teamService.getTeamData($scope.newGame)
					.then(function(data) {
						$scope.teamData = data;
						$scope.newGame = {};
						$scope.showNewGameForm = false;
					});
			});
	}


});
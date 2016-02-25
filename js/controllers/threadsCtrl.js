angular.module('rtfmApp').controller('threadsCtrl', function($scope, threadsRef, $firebaseArray){
	
	
	//threadsRef is a method in the resolve in the app.js and is the result of calling getThreads. firebaseArray puts that data into an array
	$scope.threads = $firebaseArray(threadsRef);
	
	
	//$loaded will thell you when the threads have loaded, in the console.
	$scope.threads.$loaded().then(function (threads) {
		console.log(threads);
	});
	
	$scope.createThread = function(username, title) {
		$scope.threads.$add({
			username: username,
			title: title
		})
	};






});
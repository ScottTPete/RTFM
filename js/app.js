angular.module('rtfmApp', ['ui.router', 'firebase'])

	.constant('fb', {
		url: 'https://stp-rtfm.firebaseio.com/'
	})

	.config(function($urlRouterProvider, $stateProvider){
		$stateProvider
			.state('threads', {
				url: '/threads',
				templateUrl: 'templates/threads.html',
				controller: 'threadsCtrl',
				resolve: {
					threadsRef: function(threadService) {
						return threadService.getThreads();
					}
				}
				
			})
			.state('thread', {
				url: '/threads/:threadId',
				templateUrl: 'templates/thread.html',
				controller: 'threadCtrl',
				resolve: {
					threadRef: function(threadService, $stateParams) {
						return threadService.getThread($stateParams.threadId);
					},
					commentsRef: function(threadService, $stateParams) {
						return threadService.getComments($stateParams.threadId);
					}
				}
		})
	
	
	
	$urlRouterProvider.otherwise('/threads');
})
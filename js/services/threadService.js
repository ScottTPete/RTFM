angular.module('rtfmApp').service('threadService', function(fb){
	
	var firebaseRef = new Firebase('https://stp-rtfm.firebaseio.com/')
	
	this.getThreads = function() {
		return new Firebase (fb.url + '/threads');
	}
	
	this.getThread = function(threadId) {
		return new Firebase(fb.url + '/threads' + threadId)
	}

	this.getComments = function(threadId) {
		return new Firebase(fb.url +'/threads/' + threadId + '/comments');
	}
	




})
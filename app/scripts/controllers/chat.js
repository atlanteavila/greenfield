angular.module('puppyLoveApp')

.controller('ChatCtrl', function($scope, Pubnub) {        
  $scope.channel = 'messages-channel';
   
  // Generating a random uuid between 1 and 100 using an utility function from the lodash library.         
  $scope.uuid = _.random(100).toString();
  Pubnub.init({
    publish_key: 'pub-c-5c938379-f17d-4575-a7df-eb8b30ca3a5a',
    subscribe_key: 'sub-c-bd22a0c0-5a95-11e6-b8dc-0619f8945a4f',
    uuid: $scope.uuid
  });

// send a message
  $scope.sendMessage = function() {
   // Don't send an empty message 
   if (!$scope.messageContent || $scope.messageContent === '') {
      return;
    }
    Pubnub.publish({
      channel: $scope.channel,
      message: {
        content: $scope.messageContent,
        sender_uuid: $scope.uuid,
        date: new Date()
      },
        callback: function(m) {
          console.log(m);
        }
    });
    // Reset the messageContent input
    $scope.messageContent = '';

  }

  $scope.messages = [];

  // Subscribing to the ‘messages-channel’ and trigering the message callback
  Pubnub.subscribe({
      channel: $scope.channel,
      triggerEvents: ['callback']
  });

  // Listening to the callbacks
  $scope.$on(Pubnub.getMessageEventNameFor($scope.channel), function (ngEvent, m) {
      $scope.$apply(function () {
          $scope.messages.push(m)
      });
  });

  // A function to display a nice uniq robot avatar 
  $scope.avatarUrl = function(uuid){
      return 'http://robohash.org/'+uuid+'?set=set2&bgset=bg2&size=70x70';
  };


 });
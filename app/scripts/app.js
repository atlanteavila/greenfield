'use strict';
angular.module('puppyLoveApp', [
    'ngMaterial',
    'ui.router',
    ' ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngRoute',
    'pubnub.angular.service'
  ])
.config(function($stateProvider, $urlRouterProvider, $compileProvider) {
    
    $compileProvider.debugInfoEnabled(false);

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        resolve: {
          currentAuth: function(Auth) {
            return Auth.$waitForAuth();
          }
        }
      })
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        resolve: {
          currentAuth: function(Auth) {
            return Auth.$requireAuth();
          }
        }
      })
      .state('chat', {
        url: '/chat',
        templateUrl: 'views/chat.html',
        controller: 'ChatCtrl',
        resolve: {
          currentAuth: function(Auth) {
            return Auth.$requireAuth();
          }
        }
      })
      ;
        $urlRouterProvider
        .otherwise('/home');
  })

.run(function($rootScope, $state, $mdDialog, $mdToast, $timeout) {

    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      if(error === 'AUTH_REQUIRED') {
        $state.go('login');
        return $timeout(function() {
          $mdToast.show(
            $mdToast
            .simple()
            .content('You must be logged in to view content.')
            .position('bottom right')
          );
        }, 300);
      }
    });

  });
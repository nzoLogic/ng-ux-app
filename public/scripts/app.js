console.log('app.js online')
angular.module('shopApp', ['ngRoute', 'ui.materialize'])
    .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config($routeProvider, $locationProvider) {
    console.log('aaaay')
    $routeProvider.when('/', {
      templateUrl: '/templates/home',
      controllerAs: 'shopCtrl',
      controller: 'shopController'
    })
    .when('/showItem', {
      templateUrl: '/templates/showItem',
      controllerAs: 'shopCtrl',
      controller: 'shopController'
    })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    })
}

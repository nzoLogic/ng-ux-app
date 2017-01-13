angular.module('shopApp')
  .controller('shopController', shopController);
  shopController.$inject = ['$routeParams', '$http'];

function shopController($routeParams, $http){
  console.log('shop cotrlonline')
  var vm = this;
  vm.value = '';
  vm.name = "furniture";
}

angular.module('shopApp')
  .controller('shopController', shopController)
  .controller('furnitureController', furnitureController);
  shopController.$inject = ['$routeParams', '$http'];

function shopController($routeParams, $http){
  console.log('shop cotrlonline')
  var vm = this;
  vm.value = '';
  vm.name = "furniture";
}

function furnitureController(){
  var vm = this;
  vm.furnitureCollection = [
    {
      id: 'item1',
      date: 'Jan 8',
      title: 'west elm couch',
      deliverable: 'btn disabled right'
    },
    {
      id: 'item2',
      date:'Jan 4',
      title: 'chair',
      deliverable: 'btn green right'
    }
  ]
}

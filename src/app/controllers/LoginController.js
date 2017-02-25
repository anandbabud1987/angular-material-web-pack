angular.module('anand')
.controller('LoginController',['$scope','$http',login]);

function login($scope,$http){
  console.debug('LoginController loading')
  var vm=this;
  vm.username="Anand";
  vm.password="";
  vm.doLogin=doLogin;
  vm.cancel=cancel;
  function doLogin(){
    console.info('Logging in');
  }
  function cancel(){
    vm.username="";
    vm.password="";
  }
}

angular.module('anand')
.controller('LoginController',['$scope','$http','$state',login]);

function login($scope,$http,$state){
  console.debug('LoginController loading')
  var vm=this;
  vm.username="";
  vm.password="";
  vm.doLogin=function (){
    console.info('Logging in');
	$state.go('/main/home', {stateParamKey: '/main/home'});
  };
  vm.launchLoginDialog=launchLoginDialog;
  vm.cancel=cancel;
  vm.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function(state) {
        return {abbrev: state};
      });
  
  function cancel(){
    vm.username="";
    vm.password="";
  };
  function launchLoginDialog(){
	  console.log("Login Dialog");
  };
}

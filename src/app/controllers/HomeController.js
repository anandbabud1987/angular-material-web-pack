angular
	.module('anand')
	.controller('HomeController',['$scope','$http',home]);
function home($scope,$http){
  console.debug('HomeController loading');
  var vm=this;
  vm.state="";
 
}

angular.module('anand')
.directive('loginApp',loginapp);
function loginapp(){
  return {
    template: require('../tmpl/login.html'),
    controller: 'LoginController as vm'
  }
}

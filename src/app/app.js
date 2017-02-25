import angular from 'angular';
'use strict';
require('./vendor');
const MODULE_NAME = 'anand';
var anand=angular.module(MODULE_NAME, ['ngMaterial','ui.router']);

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'MainCtrl',
    controllerAs:'vm'
  }
};

class mainController {
  constructor() {
    var vm=this;
    vm.login=function(){
      console.debug('login');
    }
  }

}

require('./local');
anand.config(function($mdThemingProvider, $stateProvider) {
  $mdThemingProvider.theme('default')
  .primaryPalette('pink')
  .accentPalette('orange');
  console.debug('route is loading');
  $stateProvider.state('contacts', {
    template: '<h1>My Contacts</h1>'
  })

});
export default anand;

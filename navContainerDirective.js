(function () {
  'use strict';
  
  angular.module('dropDownNav.navContainerDirective', [])
    .directive('navContainer', directive);
    
  function directive() {
    return {
      restrict: 'A',
      scope: {},
      controller: 'navigationController',
      controllerAs: 'vm',
      bindToController: {
        contents: '='
      },
      template: '<div class="NavigationSectionContainer"><div class="MenuSectionContainer" ng-repeat="section in vm.contents" ng-include="\'nav/recursiveItem.html\'"></div>'
    };
  }
})();
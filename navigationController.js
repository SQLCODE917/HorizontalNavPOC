(function() {
  'use strict';
  
  angular.module('dropDownNav.controller', [])
    .controller('navigationController', controller);
    
  controller.$inject = ['navBuildingService'];
    
  function controller (navBuildingService) {
    
    var vm = this;
    vm.expandNav = false;
    vm.expandedNavType = void(0);
    vm.menuContents = [];
    vm.toggleHomeNavigation = toggleHomeNavigation;
    vm.toggleNameNavigation = toggleNameNavigation;
    vm.navContainerClass = navContainerClass;
    vm.clickNavigationBackdrop = clickNavigationBackdrop;
    vm.homeNavToggleClass = homeNavToggleClass;
    vm.nameNavToggleClass = nameNavToggleClass;
    return vm;
    
    function homeNavToggleClass() {
      var homeMenuIsExpanded = (vm.expandedNavType === 'home-menu-toggle') && vm.expandNav;
      return (homeMenuIsExpanded)? 'fa fa-angle-up' : 'fa fa-angle-down';
    }
    
    function nameNavToggleClass() {
      var nameMenuIsExpanded = (vm.expandedNavType === 'name-menu-toggle') && vm.expandNav;
      return (nameMenuIsExpanded)? 'fa fa-angle-up' : 'fa fa-angle-down';
    }
    
    function clickNavigationBackdrop() {
      vm.expandNav = false;
    }
    
    function toggleHomeNavigation(e) {
      conditionallyToggleNav.call(vm, e.target.id, navBuildingService.homeNav);
    }
    
    function toggleNameNavigation(e) {
      conditionallyToggleNav.call(vm, e.target.id, navBuildingService.nameNav);
    }
    
    function navContainerClass () {
      var classes = [vm.expandedNavType];
      if (vm.expandNav) {
        classes.push('expandNav');
      }
      return classes.join(' ');
    }
    /*
    Function with side-effects:
    vm.expandedNav may be toggled
    vm.menuContents may be changed
    vm.expandedNavType may be changed
    */
    function conditionallyToggleNav(newType, newNavContents) {
      var vm = this;
        
      if (vm.expandNav) {
        if (vm.expandedNavType === newType) {
          vm.expandNav = !vm.expandNav;
        } else {
          vm.menuContents = newNavContents;
          vm.expandedNavType = newType;
        }
      } else {
        vm.expandNav = true;
        if (vm.expandedNavType !== newType) {
          vm.menuContents = newNavContents;
          vm.expandedNavType = newType;
        }
      }
      
      console.log (vm.expandedNavType);
    }
  }
})();
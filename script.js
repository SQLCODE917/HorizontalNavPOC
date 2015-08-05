(function () {
  'use strict';
  
  angular.module('dropdownNav', [
    'ngAnimate',
    'dropDownNav.controller',
    'dropDownNav.navContainerDirective',
    'dropDownNav.navBuildingService',
    'dropDownNav.navMenuItem'
  ]).run (function($templateCache) {
    $templateCache.put('nav/recursiveItem.html', '<div menu-item="section" ></div>'+
    '<ul ng-if="section.children">'+
      '<li ng-repeat="section in section.children" ng-include="\'nav/recursiveItem.html\'">'+
      '</li>'+
    '</ul>');
    $templateCache.put('nav/inertItem.html', '<div id="{{::label}}" class="{{::classes}}">{{::label}}</div>');
    $templateCache.put('nav/hyperlinkItem.html', '<a href="{{::hyperlink}}" target="{{::target}}" id="{{::label}}" class="{{::classes}}">'+
    '{{::label}}' +
    '</a>');
    $templateCache.put('nav/uiStateItem.html', '<a ui-sref="{{::hyperlink}}" target="{{::target}}" id="{{::label}}" class="{{::classes}}">'+
    '{{::label}}' +
    '</a>');
  });
})();
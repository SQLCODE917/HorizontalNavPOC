(function () {
  'use strict';
  
  angular.module('dropDownNav.navMenuItem', [])
    .directive('menuItem', directive);
    
    directive.$inject = ['$templateCache', '$compile'];
    
  function directive($templateCache, $compile) {
    return {
      restrict: 'A',
      replace: true,
      scope: {
        menuItem: '='
      },
      link: function (scope, iElement) {
        
        if (scope.menuItem.type === "SECTION") {
          if (!scope.menuItem.label) {
            return;
          }
        }
        
        scope.classes = getClassString(scope.menuItem.reference, scope.menuItem.type);
        
        scope.label = scope.menuItem.label;
        scope.hyperlink = scope.menuItem.reference;
        
        if (scope.menuItem.referenceType === "STATE") {
          scope.target = scope.menuItem.target || "_self";
        } else {
          scope.target = scope.menuItem.target || "_blank";
        }

        var templateURL;
        switch (scope.menuItem.referenceType) {
          case "HYPERLINK": 
            templateURL = 'nav/hyperlinkItem.html'; 
            break;
          case "STATE": 
            templateURL = 'nav/uiStateItem.html'; 
            break;
          case "FUNCTION": 
            templateURL = 'nav/functionItem.html'; 
            break;
          default: 
            templateURL = 'nav/inertItem.html';
        }
        
        $compile($templateCache.get(templateURL))(scope, function (cElement) {
          iElement.replaceWith(cElement);
        });
      }
    };
    
    function getClassString(reference, type) {
      var classString = "MenuItem";
      
      if (type === "SECTION") {
        classString = classString + " MenuSection";
      } else if (type === "CATEGORY") {
        classString = classString + " MenuCategory";
      } else {
        classString = classString + " actionableMenuItem";
      }
      
      return classString;
    }
  }
})();
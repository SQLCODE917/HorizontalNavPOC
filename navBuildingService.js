(function () {
  'use strict';
  
  angular.module('dropDownNav.navBuildingService', [])
    .factory('navBuildingService', factory);
  
  function factory () {
    var model = this;
    model.homeNav = [];
    model.nameNav = [];
    
    buildNameNav();
    buildHomeNav();
    
    return {
      nameNav: model.nameNav,
      homeNav: model.homeNav
    };
    
    function buildNameNav() {
    // imagine that we are calling a middleware service here
    
      model.nameNav = [
        {
          'type': 'SECTION',
          'label': 'PREFERENCES',
          children: [
            {
              'type': 'ITEM',
              'label': 'User_Settings',
              'referenceType': 'HYPERLINK',
              'reference': 'https://www.google.com'
            },
            {
              'type': 'ITEM',
              'target':'_self',
              'referenceType': 'STATE',
              'label': 'Navigation.Logout',
              'reference': 'logout'
            }
          ]
        },

      ];
    }
    
    function buildHomeNav() {
      // imagine that we are calling a middleware service here
      model.homeNav = [
        {
          'label': 'Home',
          'type': 'ITEM',
          'reference': 'home',
          'referenceType': 'STATE',
          'target': '_self'
        },
        {
          'type': 'SECTION',
          'label': 'HOW_YOU_BUY_CANDY',
          'children': [
            {
              'type': 'ITEM',
              'label': 'Bill_Management',
              'reference': 'https://www.google.com',
              'referenceType': 'HYPERLINK'
            },
            {
              'type': 'ITEM',
              'label': 'Procurement',
              'reference': 'https://www.google.com',
              'referenceType': 'HYPERLINK'
            },
            {
              'type': 'ITEM',
              'label': 'Pricing',
              'reference': 'https://www.google.com',
              'referenceType': 'HYPERLINK'
            }
          ]
        },
        {
          'type': 'SECTION',
          'label': 'HOW_MUCH_YOU_EAT',
          children: [
            {
              'type': 'ITEM',
              'label': 'Profiling',
              'reference': 'https://www.google.com',
              'referenceType': 'HYPERLINK'
            },
            {
              'type': 'ITEM',
              'label': 'Waist_Measures',
              'reference': 'https://www.google.com',
              'referenceType': 'HYPERLINK'
            },
            {
              'type': 'ITEM',
              'label': 'Analytics',
              'reference': 'https://www.google.com',
              'referenceType': 'HYPERLINK'
            },
            {
              'type': 'ITEM',
              'label': 'Candy_Drawer',
              'reference': 'https://www.google.com',
              'referenceType': 'HYPERLINK'
            },
            {
              'type': 'ITEM',
              'label': 'Saccharine_Dashboard',
              'reference': 'https://www.google.com',
              'referenceType': 'HYPERLINK'
            },
            {
              'type': 'ITEM',
              'label': 'Saccharine_Facilities',
              'reference': 'https://www.google.com',
              'referenceType': 'HYPERLINK'
            }
          ]
        },
        {
          'type': 'SECTION',
          'label': 'WHEN_YOU_EAT',
          'children': [
            {
              'type': 'ITEM',
              'label': 'Blood_Sugar_Alerts',
              'reference': 'https://www.google.com',
              'referenceType': 'HYPERLINK'
            },
            {
              'type': 'ITEM',
              'label': 'Todays_Consumption',
              'reference': 'https://www.google.com',
              'referenceType': 'HYPERLINK'
            },
            {
              'type': 'ITEM',
              'label': 'Diet_History',
              'reference': 'https://www.google.com',
              'referenceType': 'HYPERLINK'
            },
            {
              'type': 'ITEM',
              'label': 'Candy_Earnings',
              'reference': 'https://www.google.com',
              'referenceType': 'HYPERLINK'
            },
            {
              'type': 'ITEM',
              'label': 'CNDDi',
              'reference': 'https://www.google.com',
              'referenceType': 'HYPERLINK'
            }
          ]
        },
        {
          'type': 'SECTION',
          children: [
            {
              'type': 'CATEGORY',
              'label': 'ADMIN',
              'children': [
                {
                  'type': 'ITEM',
                  'label': 'Shopping_Schedules',
                  'reference': 'https://www.google.com',
                  'referenceType': 'HYPERLINK'
                },
                {
                  'type': 'ITEM',
                  'label': 'Document_Management',
                  'reference': 'https://www.google.com',
                  'referenceType': 'HYPERLINK'
                }
              ]
            },
            {
              'type': 'CATEGORY',
              'label': 'HELP_CENTER',
              'children': [
                {
                  'type': 'ITEM',
                  'label': 'Surgeon_General_Warnings',
                  'reference': 'https://www.google.com',
                  'referenceType': 'HYPERLINK'
                },
                {
                  'type': 'ITEM',
                  'label': 'Sugar_Addicts_Anonymous',
                  'reference': 'https://www.google.com',
                  'referenceType': 'HYPERLINK'
                }
              ]
            },
          ]
        }
      ];
    }
  }
})();
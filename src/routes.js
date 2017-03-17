(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

//   // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/categories.template.html',
    controller: 'CategoriesController as $ctrl'//,
    // resolve: {
    //   categories: ['MenuDataService', function (MenuDataService) {
    //   //  return MenuDataService.getAllCategories();
    //   return MenuDataService.getItems();
    //   }]
  //  }
  })

//   // Item detail
  // .state('itemDetail', {
  //    url: '/item-detail/{short_name}',
  //   templateUrl: 'src/templates/items.template.html',
  //   controller: 'ItemDetailController as itemDetail',
  //   params: {
  //     short_name: null
  //   },
  //   resolve: {
  //     items: ['MenuDataService', function (MenuDataService) {
  //     //  return MenuDataService.getAllCategories();
  //     return MenuDataService.getItemsForCategory(short_name);
  //     }]
  //   }
  // });

  .state('itemDetail', {
  url: '/item-detail/{short_name}',
  templateUrl: 'src/templates/items.template.html',
  controller: 'ItemDetailController as itemDetail',
  resolve: {
    items: ['$stateParams', 'MenuDataService',
          function ($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.short_name)
              .then(function (items) {
              //  for (int i = 0; i < )
                console.log(items)
                return items; //[$stateParams.short_name];
              });
          }]
  }
});

}

})();

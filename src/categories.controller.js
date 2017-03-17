(function () {
'use strict';

angular.module('Data')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['MenuDataService']
// function CategoriesController () {
//     var categories = this;
//     $ctrl = this;
//     categories.categories = items;
//     $ctrl.items = items;
//
//     $ctrl.$onInit = function () {
//       console.log("here: ");
//   //    console.log($ctrl.items);
//     };
// }

    function CategoriesController (MenuDataService) {
        var $ctrl = this;
        $ctrl.categories = [];
        $ctrl.items = [];

      //  $ctrl.categories = categories;

        // var promise = MenuDataService.getAllCategories();
        //
        // promise.then(function (response) {
        //   $ctrl.categories = response.data;
        // })
        // .catch(function (error) {
        //   console.log("Something went terribly wrong.");
        // });

        $ctrl.$onInit = function () {
          console.log("in init");

          MenuDataService.getAllCategories()
          .then(function(result) {
            $ctrl.items = result;
          })
          // MenuDataService.getItems()
          //   .then(function (result) {
          //   $ctrl.items = result;
          // });
      //    console.log($ctrl.items);
        };
    }
})();

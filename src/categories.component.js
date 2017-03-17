(function () {
'use strict';

angular.module('Data')
.component('categoriesList', {
    templateUrl: 'src/templates/categorieslist.template.html',
//    controller: CategoriesController,
    bindings: {
      items: '<'
    }
});

// function CategoriesController () {
//     $ctrl = this;
//     $ctrl.categories = getAllCategories();
//
//     $ctrl.$onInit = function () {
//       console.log("here: ");
//   //    console.log($ctrl.items);
//     };
// }

})();

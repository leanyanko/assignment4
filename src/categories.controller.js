(function () {
'use strict';

angular.module('Data')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['MenuDataService']

    function CategoriesController (MenuDataService) {
        var $ctrl = this;
        $ctrl.categories = [];
        $ctrl.items = [];

        $ctrl.$onInit = function () {
          MenuDataService.getAllCategories()
          .then(function(result) {
            $ctrl.items = result;
          })
        };
    }
})();

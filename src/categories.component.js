(function () {
'use strict';

angular.module('Data')
.component('categoriesList', {
    templateUrl: 'src/templates/categorieslist.template.html',
    bindings: {
      items: '<'
    }
});

})();

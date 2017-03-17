(function () {
    'use strict';
    angular.module('Data')
    .service('MenuDataService', MenuDataService)

    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    MenuDataService.$inject = ['ApiBasePath', '$http'];
    function MenuDataService (ApiBasePath, $http) {
        var service = this;
        var categories = [];

        service.getAllCategories = function () {
            var response = $http({
              method: "GET",
              url: (ApiBasePath + "/categories.json")
            })
            .then(function success (resp){
              return resp.data;
            });
            return response;
        };

        service.getItemsForCategory = function (categoryShortName) {
          console.log('categoryShortName: ', categoryShortName);
            return $http({
                url: (ApiBasePath + "/menu_items.json")
            }).then(function (result) {                 // process result and only keep items that match
                 var foundItems = [];
              //   console.log("in then");
                 for (var i = 0; i < result.data.menu_items.length; i++) {
                  // console.log(result.data.menu_items[i].short_name);
                     if (result.data.menu_items[i].short_name.toLowerCase().indexOf(categoryShortName.toLowerCase()) !== -1) {
                        var    item = {
                              name: result.data.menu_items[i].name,
                              description: result.data.menu_items[i].description
                            }
                            //  foundItems.push(result.data.menu_items[i]);
                            foundItems.push(item);
                     }
                  }
    //              console.log(foundItems);
                 return foundItems;
             });
        };
    }
})();

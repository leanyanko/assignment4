(function () {
    'use strict';
    angular.module('Data')
    .service('MenuDataService', MenuDataService)

    .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

    MenuDataService.$inject = ['ApiBasePath','$q', '$timeout', '$http'];
    function MenuDataService (ApiBasePath, $q, $timeout, $http) {
        var service = this;
        var categories = [];

        service.getAllCategories = function () {
            // return $http({
            //     url: (ApiBasePath + '/categories.json')
            // }).then(function (result) {                 // process result and only keep items that match
            //     //  var foundItems = [];
            //     // for (var i = 0; i < result.data.menu_items.length; i++) {
            //     //     foundItems.push(result.data.menu_items[i]);
            //     //  }
            //     //  return foundItems;
            //     return result.data.menu_items;
            //  });
            var response = $http({
              method: "GET",
              url: (ApiBasePath + "/categories.json")
            })
            .then(function success (resp){
              return resp.data;
            });
        //    console.log(response);
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
                          var  item = {
                              name: result.data.menu_items[i].name,
                              description: result.data.menu_items[i].description
                            }
                            //  foundItems.push(result.data.menu_items[i]);
                            foundItems.push(item);
                     }
                  }
              //    console.log(foundItems);
                 return foundItems;
             });
        };


        var items = [];

// Pre-populate a no cookie list
items.push({
  name: "Sugar",
  quantity: "2 bags",
  description: "Sugar used for baking delicious umm... baked goods."
});
items.push({
  name: "flour",
  quantity: "1 bags",
  description: "High quality wheat flour. Mix it with water, sugar, 2 raw eggs."
});
items.push({
  name: "Chocolate Chips",
  quantity: "3 bags",
  description: "Put these in the dough. No reason, really. Gotta store them somewhere!"
});

// Simulates call to server
// Returns a promise, NOT items array directly
service.getItems = function () {
  var deferred = $q.defer();

  // Wait 2 seconds before returning
  $timeout(function () {
    // deferred.reject(items);
    deferred.resolve(items);
  }, 800);

  return deferred.promise;
};
    }
})();

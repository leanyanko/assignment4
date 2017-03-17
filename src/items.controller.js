(function () {
'use strict';

angular.module('Data')
.controller('ItemDetailController', ItemDetailController);

// 'item' is injected through state's resolve
ItemDetailController.$inject = ['items']
function ItemDetailController(items) {
  var itemDetail = this;
//  itemDetail.data = {};
//  getItemsForCategory
  // itemDetail.name = item.name;
  // itemDetail.quantity = item.quantity;
  // itemDetail.description = item.description;


  itemDetail.items = [];

   itemDetail.$onInit = function () {
//     console.log("short_name: ", short_name);
//
//     // MenuDataService.getItemsForCategory(ItemId)
//     // .then(function(result) {
//     //   itemDetail.data = result;
//     // })
//
// itemDetail.items = MenuDataService.getItemsForCategory(short_name);
//
itemDetail.items = items;
      console.log("items: ", items);
     console.log("itemDetail.items: ", itemDetail.items);
   }
//
//
//
//   itemDetail.getData = function (short_name) {
//     MenuDataService.getItemsForCategory(ItemId)
//      .then(function(result) {
//        itemDetail.data = result;
//      })
//
//      console.log(itemDetail.data);
//   }

}

})();

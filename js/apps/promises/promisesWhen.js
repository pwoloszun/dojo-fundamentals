define([
  "dojo/when",
  "stores/itemsStore"
], function(when, itemsStore) {
  return {
    run: function() {
      // 1st call is asynch
      when(itemsStore.getAll(), function(items) {
        console.log("1st:", items);
      });

      // 2nd, 3rd, ... calls are synch
      when(itemsStore.getAll(), function(items) {
        console.log("2nd:", items);
      });
      when(itemsStore.getAll(), function(items) {
        console.log("3rd:", items);
      });
    }
  };
});

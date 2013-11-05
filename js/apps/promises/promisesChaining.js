define([
  "dojo/Deferred"
], function(Deferred) {
  return {
    run: function() {
      var deferred = new Deferred();
      deferred.then(function() {
        console.log("step 1", arguments);
        return "result 1";
      },function(error) {
        console.log("ERROR 1:", arguments);
        throw error;
      }).then(function() {
          console.log("step 2", arguments);
          return "result 2";
        },function(error) {
          console.log("ERROR 2:", arguments);
          throw error;
        }).then(function() {
          console.log("step 3", arguments);
          return "result 3";
        },function(error) {
          console.log("ERROR 3:", arguments);
          throw error;
        }).otherwise(function(error) {
          console.log("otherwise:", arguments);
          throw error;
        }).always(function() {
          console.log("always:", arguments);
        });

      deferred.reject("no niestety");
      //deferred.resolve("jest git");
    }
  };
});

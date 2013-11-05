define([
  "dojo/Deferred",
  "dojo/promise/all",
  "dojo/promise/first"
], function(Deferred, all, first) {
  return {
    run: function() {
      var def1 = new Deferred();
      var def2 = new Deferred();

      all([def1, def2]).then(function(result1, result2) {
        console.log("resolved", result1, result2);
        return "list result";
      }, function(error) {
        console.log("rejected", error);
        throw error;
      });

      //def2.reject("no niestety 2");
      def2.resolve("jest git 2");
      setTimeout(function() {
        def1.resolve("jest git 1");
      }, 1000);
    }
  };
});

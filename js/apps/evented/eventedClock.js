define([
  "models/Clock"
], function(Clock) {
  return {
    run: function() {
      var clock = new Clock();

      clock.on("change", function() {
        console.log("Changed with: ", this, arguments);
      });
      clock.on("change", function(currentTime) {
        console.log("Some other change listener... " + currentTime);
      });
      clock.on("stop", function() {
        console.log("Stopped with: ", this, arguments);
      });

      clock.start();
      setTimeout(function() {
        clock.stop();
      }, 5500);
    }
  };
});

define(["services/greeter"], function(greeter) {
  return {
    run: function() {
      greeter.setText("greeting", "Hello Dojo!");
      setTimeout(function() {
        greeter.restoreText("greeting");
      }, 3000);
    }
  };
});

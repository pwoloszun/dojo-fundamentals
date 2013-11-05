var dojoConfig = {
  baseUrl: "/",
  packages: [
    {name: "dojo", location: "vendor/js/dojo"},
    {name: "apps", location: "js/apps"},
    {name: "models", location: "js/models"},
    {name: "services", location: "js/services"},
    {name: "utils", location: "js/utils"},
    {name: "views", location: "js/views"}
  ],
  async: true,
  //cacheBust: true,
  parseOnLoad: false,
  callback: function() {
    require([
      "apps/main",
      "dojo/parser",
      "dojo/ready"
    ], function(app, parser, ready) {
      ready(function() {
        parser.parse();
        app.run();
      });
    });
  }
};

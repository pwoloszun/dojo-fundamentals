/*
* 1. Zdefiniuj hierarchie klas: User <- SuperUser <- Root
* 2. zaimplementuj im metody getLogin(),
*   tak by kazda wywolywala nadpisana metode z klasy rodzica
* */

define([
], function() {
  return {
    run: function() {
      var users = [
        new User({login: "user", name: "usr Bob"}),
        new SuperUser({login: "su", name: "su Kate"}),
        new Root({login: "root", name: "root Tom"})
      ];
      for(var i = 0; i < users.length; i++) {
        var user = users[i];
        log(user.getLogin());
        log(user.getName());
      }
    }
  };
});

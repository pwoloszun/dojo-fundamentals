/*
* Zaimplementuj aplikacje
* */

define([
], function() {
  return {
    run: function() {
      var view = new TweetsView("#get-tweets-btn");
      view.tweetsBtnClickedPromise()
        .then(view.showSpinner)
        .then(usersStore.getAll)
        .then(twitterService.usersTweets)
        .then(view.showTweets)
        .otherwise(view.showError)
        .always(view.hideSpinner);
    }
  };
});

define([
  "models/Cart",
  "views/CartView",
  "views/OrderSummaryView"
], function(Cart, CartView, OrderSummaryView) {
  return {
    run: function() {
      var cart = new Cart();
      // cart view
      var cartView = new CartView();
      cart.on("addItem", function() {
        cartView.render(cart);
      });
      // order summary view
      var orderSummaryView = new OrderSummaryView();
      cart.on("addItem", function() {
        orderSummaryView.setTotal(cart.getTotal());
      });
      //...
      cart.addItem({name: "Apple", price: 2.19});
    }
  };
});

let app = angular.module("myApp", []);
app.controller("ctrl", function($scope, $http) {
  $scope.product = [];
  $scope.cart = [];
  $scope.grandTotal = 0;

  $http.get("./assets/data/product.json")
  .then(function(response) {
    $scope.product = response.data;
  });

  $scope.cart_add = function(product) {
    let existingItem = $scope.cart.find(item => item.id === product.id);

    if(existingItem) {
      existingItem.qty++;
    } else {
      product.qty = 1;
      $scope.cart.push(product);    
    }
    $scope.calc_grandTotal();
  }

  $scope.cart_reduce = function(product) {
    if(product.qty > 1) {
      product.qty--;
      $scope.calc_grandTotal();
    }
  }

  $scope.cart_remove = function(product) {
    let index = $scope.cart.indexOf(product);
    if(index > -1) {
      $scope.cart.splice(index, 1); // Corrected to remove one item at the index
    }
    $scope.calc_grandTotal();
  }

  $scope.calc_grandTotal = function() {
    let tempTotal = 0;
    $scope.cart.forEach(item => {
      tempTotal += item.qty * item.price;
    });
    $scope.grandTotal = tempTotal.toFixed(2);

    // Apply discount if grandTotal is greater than or equal to 5000
    if ($scope.grandTotal >= 5000) {
      $scope.grandTotal = ($scope.grandTotal * 0.9).toFixed(2); // Apply a 10% discount
    }
  }

  $scope.show_cart = function() {
    var cartModel = new bootstrap.Modal(document.getElementById("cartModel"));
    cartModel.show();
    $scope.calc_grandTotal();
  }

  $scope.hide_cart = function() {
    var cartModel = new bootstrap.Modal(document.getElementById("cartModel"));
    cartModel.hide();
  }

  $scope.discount = function(type, ...params) {
    if(type === "auto") {
      if($scope.grandTotal >= 5000) {
        $scope.grandTotal = ($scope.grandTotal * 0.9).toFixed(2); // Apply a 10% discount
      }
    }
  }
});

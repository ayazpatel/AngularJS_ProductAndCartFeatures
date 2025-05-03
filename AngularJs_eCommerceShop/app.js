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
    }else{
      // let newItem = angular.copy(product);
      // newItem.qty = 1;

      // $scope.cart.push(newItem);
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
      $scope.cart.splice(index);
    }
    $scope.calc_grandTotal();
  }

  $scope.calc_grandTotal = function() {
    tempTotal = 0;
    $scope.cart.forEach(item => {
      tempTotal += item.qty * item.price;
    });
    $scope.grandTotal = tempTotal.toFixed(2);
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



});
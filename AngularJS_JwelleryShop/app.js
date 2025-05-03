let app = angular.module("myApp", []);

app.controller("myCtrl", function($scope, $http) {
  $scope.data = [];
  $scope.cart = [];
  $scope.grandTotal = 0;

  $http.get("./assets/data/product.json")
  .then(function(response) {
    $scope.data = response.data;
    console.log($scope.data);
  })

  $scope.addCart = function(product) {
    let existingItem = $scope.cart.find(item => item.id === product.id);

    if(existingItem) {
      existingItem.quantity++;
    } else {
      let newItem = angular.copy(product);
      newItem.quantity = 1
      $scope.cart.push(newItem);
    }
    $scope.updateTotal();
  }

  $scope.viewData = function(product) {
    
  }

  $scope.removeCart = function(product) {
    let index = $scope.cart.indexOf(product);
    if(index > -1) {
      $scope.cart.splice(index, 1);
    }
    $scope.updateTotal();
  }

  $scope.reduceCart = function(product) {
    if (product.quantity > 1) {
      product.quantity--;
    } else {
      $scope.removeCart(item);
    }
    $scope.updateTotal();
  }

  $scope.updateTotal = function() {
    let total = 0;
    $scope.cart.forEach(element => {
      total += element.quantity * element.price;
    });
    $scope.grandTotal = total;
  }

  $scope.showCart = function() {
    var modalCart = new bootstrap.Modal(document.getElementById("cartModal"));
    modalCart.show();
    $scope.updateTotal();
  };

  $scope.hideCart = function() {
    var modalCart = new bootstrap.Modal(document.getElementById("cartModal"));
    modalCart.hide();
  };

});
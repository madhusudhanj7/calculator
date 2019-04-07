var app = angular.module("myCalci", []);
app.controller("myCtrl", function ($scope) {
  $scope.output = "0";
  $scope.operationSign = "";
  $scope.newNumber = true;
  $scope.displayOutput = null;
  $scope.total = null;
  $scope.operation = null;
  $scope.operationSign = "";

  var ADD = "adding";
  var SUBTRACT = "subtracting";
  var MULTIPLY = "multiply";
  var DIVIDE = "divide";
  var ADD_SIGN = "+";
  var SUBTRACT_SIGN = "-";
  var MULTIPLY_SIGN = "*";
  var DIVIDE_SIGN = "/";

  $scope.updateOutput = function (btn) {
    if ($scope.newNumber || $scope.output == "0") {
      $scope.output = btn;
      $scope.newNumber = false;
    } else {
      $scope.output += String(btn);
    }
    $scope.holdDisplayOutput = toNumber($scope.output);
  };

  $scope.add = function () {
    if ($scope.displayOutput) {
      if ($scope.total && $scope.operation == ADD) {
        $scope.total += $scope.displayOutput;
      } else {
        $scope.total = $scope.displayOutput;
      }

    }
    setoperationSign(ADD);
    setOutput(String($scope.total));
    $scope.operation = ADD;
    $scope.newNumber = true;
    $scope.displayOutput = null;
  };


  $scope.subtract = function () {
    if ($scope.displayOutput) {
      if ($scope.total && $scope.operation == SUBTRACT) {
        $scope.total -= $scope.displayOutput;
      } else {
        $scope.total = $scope.displayOutput;
      }

    }
    setoperationSign(SUBTRACT);
    setOutput(String($scope.total));
    $scope.operation = SUBTRACT;
    $scope.newNumber = true;
    $scope.displayOutput = null;
  };

  $scope.multiply = function () {
    if ($scope.displayOutput) {
      if ($scope.total && $scope.operation == MULTIPLY) {
        $scope.total *= $scope.displayOutput;
      } else {
        $scope.total = $scope.displayOutput;
      }

    }
    setoperationSign(MULTIPLY);
    setOutput(String($scope.total));
    $scope.operation = MULTIPLY;
    $scope.newNumber = true;
    $scope.displayOutput = null;
  };

  $scope.divide = function () {
    if ($scope.displayOutput) {
      if ($scope.total && $scope.operation == DIVIDE) {
        $scope.total /= $scope.displayOutput;
      } else {
        $scope.total = $scope.displayOutput;
      }

    }
    setoperationSign(DIVIDE);
    setOutput(String($scope.total));
    $scope.operation = DIVIDE;
    $scope.newNumber = true;
    $scope.displayOutput = null;
  };

  $scope.calculate = function () {
    if (!$scope.newNumber) {
      $scope.displayOutput = toNumber($scope.output);
      $scope.lastValue = $scope.displayOutput;
    }
    if ($scope.operation == ADD) {
      $scope.total += $scope.displayOutput;
      $scope.operation = ADD;
    } else if ($scope.displayOutput == SUBTRACT) {
      $scope.total -= $scope.displayOutput;
      $scope.operation = SUBTRACT;
    } else if ($scope.displayOutput == MULTIPLY) {
      $scope.total *= MULTIPLY;
    } else if ($scope.displayOutput == DIVIDE) {
      $scope.total /= DIVIDE;
    } else {
      if ($scope.operation == ADD) {
        if ($scope.total) {
          $scope.total += $scope.lastValue;
        } else {
          $scope.total = 0;
        }
      } else if ($scope.operation == SUBTRACT) {
        if ($scope.total) {
          $scope.total -= $scope.lastValue;
        } else {
          $scope.total = 0;
        }
      } else if ($scope.operation == MULTIPLY) {
        if ($scope.total) {
          $scope.total *= $scope.lastValue;
        } else {
          $scope.total = 0;
        }
      } else if ($scope.operation == DIVIDE) {
        if ($scope.total) {
          $scope.total = $scope.lastValue;
        } else {
          $scope.total = 0;
        }
      }
    }
    setOutput($scope.total);
    setOperationToken();
    $scope.operation = null;
    $scope.displayOutput = null;
  };

  $scope.clear = function () {
    $scope.total = null;
    $scope.displayOutput = null;
    $scope.operation = null;
    setOutput("0");
  }
  setOutput = function (val) {
    $scope.output = val;
    $scope.newNumber = true;
  };

  setoperationSign = function (op) {
    if (op == ADD) {
      $scope.operationSign = ADD_SIGN;
    } else if (op == SUBTRACT) {
      $scope.operationSign = SUBTRACT_SIGN;
    } else if (op == MULTIPLY) {
      $scope.operationSign = MULTIPLY_SIGN;
    } else if (op == DIVIDE) {
      $scope.operationSign = DIVIDE_SIGN;
    } else {
      $scope.operationSign = "";
    }
  };
  toNumber = function (numberString) {
    var result = 0;
    if (numberString) {
      result = numberString * 1;
    }
    return result;
  };
});
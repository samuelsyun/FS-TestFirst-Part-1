function RPNCalculator() {
  this.numStack = [];
}

RPNCalculator.prototype.value = function() {
  return this.numStack[this.numStack.length - 1];
}

RPNCalculator.prototype.push = function(num) {
  this.numStack.push(num);
}

RPNCalculator.prototype.popCompute = function(func) {
  if (this.numStack.length < 2) {
    throw 'rpnCalculatorInstance is empty';
  } else {
    let num1 = this.numStack.pop();
    let num2 = this.numStack.pop();

    this.push(func(num1, num2));
  }
}

RPNCalculator.prototype.plus = function() {
  this.popCompute(function (num1, num2) {
    return num2 + num1;
  })
}

RPNCalculator.prototype.minus = function() {
  this.popCompute(function (num1, num2) {
    return num2 - num1;
  })
}

RPNCalculator.prototype.times = function() {
  this.popCompute(function(num1, num2) {
    return num2 * num1;
  })
}

RPNCalculator.prototype.divide = function() {
  this.popCompute(function (num1, num2) {
    return num2 / num1;
  })
}

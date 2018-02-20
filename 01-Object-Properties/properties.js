function setPropsOnObj(object) {
  object.x = 7;
  object['y'] = 8;
  object.onePlus = function(num) {return num + 1};
}

function setPropsOnArr(arr) {
  arr.hello = () => 'Hello!';
  arr['full'] = 'stack';
  arr[0] = 5;
  arr.twoTimes = (num) => num * 2;
}

function setPropsOnFunc(func) {
  func.year = '20??';
  func.divideByTwo = function(num) {
    return num / 2;
  };
  func.prototype.helloWorld = () => 'Hello World';
}

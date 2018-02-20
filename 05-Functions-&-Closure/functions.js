function concatString() {
  return Array.prototype.slice.call(arguments).join('');
}

function yourFunctionRunner() {
  let finalStr = '';

  for (let i = 0; i < arguments.length; i++) {
    finalStr += arguments[i]();
  }

  return finalStr;
}

function makeAdder(adder) {
  return function(num) {
    return num + adder;
  }
}

function once(func) {
  let hasRan = false;

  return function() {
    if (!hasRan) {
      func();
      hasRan = true;
    }
  }
}


function createObjectWithClosures() {
  let total = 0;

  return {
    oneIncrementer: function() {total += 1},
    tensIncrementer: function() {total += 10},
    setValue: function(value) {total = value},
    getValue: function() {return total}
  }
}


function guestListFns(guestsArr, code) {
  var result = [];

  var wrapper = function(guest, code) {
    return function(num) {
      if (num === code) {
        return guest;
      } else {
        return 'Secret-Code: Invalid';
      }
    };
  };

  for (let i = 0; i < guestsArr.length; i++) {
    result.push(wrapper(guestsArr[i], code));
  }

  return result;
}

function generateGuestList(guestsFncArr, code) {
  return guestsFncArr.map(function(guestFnc) {
    return guestFnc(code);
  });
}


function repeat(str, num) {
  let resultStr = ''

  for (let i = 0; i < num; i++) {
    resultStr += str;
  }

  return resultStr;
}

function sum(arr) {
  let totalSum = 0;

  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
  }

  return totalSum;
}


function join(arr, joiner) {
  let joinedStr = ''

  for (let i = 0; i < arr.length; i++) {
    joinedStr += arr[i];

    if (joiner && i != arr.length - 1) {
      joinedStr += joiner;
    }
  }

  return joinedStr;
}

function gridGenerator(num) {
  let board = '';

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (!((i + j) % 2)) {
        board += '#';
      } else {
        board += ' ';
      }
    }

    board += '\n';
  }

  return board;
}

function paramify(obj) {
  let params = []

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      params.push(key + '=' + obj[key])
    }
  }

  return params.sort().join('&')
}

function paramifyObjectKeys(obj) {
  return Object.keys(obj).map(function (key) {
    return key + '=' + obj[key]
  }).sort().join('&')
}

function renameFiles(arr) {
 let nameTracker = {};
 let namer = function(fileName, num) {
   return fileName + '(' + num + ')';
 }

 return arr.map(function(name) {
   let extension = nameTracker[name] || 0;
   nameTracker[name] = extension + 1;

   if (!extension) {
     return name;
   }

   let keyName = namer(name, extension);

   while (nameTracker[keyName] || arr.indexOf(keyName) > -1) {
     keyName = namer(name, extension++);
   }

   nameTracker[keyName] = 1;

   return keyName;
 });
}

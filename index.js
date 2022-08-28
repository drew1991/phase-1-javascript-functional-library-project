let alert = function(collection) {
    return (collection === Array) ? collection.slice() : Object.values(collection);
  }
  
  let myEach = function(collection, callback) {
    let newCollection = alert(collection);
  
    for (let i= 0; i < newCollection.length; i++) {
      callback(newCollection[i]);
    }
  
    return collection;
  }
  
  let myMap = function(collection, callback) {
    let newCollection = alert(collection);
  
    let newArr = [];
  
    for (let i = 0; i < newCollection.length; i++) {
      newArr.push(callback(newCollection[i]));
    }
  
    return newArr;
  }
  
  let myReduce = function(collection, callback, acc) {
    let newCollection = alert(collection);
  
    if (!acc) {
      acc = newCollection[0];
      newCollection = newCollection.slice(1);
    }
  
    let len = newCollection.length;
  
    for (let i = 0; i < len; i++) {
      acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
  }
  
  let myFind = function(collection, predicate) {
    let newCollection = alert(collection);
  
    for (let i = 0; i < newCollection.length; i++) {
      if (predicate(newCollection[i])) return newCollection[i];
    }
  
    return undefined;
  }
  
  let myFilter = function(collection, predicate) {
    let newCollection = alert(collection);
  
    let newArr = [];
  
    for (let i = 0; i < newCollection.length; i++) {
      if (predicate(newCollection[i])) newArr.push(newCollection[i]);
    }
  
    return newArr;
  }
  
  let mySize = function(collection) {
    let newCollection = alert(collection);
    return newCollection.length;
  }
  
  
  let myFirst = function(arr, stop=false) {
    return (stop) ? arr.slice(0, stop) : arr[0];
  }
  
  let myLast = function(arr, start=false) {
    return (start) ? arr.slice(arr.length-start, arr.length) : arr[arr.length-1];
  }
  
  let mySortBy = function(arr, callback) {
    let newArr = [...arr];
    return newArr.sort(function(a, b) {
      if (callback(a) > callback(b)) {
        return 1;
      } else if (callback(b) > callback(a)) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  
  let unpack = function(receiver, arr) {
    for (let val of arr) {
      receiver.push(val);
    }
  }
  
  let myFlatten = function(collection, shallow, newArr=[]) {
    if (shallow) {
      for (let val of collection) {
        Array.isArray(val) ? unpack(newArr, val) : newArr.push(val);
      }
    } else {
      for (let val of collection) {
        if (Array.isArray(val)) {
          myFlatten(val, false, newArr);
        } else {
          newArr.push(val);
        }
      }
    }
    return newArr;
  }
  
  
  let myKeys = function(obj) {
    let keys = [];
    for (let key in obj){
      keys.push(key);
    }
    return keys;
  }
  
  let myValues = function(obj) {
    let values = [];
    for (let key in obj){
      values.push(obj[key]);
    }
    return values;
  
  }
const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for(let c in collection) {
       callback(collection[c])                              
      }
      return collection;
    },

    map: function(collection, callback) {
      const newCollection =  [];
      for(let c in collection) {
        newCollection.push(callback(collection[c]));                           
      }
      return newCollection;
    },

    reduce: function(collection, callback, acc) {
      for (let i in collection){
        if (acc === undefined){
          acc = collection[i]
        }else {
        acc = callback(acc,collection[i],collection);}
      }
      return acc ;
    },

    find: function(data, callback) {
      for(let i = 0; i < data.length; i++) {
        if(callback(data[i])) {
          return data[i];
        } 
    } 
    },

    filter: function(data,callback) {
      const expectedArr = [];
      for(let i = 0; i < data.length; i++) {
        callback(data[i]) && expectedArr.push(data[i]);
    }
    return expectedArr;
    },

    size: function(data){
      return Object.keys(data).length
    },

    first: function(data, n){
      if(n){
        const newArr = [];
        for(let i = 0; i < n; i++) {
          newArr.push(data[i])
      }
      return newArr;
      } else {
        return data[0];
      }
    },

    last: function(data, n){
      if(n){
      return data.slice(data.length-n)
      } else {
        return data[data.length-1];
      }
    },

    compact: function(data) {
      const newArray = [];
      for(let i = 0; i < data.length; i++) {
        if(data[i]) {
          newArray.push(data[i])
        }
    }
     return newArray;
    },

    sortBy: function(array, callback) {
      let sorted = [...array];
      sorted.sort(function (a,b){return callback(a)-callback(b)});
      return sorted;
    },

    flatten: function(array,shallow=false,flattened=[]){
      if(shallow){
        for(let i in array){
          if(Array.isArray(array[i])){
          flattened = flattened.concat(array[i]);
        }else{
          flattened.push(array[i]);
        }}
      }else{
      for (let i in array){
        if(Array.isArray(array[i])){
          this.flatten(array[i],false,flattened);
        }else{
          flattened.push(array[i]);
        }
      }}
      return flattened;
    },

    uniq: function(data, isSorted, callback) {
      if(!callback){
        const newSet = [...new Set(data)];
        return newSet;
      } else {
        const wholeArray = [];
        const modResultArray = [];
        for(const i of data){
          const newValue = callback(i);
          if(!modResultArray.includes(newValue)){
            modResultArray.push(newValue);
            wholeArray.push(i)
          }
        }
        return wholeArray;
      }
    },

    keys: function(obj) {
        const myArray = [];
        for(let key in obj) {
          myArray.push(key);
        }
        return myArray;
    },

    values: function(obj) {
      const myArray = [];
      for(let key in obj) {
        myArray.push(obj[key]);
      }
      return myArray;
  },

    functions: function(obj) {
      const funcArray = [];
      for(const i in obj){
        if(typeof obj[i] === "function"){
          funcArray.push(i)
        }
      }
      return funcArray.sort();
    },
  }
})()

fi.libraryMethod()
fi.each([1, 2, 3, 4], alert)
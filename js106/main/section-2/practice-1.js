'use strict';

module.exports = function countSameElements(collection) {
  var result = [];
  //var keycount = 0;
  result.push({key:collection[0],count:0});
  for(var i = 0; i<collection.length; i++){
      if(collection[i]===result[result.length-1].key){
          //keycount++;
          result[result.length-1].count++;
      }else{
          result.push({key:collection[i],count:1});
      }
  }
  return result;
}

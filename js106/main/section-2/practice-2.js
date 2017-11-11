'use strict';

module.exports = function countSameElements(collection) {
    var result = [];
    var keyA, countA;
    result.push({key:collection[0],count:0});
    for(var i = 0; i<collection.length; i++){
        if(collection[i]===result[result.length-1].key){
            result[result.length-1].count++;
        }else{
            result.push({key:collection[i],count:1});
        }
    }
    for(var j = 0; j < result.length; j++){
        if(result[j].key.length > 1 && result[j].key[1]==='-'){
            //console.log(result[j]);
            keyA = result[j].key[0];
            countA = result[j].key[2];
            result.splice(j,1);
            result.push({key:keyA,count:parseInt(countA)});
        }
    }
    //console.log(result);
    return result;
}

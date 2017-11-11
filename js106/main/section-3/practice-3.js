'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var result = [];
    result.push({key:collectionA[0],count:0});
    for(var i = 0; i<collectionA.length; i++){
        if(collectionA[i]===result[result.length-1].key){
            result[result.length-1].count++;
        }else{
            result.push({key:collectionA[i],count:1});
        }
    }
    var num = 0;
    for(var k = 0; k < objectB.value.length; k++){
        for(var j = 0; j < result.length; j++){
            if(objectB.value[k] === result[j].key){
                num = parseInt(result[j].count/3 );
                result[j].count -= num;
            }
        }
    }
    return result;
}

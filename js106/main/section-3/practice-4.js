'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var result = [];
    var keyA, countA;
    result.push({key:collectionA[0],count:0});
    for(var i = 0; i<collectionA.length; i++){
        if(collectionA[i]===result[result.length-1].key){
            result[result.length-1].count++;
        }else{
            result.push({key:collectionA[i],count:1});
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
    var num = 0;
    for(var k = 0; k < objectB.value.length; k++){
        for(var h = 0; h < result.length; h++){
            if(objectB.value[k] === result[h].key){
                num = parseInt(result[h].count/3 );
                result[h].count -= num;
            }
        }
    }
    return result;
}

'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var num = 0;
    for(var i = 0; i < objectB.value.length; i++){
        for(var j = 0; j < collectionA.length; j++){
            if(objectB.value[i] === collectionA[j].key){
                num = parseInt(collectionA[j].count/3 );
                collectionA[j].count -= num;
            }
        }
    }
    //console.log(collectionA);
    return collectionA;
}

var utes = require("./sortUtilities");

var startTime = process.hrtime();

var SIZE = 12;
var arr = utes.generateArray(SIZE);
while(!utes.isAscendingOrder(arr)){
    for(var i = 0; i < arr.length; i++){
        newIndex = Math.floor(Math.random() * arr.length);
        utes.swap(arr, i, newIndex);
    }
}

var endTime = process.hrtime(startTime);

console.info("Time: %ds %dms", endTime[0], endTime[1] / 1000000);
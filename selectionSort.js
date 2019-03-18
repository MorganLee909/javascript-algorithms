var utes = require("./sortUtilities");

var startTime = process.hrtime();

var SIZE = 100000;
var arr = utes.generateArray(SIZE);
for(var i = 0; i < arr.length - 1; i++){
    smallestIndex = i;
    for(var j = i+1; j < arr.length; j++){
        if(arr[j] < arr[smallestIndex]){
            smallestIndex = j;
        }
    }
    utes.swap(arr, i, smallestIndex)
}

var endTime = process.hrtime(startTime);

console.info("Time:  %ds %dms", endTime[0], endTime[1] / 1000000);
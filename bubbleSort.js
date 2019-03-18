var utes = require("./sortUtilities");

var startTime = process.hrtime();

var SIZE = 100000;
var arr = utes.generateArray(SIZE);
var j = 0
var swapped = true
while(swapped){
    swapped = false;
    j++;
    for(var i = 0; i < arr.length - j; i++){
        if(arr[i] > arr[i+1]){
            utes.swap(arr, i, i+1);
            swapped = true;
        }
    }
}

var endTime = process.hrtime(startTime);

console.info("Time:  %ds %dms", endTime[0], endTime[1] / 1000000);
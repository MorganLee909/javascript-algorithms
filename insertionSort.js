var utes = require("./sortUtilities");

var startTime = process.hrtime();

var SIZE = 100000;
var arr = utes.generateArray(SIZE);
for(var i = 1; i < arr.length; i++){

    for(var j = i; j >= 0; j--){
        if(arr[j] < arr[j-1]){
            utes.swap(arr, j, j-1);
        }else{
            break;
        }
    }
}

var endTime = process.hrtime(startTime);

console.info("Time:  %ds %dms", endTime[0], endTime[1] / 1000000);
function isAscendingOrder(arr){
    for(var i = 0; i < arr.length - 1; i++){
        if(arr[i] > arr[i+1]){
            return false;
        }
    }
    return true;
}

function isDescendingOrder(arr){
    for(var i = 0; i < arr.length - 1; i ++){
        if(arr[i] < arr[i+1]){
            return false;
        }
    }
    return true;
}

function generateArray(size){
    var arr = [];
    for(var i = 0; i < size; i++){
        var num = Math.floor(Math.random() * 1000);
        arr.push(num);
    }
    return arr;
}

function printArray(arr){
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

function swap(arr, index1, index2){
    temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

module.exports = {isAscendingOrder, isDescendingOrder, generateArray, printArray, swap};
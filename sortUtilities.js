module.exports = {
    isAscendingOrder: function(arr){
        for(var i = 0; i < arr.length - 1; i++){
            if(arr[i] > arr[i+1]){
                return false;
            }
        }
        return true;
    },

    isDescendingOrder: function(arr){
        for(var i = 0; i < arr.length - 1; i ++){
            if(arr[i] < arr[i+1]){
                return false;
            }
        }
        return true;
    },

    generateArray: function(size){
        var arr = [];
        for(var i = 0; i < size; i++){
            var num = Math.floor(Math.random() * 1000);
            arr.push(num);
        }
        return arr;
    },

    printArray: function(arr){
        for(var i = 0; i < arr.length; i++){
            console.log(arr[i]);
        }
    },

    swap: function(arr, index1, index2){
        temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
}
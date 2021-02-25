let createArray = (size)=>{
    console.time("create array");
    let arr = [];

    for(let i = 0; i < size; i++){
        arr.push(Math.floor(Math.random() * 1000));
    }

    console.timeEnd("create array");

    return arr;
}

let loopIt = (arr)=>{
    console.time("loop it");

    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i] + arr[i]);
    }

    console.timeEnd("loop it");
}

loopIt(createArray(10000000));
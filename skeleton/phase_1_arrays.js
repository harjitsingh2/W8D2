
Array.prototype.uniq = function(array) {
    let new_array = [];

    for (let i = 0; i < array.length; i++) {
        if (!new_array.includes(array[i])){
            new_array.push(array[i])
        }
    }
    return new_array;
}

arr_1 = [5,5,2,6,2,7];

// console.log(Array.prototype.uniq(arr_1));

Array.prototype.twoSum = function(array) { 
    let new_array = []

    for (let i = 0; i < array.length ; i++) {
        for (let j = 0; j < array.length; j++){
             if ((j > i ) && ( array[i] + array[j] === 0)){
                new_array.push([i,j])
             }
        }
    }
    return new_array
}

let arr_2 = [1,2,4,-2,-2,-1,6,5,-7]
let arr_3 = [2,3]

// console.log(Array.prototype.twoSum(arr_3))

// Hash Version
// This has linear run-time

Array.prototype.hashTwoSum = function(array) {
    let complements = {};
    new_arr = [];

    for (let i = 0; i < array.length; i++) {
        let ele = array[i];
        let complement = complements[0 - ele][0];
        let j = complements[0-ele][1];

        if (complement) {
            new_arr.push([i, j])
        }

        complements[ele] = [ele, j];
    }
    return new_arr;
}

// console.log(Array.prototype.twoSum(arr_2))

Array.prototype.myTranspose = function() {
    let transposedArray = [];
    
    // making nested skeleton array
    for (let i = 0; i < this.length; i++) {
        transposedArray.push([])
    }

    // transpose it
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
            transposedArray[j][i] = this[i][j]

        }
    }


    return transposedArray;
}

let barray = [[2,3], [5,7]];
let carray = [[2,3,4], [5,7,6], [1,0,1]];
let darray = [[2,2,4,5], [1,7,6,4], [1,0,1,3]]; // doesn't work for non-square array
console.log(carray.myTranspose());
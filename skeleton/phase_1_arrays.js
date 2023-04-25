
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

console.log(Array.prototype.twoSum(arr_3))

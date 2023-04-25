Array.prototype.myEach = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i])
    }
}

function addOne(num) {
    return num += 1
}

// console.log([1,2,3].myEach(addOn

Array.prototype.myMap = function(callback) {
    new_arr = []
    for(let i = 0; i < this.length; i++) {
        new_arr.push(callback(this[i]))
    }
    return new_arr
}

Array.prototype.myMap = function(func) {
    let new_arr = []

    // let method = function (el){
    //     new_arr.push(func(el))
    // }

    this.myEach(function (el){
        new_arr.push(func(el))
    })

    return new_arr
}

console.log([1,2,3,4,5].myMap(addOne))

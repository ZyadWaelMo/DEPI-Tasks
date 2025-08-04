// ! Question 1
function capitailizeWords(str) {
    return (str.split(" ").map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(" "))


}
console.log(capitailizeWords("hello world from depi"))

// ! Question 2

function mergeSortedArrays(arr1, arr2) {
    let arr3 = arr1.concat(arr2)
    for (let i = 0; i < arr3.length; i++) {
        for (let j = 0; j < (arr3.length - 1); j++) {
            if (arr3[j] > arr3[j + 1]) {
                let temp = arr3[j]
                arr3[j] = arr3[j + 1]
                arr3[j + 1] = temp

            }
        }
    }
    return arr3
}
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]))



// ! Question 3

function sumOfSquares(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i]

    }
    return sum
}

console.log(sumOfSquares([1, 2, 3, 4, 5]))

// ! Question 4

function filterArray(arr, callBack) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (callBack(arr[i])) {
            res.push(arr[i])
        }

    }
    return res
}
function isEven(n) {
    return n % 2 === 0
}


console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], isEven))

// ! Question 5

function mapArray(arrX, callBack2) {
    let resX = []
    for (let i = 0; i < arrX.length; i++) {
        let mapValue = callBack2(arrX[i])
        resX.push(mapValue)
    }


    return resX
}
function nSquare(num) {
    return num * num
}
console.log(mapArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], nSquare))


// ! Question 6
function reduceArray(arrY, callBack3, value) {

    let summation = value
    for (let i = 0; i < arrY.length; i++) {
        summation = callBack3(summation, arrY[i])
    }

    return summation

}
function add(x, y) {
    return x + y
}

console.log(reduceArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], add, 0))


// ! Question 7

function forEachArray(array, cBFN) {
    let resultedArr = []
    for (let i = 0; i < array.length; i++) {
        resultedArr.push(cBFN(array[i]))


    }
    return resultedArr

}
const double = n => 2 * n
console.log(forEachArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], double))

// ! Question 8

function findMax(arrayMax) {
    if (arrayMax.length === 0) {
        return "The array is empty"
    }
    let maxVal = arrayMax[0]
    for (let i = 0; i < arrayMax.length; i++) {
        if (arrayMax[i] > maxVal) {
            maxVal = arrayMax[i]
        }
    }
    return maxVal
}

console.log("Maximum value : ", findMax([98754, 2, 5, 78, 0]))
console.log("Maximum value : ", findMax([]))
console.log("Maximum value : ", findMax([-9, -65, -2, -75]))



// ! Question 9

function mergeObjects(obj1, obj2) {
    newObj = {}
    for (let key in obj1) {
        newObj[key] = obj1[key]
    }
    for (let key in obj2) {
        newObj[key] = obj2[key]
    }
    return newObj
}

let obj1 = {
    id: 1,
    name: "Zyad",
    age: 24,
    gender: "male",
    position: "Junior"
}
let obj2 = {
    number: 15,
    name: "Wael",
    college: "FCIS",
    phone: "222222222",
    position: "Senior"
}

console.log("Merged object : ", mergeObjects(obj1, obj2))


// ! Question 10

function invertObject(obj3) {
    let invertedObj = {}
    for (let key in obj3) {
        invertedObj[obj3[key]] = key
    }
    return invertedObj
}
let obj3 = {
    id: 1,
    name: "Zyad",
    age: 24,
    gender: "male",
    college: "FCIS",
    position: "Junior"
}
console.log("The original object : ", obj3)
console.log("The inverted object : ", invertObject(obj3))


// ! Question 11

function omitKeys(obj,keys){
    let res = {...obj}
    keys.forEach(key =>{
        delete res[key]
    })
    return res
}
let obj4 = {
    id: 1,
    name: "Zyad",
    age: 24,
    gender: "male",
    college: "FCIS",
    position: "Junior"
}
console.log("The original object : ", obj4)
console.log("The omitted object : ", omitKeys(obj4,['age','gender']))

// ! Question 12


function pickKeys(obj,keys){
    let picked = {}
    keys.forEach(key =>{
        picked[key] = obj[key]
    })
    return picked
}
let obj5 = {
    id: 1,
    name: "Zyad",
    age: 24,
    gender: "male",
    college: "FCIS",
    position: "Junior"
}
console.log("The original object : ", obj5)
console.log("The picked object : ", pickKeys(obj5,['age','gender']))



// ! Question 13

function reverseArray(array){
    let reversedArray = []
    for (let i = array.length-1; i >= 0 ; i--) {
        reversedArray.push(array[i])
        
    }
    return reversedArray
}
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// ! Question 14

function countOccurrences(array, value){
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (value === array[i]) {
            count++
        }
        
    }
    return count
}

console.log(countOccurrences([1, 2, 2, 4, 5, 6, 2, 8, 9, 2],2))

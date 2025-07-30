// Question 1
function varType(x) {
    return typeof(x)
}
console.log("The Variable type is :" + varType(5))
console.log("The Variable type is :" + varType("Zyad"))
console.log("The Variable type is :" + varType(true))
console.log("The Variable type is :" + varType(null))
console.log("The Variable type is :" + varType(undefined))


// Question 2 
function add(i, j) {

    return (`The result of addition is : ${i + j}`)
}
console.log(add(1, 5))

function sub(i, j) {

    return (`The result of subtraction is : ` + (i - j))
}
console.log(sub(6, 4))

function mult(i, j) {

    return (`The result of multiplication is : ` + (i * j))
}
console.log(mult(6, 5))

function div(i, j) {

    return (`The result of subtraction is : ` + (i / j))
}
console.log(div(10, 5))


// Question 3
function checkNan(a) {
        return Number.isNaN(a) ? "The value is NaN" : "The value is a number";

}
console.log(checkNan(9))
console.log(checkNan(NaN))
console.log(checkNan(0 / 0))
console.log(checkNan("hello"))
console.log(checkNan(123))
console.log(checkNan(undefined))




// Question 4

function oddOrEven(a) {
    if (a % 2 === 0) {
        return ("The number is even")
    } else {
        return ("The number is odd")
    }
}
console.log(oddOrEven(5))
console.log(oddOrEven(8))



// Question 5
function conc(v, n) {
    return (v + " " + n)

}

console.log(conc("Zyad", "Mario"))


// Question 6
function toUppercase(q) {
    const out = console.log(q.toUpperCase())
    return (out)
}
toUppercase("Hello from depi")


// Question 7

function getLetter(p, l) {
    p = "3m Ashraf"
    l = 6
    return (p[l])
}
console.log(getLetter())

// Question 8

function greet(d) {
    return ("Hello , " + d)
}
console.log(greet("Magdy"))



// Question 9
    function checking(a){
    if (a === null) {
        return ("The value is null")
    } else if (a === undefined) {
        return ("The value is undefined")
    } else {
        return (`The value is ${typeof(a)}`)
    }

}

console.log(checking(null))
console.log(checking(undefined))
console.log(checking(5))
console.log(checking("Hello"))


// Question 10

function rand(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);

}
console.log(rand(1, 10))
console.log(rand(10, 20))
console.log(rand(4, 5))
// Question 11

function checkN(x) {
    if (x > 0) {
        return ("The number is Positive")

    } else if (x < 0) {
        return ("The number is Negative")


    } else
        return ("The number is Zero")

}
console.log(checkN(9))
console.log(checkN(-6))
console.log(checkN(0))

// Question 12
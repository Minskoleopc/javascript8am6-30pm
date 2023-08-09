let  x = 10
console.log(x)
x = 100
console.log(x)

// program 2

const h = 10
console.log(h)
//h = 899

// Arithmetic operator
// + , - , * , / , %

let a = 10
let b = 5

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
//console.log(23 % 5)


let q  = 8 
let r = 4

console.log(q+r)
console.log(q-r)
console.log(q*r)
console.log(q/r)
console.log(q%r)


function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
Calculator(12,4)
Calculator(9,3)



// program 1

// function without parameter and without return type 
function addA(){
    console.log(9+9)
}
addA()
addA()
addA()
addA()
addA()

// function with parameter and without return type 
function addB(x,y){
    console.log(x+y)
}
addB(12,4)
addB(8,4)
addB(6,3)
addB(9,4)

// function with parameter and with return type 

function addC(x,y){
    return x + y
}
let q1 = addC(4,6)
console.log(q1)
console.log(q1+ q1)
console.log(q1 * 0.10)
console.log(q1 + 3)

// 3 different ways to write function 


// function declaration



function sub(x,y){
    return x - y
}
let q2 = sub(12,3)
console.log(q2)


// function expression 
let subB = function(x,y){
    return x - y
}
let q3 = subB(18,9)
console.log(q3)

// arrow function

let subC = (x,y)=>{
    return x - y
}
let q4 = subC(18,9)
console.log(q4)






























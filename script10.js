
// for(intialization ; conditionCheck ; increment/decrement){
//     // statements
// }

// intiliazation 

//while(){
// statements 
// increment/ decrement
//}

// program 1
let i1 = 1
while (i1 <= 3) {
    console.log("hello") // "hello" , "hello" , "hello"
    i1++ // 2 // 3 // 4
}

// program 2

let i2 = 1
while (i2 <= 3) {
    console.log(i2)
    i2++
}

// program 3
let i3 = 1
while (i3 <= 5) {
    console.log(i3)
    i3++
}

// program 4
let i4 = 5
while (i4 >= 1) {
    console.log(i4) // 5 // 4 // 3 // 2 // 1
    i4-- // 4 // 3 // 2 // 1 // 0
}

// program 5 

let i5 = 2
while (i5 <= 20) {
    console.log(i5)
    i5 = i5 + 2
}

// program 6
// 50 45 40 35 30 25 20 15 10 5
let i6 = 50
while (i6 >= 5) {
    console.log(i6)
    i6 = i6 - 5 // 0
}


// program 7
// while loop with break statement
let i7 = 1
while (i7 <= 5) {
    if (i7 == 3) {
        break
    }
    console.log(i7) //1 // 2
    i7++ // 2 // 3
}

// program 8
let i8 = 5
while (i8 >= 1) {
    console.log(i8) // 5 // 4 // 3
    if (i8 == 3) {
        break
    }
    i8-- // 4 // 3
}

// program 9

let i9 = 1
while (i9 <= 5) {
    if (i9 == 3) {
        i9 ++  // 4
        continue
    }
    console.log(i9)  // 1 //2 // 4 // 5
    i9++  // 2 // 3 // 5 // 6
}





















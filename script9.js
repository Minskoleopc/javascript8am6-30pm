


// for(intilization; conditionCheck ; increment/decrement){
//     // statements
// }


// intialization
// while(condition){
//     // statements 
//     // increment / decrement
// }


// program 1
// print "hello"  3 tyms 
let i = 1 
while(i <= 3){
    console.log("hello")  // "hello" , "hello" , "hello"
    i ++ ; // 2 // 3 // 4
}


// program 2
// print 1 to 3 
let i1 = 1
while(i1 <= 3){
    console.log(i1) // 1 // 2 // 3
    i1 ++ // 2 // 3 // 4
}

// program 3
// print 5 to 1
let i2 = 5
while(i2 >= 1){
    console.log(i2) // 5 // 4 // 3 // 2 //1
    i2 --; // 4 // 3 // 2 // 1 //0 
}

// program 4
// table of 2

let i3 = 2
while(i3 <= 20){
    console.log(i3) // 2 /// 4 // 6 // 8 -------- 20
    i3 = i3 + 2   // 4 // 6 // 8 // 10 ------------20 // 22
}

// program 5
let i4 = 50
while(i4 >= 5){
    console.log(i4) // 50 // 45  ---------- 5
    i4 = i4 - 5 // 45  // 40 ----------------5 // 0
}


// break statement with  while
let  i5 = 1
while(i5 <= 5){
    if(i5  == 3){
        break
    }
    console.log(i5) // 1 // 2
    i5 ++ // 2 // 3
}


let  i6 = 1
while(i6 <= 5){
    console.log(i6)  // 1 // 2 //3
    if(i6  == 3){
        break
    }
    i6 ++  // 2 // 3
}

let i7 = 1
while(i7 <= 5){
    if(i7 == 3){
        i7 ++ // 4
        continue
    }
    console.log(i7)  // 1 // 2 // 4 // 5
    i7 ++  // 2 // 3 // 5 // 6
}


























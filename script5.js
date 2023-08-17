// conditional statement 

//one  input  and multiple outcome

// numT > 0 && numT <= 5  -------> 10 % discount
// numT > 5 && numT <= 10 -------> 20 % discount
// numT > 10              -------> 30 % discount

let numT = 17
// if(condition){
//     // statement
// }
if(numT > 0 && numT <= 5){
    console.log("5 % discount")
}
if(numT > 5 && numT <= 10){
    console.log("10 % discount")
}
if(numT > 10){
    console.log("20 % discount")
}


// program 2

let numT2 = -17

if(numT2 > 0 &&  numT2 <= 5){
    console.log("5 % discount")
}
else if(numT2 > 5 &&  numT2 <= 10){
    console.log("10 % discount")
}
else if(numT2 > 10){
    console.log("20 % discount")
}
else {
    console.log("incorrect input")
}

// program 3

let marks = 56
// if(marks > 90){
//     console.log("Grade A")
// }
// if(marks > 75){
//     console.log("Grade B")
// }
// if(marks > 65){
//     console.log("Grade C")
// }


// program 4

if(marks > 90){
    console.log("Grade A")
}
else if(marks > 75){
    console.log("Grade B")
}
else if(marks > 65){
    console.log("Grade C")
}
else {
    console.log("Fail")
}













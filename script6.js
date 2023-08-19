// conditional statements 
// one input and multiple output --- conditional statements 

// numT > 0 && numT <=5     --- 10 % discount
// numT > 5 && numT <= 10   --- 20 % discount 
// numT > 10                --- 30 % discount

let numT  = -17

// if(numT > 0 && numT <= 5){
//     console.log("10 % discount")
// }
// if(numT > 5 && numT <= 10){
//     console.log("20 % discount")
// }
// if(numT > 10){
//     console.log("30 % discount")
// }


// if(numT > 0 && numT <= 5){
//     console.log("10 % discount")
// }
// else if(numT > 5 && numT <= 10){
//     console.log("20 % discount")
// }
// else if(numT > 10){
//     console.log("30 % discount")
// }
// else {
//     console.log('incorect input')
// }

// program 2


let marks = 56

// if(marks > 90){
//     console.log("graded A")
// }
// if(marks > 75){
//     console.log("graded B")
// }
// if(marks > 65){
//     console.log("graded C")
// }

// if(marks > 90){
//     console.log("graded A")
// }
// else if(marks > 75){
//     console.log("graded B")
// }
// else if(marks > 65){
//     console.log("graded C")
// }
// else {
//     console.log("Fail try again")
// }

// program 3

let s = 10
let t = 5
if(s > t){
    console.log("s is greater")
}
else {
    console.log("t is greater")
}
s > t ? console.log("s is greater"):console.log("t is greater")

let age = 17
let q1 =age >= 18 ? "can drive":"cannot drive"
console.log(q1)


// program 5 

let a = 10
let b = 50
let c = 300

if(a > b && a > c){
    console.log("a is greater")
}
else if (b > a  && b > c){
    console.log("b is greater")
}
else {
    console.log("c is greater")
}

// program 6
// switch without break statement

let city = "indore"
switch(city){
    case 'pune':
        console.log("MH")
    case 'jaipur':
        console.log("RJ")
    case 'lucknow':
        console.log("UP")
    case 'indore':
        console.log("MP")
    default:
        console.log("Incorrect city name")
}

// program 7 switch with break statement 
let city2 = "indore"
switch(city2){
    case 'pune':
        console.log("MH")
        break
    case 'jaipur':
        console.log("RJ")
        break
    case 'lucknow':
        console.log("UP")
        break
    case 'indore':
        console.log("MP")
        break
    default:
        console.log("Incorrect city name")
}

// program 8

let city3 = "bhoccpal"
switch(city3){
    case "pune":
    case "nagpur":
        console.log("MH")
        break

    case "jaipur":
    case "udaipur":
        console.log("RJ")
        break
    case "indore":
    case "bhopal":
        console.log("MP")
        break
    case "lucknow":
    case "varanasi":
        console.log("UP")
        break
    default:
        console.log("incorrect city name")
}

































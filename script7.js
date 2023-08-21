

// for loop

// for(intialization ; condition ; increment/decrement){
//     // statements
// }

// print  hello 3 times 
// print 1
for (let i = 1; i <= 3; i++) { // 2 // 3 // 4
    console.log("hello") //"hello" , "hello" , "hello"
}

// print 1 to 3 times
for (let i = 1; i <= 3; i++) { // 2 // 3 // 4
    console.log(i) // 1 // 2 // 3
}

// print 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i)
}

// print 5 to 1
for (let i = 5; i >= 1; i--) { // 4 // 3 // 2 // 1 // 0
    console.log(i) // 5 // 4 // 3 // 2 // 1
}
// table of two 

for (let i = 2; i <= 20; i = i + 2) {
    console.log(i)
}

// table of 5 in reverse
for (let i = 50; i >= 5; i = i - 5) {
    console.log(i)
}

// break

for (let i = 1; i <= 5; i++) { // 2 // 3
    if (i == 3) {
        break
    }
    console.log(i) // 1 // 2
}


for (let i = 1; i <= 5; i++) {  //  2 // 3
    console.log(i)  // 1 // 2 //3
    if (i == 3) {
        break
    }
}


for (let i = 5; i >= 1; i--) { // 4 // 3
    if (i == 3) {
        break
    }
    console.log(i) // 5 // 4
}


// continue with for 
for(let i = 0 ; i <= 5 ; i++){ // 1 // 2 // 3 // 4 // 5 // 6
    if(i == 3){
        continue
    }
    console.log(i) // 0 // 1 // 2 // 4 // 5
}

// while loop
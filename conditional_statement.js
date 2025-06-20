
// Conditional Statement ---

// if_else statement 

// let age = 23;

// if( age >= 18){
//     console.log("You can vote");
    
// } else{
//     console.log("You cannot vote");
    
// }

// Output --> You can vote

// 2)  If...else if....else statement.

// let marks = 66;

// if( marks >= 90){
//     console.log("Grade A");
    
// }else if(marks >= 75){
//     console.log("Grade B");
    
// }else if(marks >= 50){
//     console.log("Grade C");
    
// }else{
//     console.log("Grade D");
    
// }


// 3) Switch Case Statement -----

// let num = 5;

// switch (num) {
//     case 1: console.log("Monday");
//         break;
//     case 2: console.log("Tuesday");
//         break;
//      case 3: console.log("Webnesday");
//         break;
//     case 4: console.log("Thursday");
//         break;
//     case 5: console.log("Friday");
//         break;
//     case 6: console.log("Saturday");
//         break;
//     default: console.log("Sunday");
//         break;
// }

// ----------------------------------------->

//   Questions -->

// 1) Write a program to check whether a number is even or odd.

// let num = 77;

// if (num % 2 === 0){
//     console.log("Even");
    
// }else{
//     console.log("Odd");
    
// }


// 2) Take a number and check if it is positive, negative, or zero.

// let num = -7;

// if(num > 0){
//     console.log('Positve');
    
// } else if(num < 0){
//     console.log('Negative');
    
// } else {
//     console.log('Zero');
    
// }



// 3) Take two numbers and print which one is greater.

// let a = 54;
// let b = 78;

// if( a > b){
//     console.log("a is greater");
    
// }else if(b > a){
//     console.log("b is greater");
    
// }else{
//     console.log('Both are equal');
    
// }



// 4) Take three numbers and find the largest among them using nested if.

// let a = 56;
// let b = 87;
// let c =  13;

// if ( a >= b && a >= c){
//     console.log("a is largest number");
    
// }else if(b >= a && b >= c){
//     console.log("b is a largest number");
    
// }else{
//     console.log("c is a largest numebr");
    
// }


// 5) Write a program to check whether a given year is a leap year or not.



// 6) Grade System 
/* Take marks (0–100) and print:
  A for 90–100
  B for 80–89
  C for 70–79
  D for 60–69
  F for < 60 */


let marks = 58;
let i = marks;

if( i >= 90){
  console.log('A');
  
} else if(i >= 80){
  console.log('B');
  
}else if( i >= 70){
  console.log('C');
  
}else if(i >= 60){
  console.log('D');
  
}else{
  console.log('F');
  
}


// 7)  Vowel or Consonant
//  Take a character input and check whether it is a vowel or consonant.

let char = "h"

if( char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
  console.log(char,"is a Vowel");
  
}else{
  console.log(char,"is a Consonant");
  
}


// 8)  Check Divisible by 5 and 11
// Take a number and check if it's divisible by both 5 and 11.

let num = 55;

if( num % 5 === 0 && num % 11 === 0){
  console.log("Divisible by both 5 and 11.");
  
}else{
  console.log("Not divisible by both");
  
}


// 9) Check for Alphabet
// Check whether the given character is an alphabet or not.

let character = "r"

if(character >= "A" && character <= "Z" || character >= "a" && character <= "z"){
  console.log("this is an alphabet");
  
}else{
  console.log("this is not an alphabet");
  
}

// 10) Simple Calculator
// Take two numbers and an operator (+, -, *, /) and perform the operation using conditional statements.

let num1 = 10;
let num2 = 5;
let operator = "*";

if (operator === "+") {
  console.log(num1 + num2);
} else if (operator === "-") {
  console.log(num1 - num2);
} else if (operator === "*") {
  console.log(num1 * num2);
} else if (operator === "/") {
  console.log(num1 / num2);
} else {
  console.log("Invalid operator");
}































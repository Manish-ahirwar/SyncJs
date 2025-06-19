// if else conditional statements

// if(10>15){
//     console.log("hey");
    
// }else{
//     console.log("bye");
    
// }

// let name = prompt("Enter your name here")

// if(name === "admin"){
//     console.log("you are eligible for our system.");
    
// }else{
//     console.log("you are not eligible for our system.");
    
// }



// let name = prompt("Enter your name here")
// let age = prompt("Enter your age")

// if( age >=18){
//     console.log("Hey",name,"you are able to vote.");
    
// }else{
//     console.log("Hey",name,"you are not able to vote but you can vote after", 18 - age, "years");
    
// }



// let age = Number(prompt("Enter your age here"));

// if(age>=50){
//     console.log("senior citizen");

// }else if(age>=20){
//     console.log("adult");
    
// }else if(age>=10){
//     console.log("teenager");
    
// }else{
//     console.log("children");
    
// }



// Grading system -------


let Hindi = Number(prompt("Enter your obtained marks in Hindi"))
let English = Number(prompt("Enter your obtained marks in English"))
let Chemistry = Number(prompt("Enter your obtained marks in English"))
let Maths = Number(prompt("Enter your obtained marks in Maths"))
let Physics = Number(prompt("Enter your obtained marks in Physics"))

let marks = (Hindi + English + Chemistry + Maths + Physics);
let percentage = (marks/500)*100;

console.log("your total marks is", marks);
console.log("your percentage is", percentage);



if(percentage>=90){
    console.log("Your grade is A+");
    
}else if(percentage>=75){
    console.log("Your grade is A");
    
}else if(percentage>=50){
    console.log("your grade is B");
    
}else if(percentage>=33){
    console.log("your grade is D");
    
}else{
    console.log("You are failed");
    
}
    





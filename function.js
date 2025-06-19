
// function is a block of code that is build to reuse our code agan and again.
// details fuction ---------- (ES 5 fun)
function name(){
    console.log("This is manish from ghaziabad");
    console.log("Hello World!");
    console.log("hELLO WORLD");

    
    
    
}

name()
name()

// type of function with parameters
// num = parameter
// 30 = argument

function sum(num){
    console.log(num+num);

    
}

sum(30)

// Return Function  / return statement should be the last statement. you have to console the function.

function a(num){
    return num*num;
}
console.log(a(10));


// fat arrow function ES6 Latest function.

let abc = () => {
    return "Hello World";
};

console.log(abc());


// Anomnymouss function

// Reverse a string -----

function reversestr(str){
    let Reversed = "";
    for(let i = str.length - 1; i >= 0; i--){
        Reversed = Reversed + str[i]
    }
    console.log(Reversed);
    
}

reversestr("Manish")
reversestr("Hello")
reversestr("College")


// fabinacci series ----

function series(num){
    let a = 0;
    let b = 1;
    console.log(a);
    console.log(b);

    for( let i = 2; i <= num; i++){
        let c = a + b;
        console.log(c);
        a = b;
        b = c;
        
    }
    
    
}

series(10)


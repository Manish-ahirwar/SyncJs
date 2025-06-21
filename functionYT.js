//  function in js -------->

function myName(){
    console.log('Manish');
    
}

myName()  // function call to execute function code.

//--------------------------------------------------------------
function printCounting(){
    for(i = 1; i<= 100; i++){
        console.log(i);
        
    }
}

printCounting()
//-------------------------------------------------------------------

function getAverage(num1,num2){
    let ave = (num1 + num2)/2;
    console.log(ave);
    
}

getAverage(3,7)
//-----------------------

function getMyName(firstName,lastName){
    let fullName = firstName + " " + lastName;
    return fullName;
    //unreable statements
}

getMyName("Manish", "Ahirwar");

let fullName = getMyName("Manish", "Ahirwar");
console.log(fullName);

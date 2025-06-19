//  arraay in js 
//  collection of similar of different kind of data it is called array.
// kisi bhi type ka data store kara saktey hai. 

// let arr =  [10,3.5, "srign123", true, false, null, undefined,];
// console.log(arr);



// Array methods- 
//  Push , pop, shift, unshift

// arr.pop()
// arr.pop()
// console.log(arr);

// arr.shift(2,5,6)  -> remove form start 
// arr.unshift(5,10,20) -> adding form start
// console.log(arr);


// console.log(arr.join("❤️")); 


// Concatination of two arrys

// let arr1 = [10,20,30,40,50];
// let arr2 = [60,70,80,90,100];

// let newarr = arr1.concat(arr2);

// console.log(newarr);

// let arr3 = [99,89.45,78,68];


// Slice and Splice 

// let arr4 = [10,20,30,40,50,60,]
// let arr5 = [87,68,78,5,78];

//  arr4.splice(1,3,600)
// console.log(arr4);


// let arr6 = [10,20,30,40,50];

// for( i= 0; i < arr5.length; i++){
//     console.log(arr[i]);
    
// }

// let arr7 = [67,78,78,64,89,65]
// let sum = 0;
// for( let i= 0; i< arr7.length;  i++){
//     sum = sum + arr7[i];
// }

// console.log(sum);

// -----------------------------------------------------

// Count even and odd number


// let even = [12,5,6,8,9,4,89,55,44,12,54,88,]
// let counteven = 0;
// let countodd = 0;

// for( let i = 0; i < even.length; i++){
//     if(arr[i]%2 === 0){
//         counteven =  counteven + 1;

//     }else{
//         countodd = countodd + 1;
//     }
// }

// console.log("count of even number", counteven);
// console.log("count of add number", countodd);

// ----------------------------------------

// Reverse a array 

// let array = [34,65,75,10,79,66,79,35,10,68,78,89,]
// let reversed = []

// for( let i = array.length - 1; i >= 0; i--){
//     reversed.push(array[i]);
// }

// console.log(reversed);

// -------------------------------------------------------
// Find miximum value  of an array

// let arr9 = [45,65,19,96,89,98,1,34,22,34,6,9,99]
// let max = arr9[0];

// for(let i = 0; i < arr9.length; i++){
//     if(arr9[i] > max){
//         max = arr9[i];
//     }
// }

// console.log(max);

// ------------------------------------------
// Max and min value of an array

// let num = [2,4,5,6,,79,54,44,23,24]
// let max = [0];
// let min = [0];

// for(let i = 0; i < num.length; i++){
//     if(num[i] > max ){
//         max = num[i];
//     }else if(num[i] < min){
//         min = num[i];
//     }
// }

// console.log(max);
// console.log(min);


// ---------------------------------------

//  Duplicates in an array --

// let arr = [10,10,20,40,60,40,10,20,40]
// let uniquearr = [];

// for(let i = 0; i < arr.length; i++){
//     var isduplicate = false;
//     for(let j = 0; j < uniquearr.length; j++){
//         if(arr[i] === uniquearr[j]){
//             isduplicate = true;
//             break;
//         }

//     }
//     if(!isduplicate){
//         uniquearr.push(arr[i])
//         // 10, 20,
//     }
// }

// console.log(isduplicate);
// console.log(uniquearr);

// ----------------------------


// Sum of position number

// let arr = [2,5,-2,-6,4,-9,7]
// let sum = 0;

// for (i = 0; i< arr.length; i++){
//     if( arr[i] > 0){
//         sum = sum + arr[i]
//     }
        
// }

// console.log("Sum of positive number of given array =", sum);

// -------------------------------------------------------------

let arr = [10,20,6,6,6,6,6,67,6,34,23,6,2,6,6,8,9,]
let target = 6;
let count = 0;

for( i = 0; i < arr.length; i++){
    if(arr[i] === target){
        count = count + 1;
    }
}

console.log("6 appears",count, "times");
// ------------------------------------------------------------

// Most feqruently value of an array --- Home Work
























 





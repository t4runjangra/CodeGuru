// 1. Profile Builder 
let fullName = "Tarun Jangra";
let age = 19;
let currentSemester = 3;
let hasLaptop = true;
let attendance = 85;

console.log(
    fullName + " is " + age + " years old and currently in semester " +
    currentSemester + ". He has a laptop: " + hasLaptop +
    " and his average attendance is " + attendance + "%."
);

// 2. Fix the Errors 

let city = "Delhi"; //String
let graduationYear = 2027; //Number
let isHosteller = true; //Boolean
let cgpa = 8.5;  //Number (float)
let student = {
    course: "BSc",
    collegeName: "Govt College"
}; //Object 


// 3. Swap THe Values 

let firstName = "Arjun";
let lastName = "Reddy";

let temp = firstName;
firstName = lastName;
lastName = temp;

console.log("First Name:", firstName); //First Name: Reddy
console.log("Last Name:", lastName); //Last Name: Arjun

// 4. Valid or Invalid?

// let 123name = "Ravi";      // Invalid
// let $amount = 2000;        // Valid
// let var = "keyword";       // Invalid
// let is-Eligible = true;    // Invalid
// let homeTown = "Chennai";  // Valid

//Correctioms: 
let name123 = "Ravi";
let keywordValue = "keyword";
let isEligible = true;


// ********************************************Section 2 *************************************

// 1. Predict the Output
console.log('20' + '5' + 3); //2053   String concatenation happens from left to right.

console.log(4 + '6' + 2); //462 4 + '6' becomes "46", then "46" + 2 becomes "462"
 
console.log('8' * 2 + '2'); //162  '8' * 2 = 16, then 16 + '2' = "162"

console.log('7' + 2 * 3); //76 2 * 3 = 6, then '7' + 6 = "76"

// 2. Implicit vs Explicit Conversion 
 
console.log("10" + 5); //105 

console.log("10" * 5); //50 

// 3. Mix Data Types 
let a = "5";
let b = 2;
let c = true;

console.log(a + b + c); //52true

console.log(Number(a) + b + c); //8 

console.log(a + c); //5true

console.log(a * (b + c)); //15 
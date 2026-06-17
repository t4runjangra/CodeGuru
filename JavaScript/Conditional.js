// JavaScript Conditional Statements Assignment

//  1. Find Maximum Between Three Distinct Numbers

let a = 10;
let b = 25;
let c = 15;

if (a > b && a > c) {
    console.log(a + " is the largest number");
} else if (b > a && b > c) {
    console.log(b + " is the largest number");
} else {
    console.log(c + " is the largest number");
}


// 2. Check Whether a Year is Leap Year or Not

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is not a Leap Year");
}


//  3. Check Whether a Number is Even or Odd

let num = 17;

if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}


// 4. Check Whether a Character is an Alphabet, Digit, or Special Character

let ch = "@";

if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')) {
    console.log(ch + " is an Alphabet");
} else if (ch >= '0' && ch <= '9') {
    console.log(ch + " is a Digit");
} else {
    console.log(ch + " is a Special Character");
}



// #5. Check Whether Three Angles Make a Triangle

let angle1 = 60;
let angle2 = 60;
let angle3 = 60;

if (angle1 + angle2 + angle3 === 180) {
    console.log("The angles form a Triangle");
} else {
    console.log("The angles do not form a Triangle");
}

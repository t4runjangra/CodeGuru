//  Section 1: Comparison & Type Coercion
// 1 Predict the output and explain the reasoning (Without running the code)


// console.log("9" > "100");    true
// Reason: Both are strings, so JavaScript compares them lexicographically(dictionary order). "9" comes after "1"

// console.log(9 > "100"); false
// Reason: "100" is converted to number 100. 9 > 100 is false.

// console.log("5" == 5 && "5" === 5); false
// Reason: "5" == 5 is true, but "5" === 5 is false. Therefore true && false = false

// console.log(null == 0); false

// console.log(undefined == null); true



// Assignment & Comparison Logic
// 2. What is the main difference between these two statements?

// a+= b   =>  a=a+b ,  a=1, b=2   a=1+2=3, a=3,

// a=+ b   => a=+2



// A) Both perform addition
// B) a =+ b subtracts b
// C) a =+ b assigns positive b to a
// D) Both are invalid

// C will be correct here  C) a =+ b assigns positive b to a

// 3. What will be the output?

// let a = 5;

// console.log(a == "5");



// A) true
// B) false
// C) Error
// D) undefined

//a true


// 4. What is the output?

// let b = 5;

// console.log(b === "5");



// A) true
// B) false
// C) Error
// D) undefined

// b  false

// 5. What will this print?.

// console.log("12" > "2");



// A) true
// B) false
// C) Error
// D) NaN

//b false

// 6. What is the result?

// console.log(5 > "hello");// 5>”nbvcc” = nan=> not a number

//          5>nan= false

// A) true
// B) false
// C) NaN
// D) Error


// B) false

// Reason: Number("hello") // NaN  5 > NaN // false


//  Section 2: Logical Operators
// 1 Predict the output

// console.log(0 && "hello");//logical operators
//Output 0
// console.log("world" || 0);
//Output "world"

// console.log(null || undefined && "JS");

//Output undefined

// console.log(" " && 55 && [] && "done");

//Output Done

// 2. What will be printed?

// console.log(true && false);

// A) true
// B) false
// C) undefined
// D) Error

// B false
// 3. Predict the output

// let isAdmin = false;

// let isOwner = true;

// console.log(isAdmin || isOwner);



// A) true
// B) false
// C) undefined
// D) Error

// A true
// 4. What is the output?

// let loggedIn = true;

// console.log(!loggedIn);



// A) true
// B) false
// C) undefined
// D) Error

// b false

// 5. What will this return?

// console.log(100 && 40 && undefined && 15);



// A) 15
// B) undefined
// C) false
// D) 100

// b undefined


// 6. What is the output?

// console.log("" || "7");



// A) ""
// B) 7
// C) "7"
// D) false

// c "7"



//  Section 3: Assignment & Bitwise Operators & |
// 1 Rewrite using shorthand operators 
// let x = 10; 
// x = x + 5; 
// x = x - 3;
// x = x * 2;


let x = 10;

x += 5;
x -= 3;
x *= 2;



// 2 Predict the final values
// let p = 7;  in binary 0111
// let q = 12; in binary 1100
// let r = 5;  in binary 0101

// p = p & r;    p = 0111 & 0101 = 0101 = 5
// q = q | r;    q = 1100 | 0101 = 1101 = 13
// r = r ^ p;    r = 0101 ^ 0101 = 0000 = 0




// console.log(p, q, r);
// 5 13 0
//  Expression & Logical Thinking
// 3. Predict the output

// let a = 4, b = "6", c = 2;
// console.log(a + b * c);

// 4+”6”*2=4+12=16

// A) 16
// B) 20
// C) "46"
// D) "162"


// 4 + ("6" * 2)
// 4 + 12
// 16

// A) 16


// 4. What will be printed?

// console.log((a + b) * c);
// 4+”6”=”46”*2=92

// A) 92//u
// B) 16//af, a
// C) "92"//z
// D) Error

// (4 + "6") * 2
// "46" * 2
// 92

// a 92 

// 5. What is the output?

// console.log(a++ + --c + b);

//a++  a=3   3=>4

//++a  3=>4 4

// A) 12
// B) "56"
// C) 96
// D) Error


// B) "56"

// 6. Which operator stops at the first falsy value?
// A) ||
// B) &&
// C) !
// D) ==

// B && 
// 7. What is the output?

// console.log(" " && 55 && [] && "done");



// A) ""
// B) 55
// C) []
// D) "done"

// D "done"
// 8. What is the final output?

// let p = 7, r = 5;

// console.log(p & r);



// A) 2
// B) 5
// C) 7
// D) 0

// B "56"
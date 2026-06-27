function calculateArea(length, breadth) {
    return length * breadth;
}

function isProfitable(revenue, expenses) {
    return revenue > expenses;
}

function checkCharacter(char) {
    if (char >= "A" && char <= "Z") {
        return "Capital letter";
    } else if (char >= "a" && char <= "z") {
        return "Small letter";
    } else {
        return "Not a letter";
    }
}

function checkType(value) {
    return typeof value === "number" ? "number" : "string";
}

function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function getType(value) {
    return typeof value;
}

function triangleArea(base, height) {
    return (base * height) / 2;
}

function findGreater(a, b) {
    return a > b ? a : b;
}

function printFunctionName() {
    return "printFunctionName";
}

const greetUser = (name = "Guest") => {
    return `Hello, ${name}!`;
};

const isEven = (num) => {
    return num % 2 === 0;
};

function performOperation(a, b, operation) {
    return operation(a, b);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

export default {
    calculateArea,
    isProfitable,
    checkCharacter,
    checkType,
    isPrime,
    getType,
    triangleArea,
    findGreater,
    printFunctionName,
    greetUser,
    isEven,
    performOperation,
    add,
    subtract,
    multiply
};
function fizzBuzz(limit) {
    let result = [];

    for (let i = 1; i <= limit; i++) {
        let str = "";

        if (i % 3 === 0) str += "Fizz";
        if (i % 5 === 0) str += "Buzz";

        result.push(str || i);
    }

    return result;
}

function calculateGCD(num1, num2) {
    let gcd = 1;

    for (let i = 1; i <= Math.min(num1, num2); i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            gcd = i;
        }
    }

    return gcd;
}

function sumOfMultiples(limit) {
    let sum = 0;

    for (let i = 1; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return sum;
}

function pattern1() {
    let output = "";

    for (let i = 5; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            output += "*";
            if (j !== i) output += " ";
        }
        if (i !== 1) output += "\n";
    }

    return output;
}

function pattern2() {
    let output = "";
    let num = 1;

    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= i; j++) {
            output += num++;
            if (j !== i) output += "  ";
        }
        if (i !== 5) output += "\n";
    }

    return output;
}

function pattern3() {
    let output = "";
    let num = 1;

    for (let i = 5; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            output += num++;
            if (j !== i) output += " ";
        }
        if (i !== 1) output += "\n";
    }

    return output;
}

function pattern5() {
    let output = "";

    for (let i = 0; i < 5; i++) {
        let ones = 4 - i;
        let stars = 1 + (2 * i);

        output += "1".repeat(ones);
        output += "*".repeat(stars);
        output += "1".repeat(ones);

        if (i !== 4) output += "\n";
    }

    return output;
}

function pattern6() {
    let output = "";

    for (let i = 1; i <= 5; i++) {
        output += " ".repeat(5 - i);
        output += "*".repeat(2 * i - 1);

        if (i !== 5) output += "\n";
    }

    return output;
}

function advancedLoop(limit) {
    let result = [];

    for (let i = 1; i <= limit; i++) {
        let str = "";

        if (i % 2 === 0) str += "Foo";
        if (i % 3 === 0) str += "Fizz";
        if (i % 5 === 0) str += "Buzz";
        if (i % 7 === 0) str += "Bar";

        result.push(str || i);
    }

    return result;
}

function task1() {
    let output = "";

    for (let i = 1; i <= 10; i++) {
        output += "Hello World";
        if (i !== 10) output += "\n";
    }

    return output;
}

function task2() {
    return [10, 20, 30, 40, 50];
}

function task3() {
    return "ReferenceError";
}

function task4() {
    return 5;
}

function task5() {
    let output = "";

    for (let i = 1; i <= 10; i++) {
        output += `5 x ${i} = ${5 * i}`;
        if (i !== 10) output += "\n";
    }

    return output;
}

function task6() {
    return "*****";
}

function task7() {
    let output = "";

    for (let i = 1; i <= 4; i++) {
        output += "*".repeat(i);
        if (i !== 4) output += "\n";
    }

    return output;
}

function task8() {
    let output = "";

    for (let i = 1; i <= 4; i++) {
        output += "****";
        if (i !== 4) output += "\n";
    }

    return output;
}

function task9() {
    let output = "";

    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= i; j++) {
            output += j;
        }
        if (i !== 8) output += "\n";
    }

    return output;
}

function task10() {
    let output = "";

    for (let i = 1; i <= 9; i++) {
        for (let j = 9; j >= 10 - i; j--) {
            output += j;
        }
        if (i !== 9) output += "\n";
    }

    return output;
}

function task11() {
    let output = "";

    for (let i = 5; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            output += j;
        }
        if (i !== 1) output += "\n";
    }

    return output;
}

function task12() {
    let output = "";

    for (let i = 0; i < 5; i++) {
        output += " ";
        output += "1".repeat(4 - i);
        output += "8".repeat(i + 1);

        if (i !== 4) output += "\n";
    }

    return output;
}

function task13() {
    let output = "";
    let left = "";

    for (let i = 0; i <= 8; i++) {
        if (i > 0) {
            left += 10 - i;
        }

        let digit = 8 - i;
        let result = "8".repeat(i + 1);

        output += `${left || 0} * 9 + ${digit} = ${result}`;

        if (i !== 8) output += "\n";
    }

    return output;
}

function task14() {
    let output = "";
    let left = "";

    for (let i = 1; i <= 9; i++) {
        left += i;
        let result = "";

        for (let j = i; j >= 1; j--) {
            result += j;
        }

        output += `${left} x 8 + ${i} = ${result}`;

        if (i !== 9) output += "\n";
    }

    return output;
}

function task15() {
    let output = "";

    for (let i = 1; i <= 6; i++) {
        output += `${i} ${10 - i} ${(i - 1) * 2}`;

        if (i !== 6) output += "\n";
    }

    return output;
}
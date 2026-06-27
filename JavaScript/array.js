function arrayBasics() {
    let fruits = ["apple", "banana", "mango", "orange", "grape"];

    let secondFruit = fruits[1];
    let lastFruit = fruits[4];
    let length = fruits.length;

    fruits[2] = "NEW_FRUIT";

    return [secondFruit, lastFruit, length, fruits];
}

function arrayReferences() {
    let arr1 = [10, 20, 30, 40];

    let arr2 = arr1;
    arr2[1] = 99;

    let arr3 = arr1.slice();
    arr3[3] = 88;

    // arr1 and arr2 point to the same array, so both change.
    // arr3 is a shallow copy, so modifying it does not affect arr1.

    return [arr1, arr2, arr3];
}

function basicMethods() {
    let arr = [12, 15, 20, 25, 30];

    arr.push(35);
    let poppedValue = arr.pop();
    let indexOf20 = arr.indexOf(20);

    return [arr, poppedValue, indexOf20];
}

function extractMiddle() {
    let colors = ["red", "blue", "green", "yellow", "purple", "black"];

    let extracted = colors.slice(1, 4);

    return [extracted, colors];
}

function spliceItems() {
    let items = ["pen", "pencil", "eraser", "scale", "sharpener"];

    items.splice(2, 2, "marker", "ruler");

    return items;
}

function replaceScores() {
    let scores = [12, 25, 37, 48, 59, 63, 77];

    scores.splice(4, 3, 0, 0, 0);
    let part1 = scores.slice();

    scores.fill("N/A");
    let part2 = scores.slice();

    return [part1, part2];
}

function filterGreaterThan50() {
    let numbers = [11, 22, 35, 42, 59, 60, 73, 88];

    return numbers.filter(num => num >= 50);
}

function filterEven() {
    let numbers = [11, 22, 35, 42, 59, 60, 73, 88];

    return numbers.filter(function (num) {
        return num % 2 === 0;
    });
}

function flattenCube() {
    let cube = [
        [
            [1, 2, 3],
            [4, 5, 6]
        ],
        [
            [7, 8, 9],
            [10, 11, 12]
        ]
    ];

    return cube.flat(2);
}

export default {
    arrayBasics,
    arrayReferences,
    basicMethods,
    extractMiddle,
    spliceItems,
    replaceScores,
    filterGreaterThan50,
    filterEven,
    flattenCube
};
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.city);

console.log(typeof person);


// array
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log(arr);
console.log(arr[0]);
console.log(typeof arr);
console.log(Array.isArray(arr));

let mixedArray = [1, "two", true, { name: "John" }, [1, 2, 3]];
console.log(mixedArray);
console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);
console.log(mixedArray[3]);
console.log(mixedArray[4]);
console.log(typeof mixedArray);
console.log(Array.isArray(mixedArray));
console.log(mixedArray.length);

function sum(a, b) {
    return a + b;
}
console.log(sum(5, 10));


let divide = function (a, b) {
    return a / b;
}
console.log(divide(10, 2));

// arrow function

let multiply = (a, b) => a * b;
console.log(multiply(5, 10));

const greetUser = (name) => {
    return `Hello, ${name}!`;
}
console.log(greetUser("Alice"));


// map on array
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(num => num * 5);
console.log(squaredNumbers);
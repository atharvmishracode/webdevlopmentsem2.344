et students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 90 },
    { name: "Charlie", score: 78 }
];
let totalScore = students.reduce((acc, student) => acc + student.score, 0);
console.log(totalScore);

let marks = students.map(student => student.score);
console.log(marks);

let names = students.map(student => student.name);
console.log(names);

let topstudent = students.reduce((top, student) => top.score > student.score ? top : student);
console.log(topstudent);
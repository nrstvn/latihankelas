// rest parameter 
// parameter yang mewakili nilai yang diberikan

// const penjumlahanArray = (a,b,c,d) => {
//     let array = [a, b, c, d];
//     let total = 0;
//     array.forEach(item => {
//         total += item;
//     });
//     console.log(total);
// ;}

// penjumlahanArray(1, 2, 3, 4);

// REST PARAMETER 

// const penjumlahanArray = (...params) => {
    
//     let total = 0;
//     params.forEach(item => {
//         total += item;
//     });
//     console.log(total);
// ;}

// penjumlahanArray(1, 2, 3, 4);

// SPREAD OPERATOR

// let array1 = [1, 2, 3, 4, 5];

// console.log(...array1);

// //1. Duplikasi Array
// let array2 = [...array1];
// console.log(array2);
// array1.push(6);
// console.log(array2);

//2. menggabungkan Array
// let array1 = [1, 2, 3];
// let array2 = [5, 6, 7];
// let array3 = [8, 9, 10];

// let combineArray5 = [...array1, ...array2, ...array3];
// console.log(combineArray5);

// PADA OBJEK
// let john = {
//     fullName : "John Doe",
//     age: 33,
//     address: "Manado",
// };
// let student = { ...john};

// john = {
//     ...john,
//     job: "Teacher",
// };

// console.log(john);

// MENGGABUNGKAN OBJEK

// let obj1 = { a: 1, b: 2};
// let obj2 = { c: 3, d: 4};
// let combineObj = { ...obj1, ...obj2};

// console.log(combineObj);

// DESTRUCTURING

let orang = {
    nama: "Joko",
    umur: 18,
    sudahMenikah: false,
};

const {nama, umur,sudahMenikah};
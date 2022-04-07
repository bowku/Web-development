'use strict';

// let variableOne = 'hello';
// const variableTwo = 4;

// let aBoolean = false;

// let aNumber = 10;

// let aString = 'text123123@!!';

// let aBigInt = 99999999999999999n;

// console.log(aBigInt);

// let aSymbol = Symbol('description');

// let aNull = null;

// let aUndefined;

// console.log(aUndefined);
// console.log(typeof(undefined));

// let myObject = { 
//     key: 'value',
//     anotherKey : 12345
// }

// console.log(myObject.key);

// let string1 = '41 * 12 = ';
// let result1 = 41*12;
// console.log(string1+result1);


// let string2 = `42 * 13 = ${42 * 13}`;
// console.log(string2);


// let a;
// let b = "12345";
// let c = 12344;
// let d = true;
// let e = {a:"JavaScript"};

// typeof(a);
// typeof(b);
// typeof(c);
// typeof(d);

// let totalMoney = 4000;
// let moneyPaidSoFar = 2348;
// let totalLeftToPay = totalMoney - moneyPaidSoFar;

// console.log(`The total bill is £${totalMoney} the remaining amount of money to be paid is £${totalLeftToPay}`);

// let a = 1;
// let b = 2;

// a
// ++
// b

// console.log(`a = ${a}, b = ${b}`)

// let c = 1;
// let d = 2;

// c++;
// d;

// console.log(`c = ${c}, d = ${d}`);

// for (let i = 0; i < 5; i++) {
//     console.log(`i = ${i}`);
// }

// let condition = true;
// let increment = 0;

// while (condition) {
//     console.log(`increment me`);
//     increment++;
//     console.log(increment);
//     if (increment == 3) {
//         condition = false;
//     }
// }

// let a = false;

// do {
//     console.log(`we are running`);
// } while (a);

// let num = 5;

// switch (num) {
//     case 0:
//         console.log(`num = ${num}`);
//         break;
//     case 1:
//         console.log(`num = ${num}`);
//         break;
//     case 2:
//         console.log(`num = ${num}`);
//         break;
//     case 3:
//         console.log(`num = ${num}`);
//         break;
//     case 4:
//         console.log(`num = ${num}`);
//         break;
//     case 10:
//         console.log(`num = ${num}`);
//         break;
//     default:
//         console.log(`this is out of scope`);
// }

// for(let A=100; A<=200; A++){
//     console.log(A);
// }

// for (let A = 100; A <= 200; A++) {
//     if (A % 2 != 0) {
//         console.log("*");
//     } else {
//         console.log("-");
//     }
// }


// for (let i = 1; i <= 10; i++) {
//     if (i <= 10) {
//         console.log(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//         console.log(i);
//     }
// }




// let now = new Date(); 
// let day = now.getDay();

// switch (day) {
//     case 1:
//         console.log(`It's Monday`);

//     case 2:
//         console.log(`It's Tuesday`);

//     case 3:
//         console.log(`It's Wednesday`);

//     case 4:
//         console.log(`It's Thursday`);

//     case 5:
//         console.log(`It's Friday`);
//         console.log("It's a weekday!")
//         break

//     case 6:
//         console.log("It's Saturday");
//         break;
//     case 0:
//         console.log("It's Sunday");
//         break;
//     default:
//         console.log(`Invalid range`);
// }


// let x = 1;

// if (x == 1) {
//     console.log(`Hello`);
// } else {
//     console.log(`Goodbye!`)
// }

// x==1 ? console.log(`Hello`) : console.log(`Goodbye!`)


// let strictA = true;
// let strictB = 1;

// console.log(strictA == strictB);
// console.log(strictA === strictB);

// console.log(strictA != strictB);
// console.log(strictA !== strictB);

// let age = 100;

// if (age >= 18 && age <= 65) {
//     console.log("Satisfied");
// } else if (age < 18) {
//     console.log("Underage")
// } else {
//     console.log("Not satisfied")
// }

// let age = 60;

// age>=50 ? console.log("age above 50") : console.log("age below 50");

// let animal = new Object();
// console.log(typeof(animal));

// animal['name']=`clifford`;
// animal['type']=`dog`;
// animal['size']=`big`;

// console.log(animal);

// animal.colour = `red`;
// console.log(animal);

// let vehicle = { type: `bike`, seats: 1, wheels: 2 }

// // console.log(vehicle);

// let garage = [vehicle, { type: `car`, seats: 5, wheels: 4 }];

// console.log(garage);



// let x = [`a`,`b`,`c`,`d`,`e`];

// for(let i = 0 ; i<x.length ; i++){
//     console.log(x[i]);
// }


// for (let item of x){
//     console.log(item)
// }


// console.log(x.reverse());

// console.log(x.join(`, the next letter is `));


// let newJSON = {
//     name:`Mohamed`,
//     age: 27
// }

// let str = JSON.stringify(newJSON);

// console.log(newJSON);
// console.log(str);

// let person = JSON.parse(`{"name":"ellie","age":43}`);
// console.log(person);

// let darthVader = {"allegiance":"empire","weapon":"lightsabre","sith":true};

// console.log(darthVader);

// console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
// console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
// console.log(`Darth Vader is a sith? ${darthVader.sith}`);
// console.log(`Darth Vader is a Jedi? ${darthVader.sith ? "false" : "true"}`);

// let myArray = ["hello","everyone"];

// console.log(myArray.length);

// myArray.push("watermelon");

// myArray.shift();

// console.log(myArray);

// for(let i of myArray){
//     console.log(i);
// }

// function hello(message) {
//     console.log(message);
// }

// hello(`greetings!`)

// let bye = false;

// function goodbye() {
//     console.log(`goodbye`);
//     return bye = true;
// }

// console.log(bye)
// goodbye()
// console.log(bye)


// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(3,4));

// function log(data){
//     console.log(data);
// }

let log1 = data => console.log(data);

// log1("message1");


function subtract(num1,num2){
    return num1-num2;
}

// console.log(subtract(10,20));
log1(subtract(10,20));

function welcome(name,age,gender){
    console.log(`My name is ${name}, I am ${age} years old and of gender ${gender}`);
}

welcome("Mohamed",35,"Male");

let powerup = (n1,n2) =>  (n1**n2);

log1(powerup(2,3));
'use strict';

// for(let i=1; i<=100; i++){
//     console.log(i);
// }



// function fizzBuzz(num) {
//     if (num % 3 == 0 && num % 5 == 0) {
//         console.log("FizzBuzz");
//     } else if (num % 5 == 0) {
//         console.log("Buzz");
//     } else if (num % 3 == 0) {
//         console.log("Fizz");
//     } else {
//         console.log("Not a multiple of 3 or 5");
//     }
// }

// // fizzBuzz(15);
// // fizzBuzz(12);
// // fizzBuzz(20);
// // fizzBuzz(101);


// function fizzBuzzTernary(num) {
//     (num % 3 == 0 && num % 5 == 0) ? console.log("FizzBuzz") : (num % 3 == 0 ? console.log("Fizz") : (num % 5 == 0 ? console.log("Buzz") : console.log(num)));
// }

// fizzBuzzTernary(15);
// fizzBuzzTernary(12);
// fizzBuzzTernary(20);
// fizzBuzzTernary(101);
// fizzBuzzTernary(0);


// for (let i = 1; i <= 100; i++) {
//     fizzBuzzTernary(i);
// }

// function fizzBuzzTernary2() {
//     for (let num = 1; num <= 100; num++) {
//         (num % 3 == 0 && num % 5 == 0) ? console.log("FizzBuzz") : (num % 3 == 0 ? console.log("Fizz") : (num % 5 == 0 ? console.log("Buzz") : console.log(num)));
//     }

// }

// fizzBuzzTernary2();

// let foo = () => {
//     let bar = `hello world`;
//     console.log(bar)
// }

// foo();

// let log = data => {
//     console.log(data)
// };

// log(1);


// function dev(){
//     let x = "foo";
//     if(x=="foo"){
//         let y ="boo";
//         console.log(y);
//     } 
//     console.log(x);
// }

// dev();

// function doSomething() {
//     let a = 1;
//     console.log(a);
//     function foo() {
//       return 2;
//     }
//     console.log(foo());
//   }
//   doSomething();



import * as DOM from './dom.js';

let addToList = str => {
    let child = document.createElement(`text`);
    child.innerHTML = str;
    DOM.textOutput.appendChild(child);
}

DOM.textButton.onclick = () => addToList(DOM.textInput.value);


window.onload = function () {
    const heading = document.createElement("h1");
    const heading_text = document.createTextNode("Big head!");
    heading.appendChild(heading_text);
    document.body.appendChild(heading);
}

// let ele = document.querySelector("p");
// ele.style.color = "red";

// let eles = document.querySelectorAll('p');

let paras = document.querySelectorAll('p');
for (let p of paras) {
    p.style.color = 'blue';
    p.appendChild(document.createTextNode("and shut up"))
}

// let btn = document.querySelector('button');
// btn.onclick=foo;

// let pEle = document.createElement('p');
// let someText = document.createTextNode("Hello bro?")
// let someText2 = document.createTextNode("Michael Owen bro?")
// pEle.appendChild(someText);
// document.body.appendChild(pEle);

// let Ele = document.createElement('h1');
// pEle.removeChild(document.body.appendChild(pEle));

let img = document.createElement("strong");
img.textContent = "Michael Owen bro?"
document.body.appendChild(img);
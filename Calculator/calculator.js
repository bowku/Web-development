`use strict`

import * as DOM from './dom.js';

let calcType;
DOM.button_add.onclick = () => calcType = addinput1;
DOM.button_subtract.onclick = () => calcType = addinput2;
DOM.button_multiply.onclick = () => calcType = addinput3;
DOM.button_divide.onclick = () => calcType = addinput4;


let addinput1 = (input_1, input_2) => {
    let child = document.createElement(`li`);
    child.innerHTML = (`${input_1} + ${input_2} = ` + (Number(input_1) + Number(input_2)));
    child.classList.add(`list-group-item`);
    DOM.list_output.appendChild(child);
}

// DOM.button_add.onclick = () => addinput1(DOM.inputOne.value,DOM.inputTwo.value);
DOM.button_equals.onclick = () => calcType(DOM.inputOne.value, DOM.inputTwo.value);

let addinput2 = (input_1, input_2) => {
    let child = document.createElement(`li`);
    child.innerHTML = (`${input_1} - ${input_2} = ` + (Number(input_1) - Number(input_2)));
    child.classList.add(`list-group-item`);
    DOM.list_output.appendChild(child);
}

// DOM.button_subtract.onclick = () => addinput2(DOM.inputOne.value, DOM.inputTwo.value);
// DOM.button_equals.onclick = () => calcType(DOM.inputOne.value, DOM.inputTwo.value);

let addinput3 = (input_1, input_2) => {
    let child = document.createElement(`li`);
    child.innerHTML = (`${input_1} * ${input_2} = ` + input_1 * input_2);
    child.classList.add(`list-group-item`);
    DOM.list_output.appendChild(child);
}

// DOM.button_multiply.onclick = () => addinput3(DOM.inputOne.value, DOM.inputTwo.value);
// DOM.button_equals.onclick = () => calcType(DOM.inputOne.value, DOM.inputTwo.value);

let addinput4 = (input_1, input_2) => {
    let child = document.createElement(`li`);
    child.innerHTML = (`${input_1} / ${input_2} = ` + input_1 / input_2);
    child.classList.add(`list-group-item`);
    DOM.list_output.appendChild(child);
}

// DOM.button_divide.onclick = () => addinput4(DOM.inputOne.value, DOM.inputTwo.value);



DOM.button_clears.onclick = () => {
    DOM.list_output.textContent=" ";
    DOM.inputOne.value = " ";
    DOM.inputTwo.value=" ";
}



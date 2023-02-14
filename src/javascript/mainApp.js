"use strict";
import '../css/mainStyle.css';

const buttons = document.querySelectorAll(".buttons span[data-num]");
const equal = document.querySelector('.btn_e');
const display = document.querySelector('.result_num');
const clear = document.querySelector('.btn_c1');

let num = "";

for (let x = 0; x < buttons.length; x++) {
  buttons[x].onclick = () => {

    // check the data num type.
    num += buttons[x].getAttribute('data-num');

    // display numbers in the field.
    display.innerHTML = num;

    // add the equal functionality.
    equal.onclick = () => {
      let result = eval(num);
      display.innerHTML = result;
      num = result;
    };
  };
};

// clear the operation and field.
clear.onclick = () => {
  num = "";
  display.innerHTML = "0.";
};
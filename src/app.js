/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const button = document.querySelector("#button");
  const type = document.querySelectorAll(".heart");
  const number = document.querySelector(".number");
  let naipes = document.querySelector("#naipes");

  function randomType() {
    let tipo;
    let random = Math.floor(Math.random() * 4);
    if (random == 0) {
      tipo = "♦";
    } else if (random == 1) {
      tipo = "♥";
    } else if (random == 2) {
      tipo = "♠";
    } else {
      tipo = "♣";
    }
    console.log(random, tipo);
    return tipo;
  }

  function randomNumber() {
    let random = Math.floor(Math.random() * (13 - 1) + 1);
    if (random == 1) {
      random = "A";
    } else if (random == 10) {
      random = "J";
    } else if (random == 11) {
      random = "Q";
    } else if (random == 12) {
      random = "K";
    }
    return random;
  }

  function randomColor() {
    let random12 = Math.random() * 2;
    let random = Math.floor(random12 + 1);
    if (random == 1) {
      random = "red";
    } else if (random == 2) {
      random = "black";
    }
    return random;
  }

  button.addEventListener("click", () => {
    let simbolo = randomType();
    type.forEach(item => {
      item.innerHTML = simbolo;
    });
    let cardNumber = randomNumber();
    number.innerHTML = cardNumber;
    let colores = randomColor();
    console.log(colores);
    naipes.style.color = colores;
    // let naipes2 = document.querySelector("#naipes");
    // console.log(naipes2);
    // naipes2.classList.add("colorBlack");
  });
};

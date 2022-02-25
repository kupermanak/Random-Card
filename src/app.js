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
  const color = document.querySelector("#naipes");

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
    return tipo;
  }

  randomType();

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
    console.log(random);
    return random;
  }

  let cardPic = randomType();
  console.log(cardPic);
  function changeColor(cardPic) {
    let newColor;
    if (cardPic === "♠" || cardPic === "♣") {
      newColor = "black";
    } else {
      newColor = "red";
    }
    console.log(newColor);
    return newColor;
  }

  changeColor();

  button.addEventListener("click", () => {
    let simbolo = randomType();
    type.forEach(item => {
      item.innerHTML = simbolo;
    });
    let cardNumber = randomNumber();
    number.innerHTML = cardNumber;
    let colores = changeColor(simbolo);
    color.style.color = colores;
  });
};

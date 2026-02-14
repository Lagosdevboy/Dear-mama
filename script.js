// Elements
const envelopeContainer = document.getElementById("envelope-container");
const letterContainer   = document.getElementById("letter-container");
const letterWindow      = document.querySelector(".letter-window");
const noBtn             = document.querySelector(".no-btn");
const yesBtn            = document.querySelector(".yes-btn");
const title             = document.getElementById("letter-title");
const catImg            = document.getElementById("letter-cat");
const buttons           = document.getElementById("letter-buttons");
const finalText         = document.getElementById("final-text");

// Open letter
envelopeContainer.addEventListener("click", () => {
  envelopeContainer.style.display = "none";
  letterContainer.style.display = "flex";
  setTimeout(() => letterWindow.classList.add("open"), 60);
});

// Make "No" run away (random direction, stays in bounds better)
noBtn.addEventListener("mouseover", () => {
  const container = letterWindow.getBoundingClientRect();
  const btnSize   = noBtn.getBoundingClientRect();

  let newX = Math.random() * (container.width - btnSize.width - 100) + 50;
  let newY = Math.random() * (container.height - btnSize.height - 200) + 100;

  noBtn.style.transition = "transform 0.4s ease";
  noBtn.style.transform  = `translate(${newX - container.width/2}px, ${newY - container.height/2}px)`;
});

// Yes clicked → celebration
yesBtn.addEventListener("click", () => {
  title.textContent = "Yippeeee! ♡";

  // Change to dancing cat (make sure you have cat_dance.gif)
  catImg.src = "cat_dance.gif";

  letterWindow.classList.add("final");
  buttons.style.display = "none";
  finalText.style.display = "block";
});
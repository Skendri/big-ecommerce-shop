import { cardsElements } from "../imported-links/productsCards.js";
console.log(cardsElements);

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(document.documentElement);

// range selector te products.php

const rangeSliders = document.querySelectorAll("#kontenieri-filter");

rangeSliders.forEach((slider, index) => {
  const rangeInput = slider.querySelectorAll(".inputi-range input");
  const priceInput = slider.querySelectorAll(".range input");
  const progresi = slider.querySelector(".rreshkitesi .progresi");

  let priceGap = 20;

  rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minVal = parseInt(rangeInput[0].value);
      let maxVal = parseInt(rangeInput[1].value);

      if (maxVal - minVal < priceGap) {
        if (e.target.className === "range-min") {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        priceInput[0].placeholder = "Nga " + minVal + " $";
        priceInput[1].placeholder = "Te " + maxVal + " $";

        progresi.style.left = (minVal / rangeInput[0].max) * 100 + "%";
        progresi.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }
    });
  });
});

// range selector te products.php

// toggle button productet e rezultatet me te mira

document.getElementById("toggleButton").addEventListener("click", function () {
  var tabela = document.querySelector(".tabela");
  // Toggle the display of the tabela div
  if (tabela.style.display === "none" || tabela.style.display === "") {
    tabela.style.display = "block";
  } else {
    tabela.style.display = "none";
  }
});

// Select all the paragraphs
const paragraphs = document.querySelectorAll(".tabela p");

// Set the first paragraph as active by default
paragraphs[0].classList.add("active");

// Add event listeners to move the active class to the hovered paragraph
paragraphs.forEach((paragraph) => {
  paragraph.addEventListener("mouseover", () => {
    // Remove active class from the current active paragraph
    document.querySelector(".tabela p.active")?.classList.remove("active");
    // Add active class to the hovered paragraph
    paragraph.classList.add("active");
  });
});

// toggle function te range selector

// Select all the buttons with the 'products-butonat' class
const toggleButtons = document.querySelectorAll(".products-butonat");

// Loop through each button and add an event listener
toggleButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Get the target section ID from the 'data-target' attribute
    const targetSection = document.getElementById(
      this.getAttribute("data-target"),
    );

    // Toggle the 'display' property of the target section
    if (
      targetSection.style.display === "block" ||
      targetSection.style.display === ""
    ) {
      targetSection.style.display = "none"; // Show the section
    } else {
      targetSection.style.display = "block"; // Hide the section
    }
  });
});



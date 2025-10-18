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

const container = document.getElementById("kartateveta");
container.innerHTML = " ";

cardsElements.forEach((card, id) => {
  let cardElement = document.createElement("div");
  cardElement.className = "products-card";
  cardElement.id = `card-${id}`;

  cardElement.innerHTML += `
      <div class="products-card-majtas">
            <div class="kartaMadhe-info kartaGjere-info">
              <p>${card.paragrafi1}</p>
            </div>
            <h3>${card.header1}</h3>
            <div class="products-card-product">
              <img src="${card.image}">
              <div class="informacioni-produktit">
                <p>${card.paragrafi2}:</p>
                <h4>${card.header2}</h4>
                <p>${card.paragrafi3}</p>
                <h4>${card.header3}</h4>
                <p>${card.paragrafi4}</p>
                <h4>${card.header4}</h4>
                <p>${card.paragrafi5}</p>
                <h4>${card.header5}</h4>
              </div>
            </div>
            
            <div class="products-card-reviewsIMG">
              &#11088; &#11088; &#11088; &#11088; &#11088;
              <p>${card.paragrafi5}</p>
            </div>
          </div>
          
          <div class="products-card-djathtas">
            <h4>${card.header6}</h4>
            <h3>${card.header7}</h3>
            <a href="#">${card.link1}</a>
            <p>${card.paragrafi6}</p>
            
            <div class="opsionet-dorezimi">
              <h4>${card.header8.header} <span>${card.header8.span}</span></h4>
              <p> ${card.paragrafi7} </p>
            </div>
            
            <div class="opsionet-koleksioni-falas">
              <h4>${card.header9}</h4>
              <p>${card.paragrafi8.paragraf} <span> ${card.paragrafi8.span} </span> </p>
            </div>
            
            <div class="opsionet-shto-shporte">
              <button data-id="${card.id}" >${card.butoni}</button>
              <button><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                <path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"> </path> </svg>
              </button>
            </div>`;
  container.appendChild(cardElement);
});

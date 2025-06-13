   // Function to toggle visibility of content
         function toggle(element) {
            const content = element.nextElementSibling; // Get the content div
            const icon = element.querySelector('i'); // Get the icon

            if (content.style.display === "block") {
                content.style.display = "none"; // Hide the content
                icon.classList.remove("open"); // Reset the icon rotation
            } else {
                content.style.display = "block"; // Show the content
                icon.classList.add("open"); // Rotate the icon
            }
        }
         // Function to toggle visibility of content


         // ----------------------------------------------- KARTAT E MEDHA SLIDER DEKLARIMET te servisi ------------------------------------------------ /
         const mbeshtjellesiKartaveServisi = document.querySelector("#mbeshtjellesi-kartaveServisi");
const kartatEMedhaServisi = document.querySelector("#kartat-e-medhaServisi");
const butonatShigjetServisi = document.querySelectorAll(
  "#butonat-e-kontrolluesit button"
);
const gjersiaKartesTePareServisi = document.querySelector(".kartaMadheServisi").offsetWidth;
const FemijetKartaveTeMedhaServisi = [...kartatEMedhaServisi.children];



            // ------------------------------------------------- KARTAT E MEDHA SLIDER -------------------------------------------------------- /

            let cardPerPamjeServisi = Math.round(kartatEMedhaServisi.offsetWidth / gjersiaKartesTePareServisi);

FemijetKartaveTeMedhaServisi.slice(-cardPerPamjeServisi)
  .reverse()
  .forEach((card) => {
    kartatEMedhaServisi.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

FemijetKartaveTeMedhaServisi.slice(0, -cardPerPamjeServisi).forEach((card) => {
  kartatEMedhaServisi.insertAdjacentHTML("beforeend", card.outerHTML);
});

let isDraggingServ = false,
  startXServis,
  rrotulloMajtasServis,
  timeoutIDServis;

butonatShigjetServisi.forEach((btn) => {
  btn.addEventListener("click", () => {
    kartatEMedhaServisi.scrollLeft +=
      btn.id === "majtas" ? -gjersiaKartesTePareServisi : gjersiaKartesTePareServisi;
  });
});

const dragStartServis = (e) => {
  isDraggingServ = true;
  kartatEMedhaServisi.classList.add("terheqje");
  startXServis = e.pageX;
  rrotulloMajtasServis = kartatEMedhaServisi.scrollLeft;
};

const draggingServis = (e) => {
  if (!isDraggingServ) return;
  kartatEMedhaServisi.scrollLeft = rrotulloMajtasServis - (e.pageX - startXServis);
};

const dragStopServisi = () => {
  isDraggingServ = false;
  kartatEMedhaServisi.classList.remove("terheqje");
};

const autoPlayServisi = () => {
  if (window.innerWidth < 800) return;
  timeoutIDServis = setTimeout(
    () => (kartatEMedhaServisi.scrollLeft += gjersiaKartesTePareServisi),
    1000
  );
};
autoPlayServisi();

const infiniteScrollServisi = () => {
  if (kartatEMedhaServisi.scrollLeft === 0) {
    kartatEMedhaServisi.classList.add("jo-transition");
    kartatEMedhaServisi.scrollLeft =
      kartatEMedhaServisi.scrollWidth - 2 * kartatEMedhaServisi.offsetWidth;
    kartatEMedhaServisi.classList.remove("jo-transition");
  } else if (
    Math.ceil(kartatEMedhaServisi.scrollLeft) ===
    kartatEMedhaServisi.scrollWidth - kartatEMedhaServisi.offsetWidth
  ) {
    kartatEMedhaServisi.classList.add("jo-transition");
    kartatEMedhaServisi.scrollLeft = kartatEMedhaServisi.offsetWidth;
    kartatEMedhaServisi.classList.remove("jo-transition");
  }
  clearTimeout(timeoutIDServis);
  if (mbeshtjellesiKartaveServisi.matches(":hover")) autoPlayServisi();
};

kartatEMedhaServisi.addEventListener("mousedown", dragStartServis);
kartatEMedhaServisi.addEventListener("mousemove", draggingServis);
kartatEMedhaServisi.addEventListener("mouseup", dragStopServisi);
kartatEMedhaServisi.addEventListener("scroll", infiniteScrollServisi);
mbeshtjellesiKartaveServisi.addEventListener("mouseenter", () =>
  clearTimeout(timeoutIDServis)
);
mbeshtjellesiKartaveServisi.addEventListener("mouseleave", autoPlayServisi);


//       kontenti dynamic
const countersEl = document.querySelectorAll(".counter");

countersEl.forEach((counterEl) => {
  counterEl.innerText = "0";
  incrementCounter();
  function incrementCounter() {
    let currentNum = +counterEl.innerText;
    const dataCeil = counterEl.getAttribute("data-ceil");
    const increment = dataCeil / 15;
    currentNum = Math.ceil(currentNum + increment);

    if (currentNum < dataCeil) {
      counterEl.innerText = currentNum;
      setTimeout(incrementCounter, 50);
    } else {
      counterEl.innerText = dataCeil;
    }
  }
});

// kontenti i dyte dinamik
const itemsNumb = [...document.querySelectorAll('.number')];

 const updateCount = (el) => {
      const value = parseInt(el.dataset.value);
      const increment = Math.ceil(value / 1000);
      let initialValue = 0;
      const increaseCount = setInterval(() => {
        initialValue += increment;
        if (initialValue > value) {
          el.textContent = `${value}+`;
          clearInterval(increaseCount);
          return;
        }
        el.textContent = `${initialValue}+`;
      }, 1);
    };

    
    itemsNumb.forEach((item) => {
      updateCount(item);
    });

    // Observer to trigger count when in view
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        updateCount(el);
        observer.unobserve(el); // trigger only once
      }
    });
  },
  {
    threshold: 1,
  }
);

document.querySelectorAll('.number').forEach(el => {
  observer.observe(el);
});
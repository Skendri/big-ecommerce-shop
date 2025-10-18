

// ----------------------------
const infoProduktit = document.getElementsByClassName("info-produktit");
const pershkrimiProduktitBtn = document.getElementsByClassName(
  "pershkrimi-produktit"
);
let infoProduktitDukshme = false;

// -------------------------- KATEGORI POPUP DEKLARIMET ----------------------------------------------------------- /
const listaItems = document.querySelectorAll(".kategoriPopUp");
const popupGlobeShopsRekomandon = document.getElementById("kategori-GlobeShops-rekomandonPopUp");
const items = document.querySelector(".kategoriPopUp")

// ---------------------------- PERDJA ZEZE DEKLARIMET ------------------------------------------------------------- /

const perdjaZeze = document.getElementById("perdja-zeze");
const perdjaZezeZgjidhDyqani = document.getElementById(
  "perdja-zeze-zgjidhDyqani"
);

// ------------------- MBESHTJELLSI GJITH KATEGORIVE - ZGJIDH DYQANIN DEKLARIMET ------------------------------------ /
const mbeshtjellsiZgjidhDyqanin = document.getElementById("ZgjidhDyqanin");
const mbeshtjellsiGjithaKategorite = document.getElementById(
  "mbeshtjellsi-gjithaKategorite"
);





// ------------------------------------------ KATEGORI POPUP -------------------------------------------------------- //


// listaItems.forEach((item) => {
//   item.addEventListener("mouseenter", () => {
//     popupGlobeShopsRekomandon.style.visibility = "visible";
//     popupGlobeShopsRekomandon.style.opacity = 1;
//     console.log("hovered on", item);
//     console.log("pop up is", popupGlobeShopsRekomandon);
//   });

//   item.addEventListener("mouseleave", (e) => {
//     // Small delay to allow hover over popup
//     setTimeout(() => {
//       if (!popupGlobeShopsRekomandon.matches(':hover')) {
//         popupGlobeShopsRekomandon.style.visibility = "hidden";
//         popupGlobeShopsRekomandon.style.opacity = 0;
//       }
//     }, 300);
//   });

// });



// Also handle popup itself to keep it open when hovered
popupGlobeShopsRekomandon.addEventListener("mouseleave", () => {
  isPopupHover = false;
  popupGlobeShopsRekomandon.style.visibility = "hidden";
  popupGlobeShopsRekomandon.style.opacity = 0;
});

console.log(popupGlobeShopsRekomandon);

let hideTimeout; // Variable to store the timeout ID

listaItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    // Clear any existing timeout to prevent hiding
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      hideTimeout = null;
    }

    popupGlobeShopsRekomandon.style.visibility = "visible";
    popupGlobeShopsRekomandon.style.opacity = 1;
    console.log("hovered on", item);
    console.log("pop up is", popupGlobeShopsRekomandon);
  });

  item.addEventListener("mouseleave", (e) => {
    // Small delay to allow hover over popup
    hideTimeout = setTimeout(() => {
      if (!popupGlobeShopsRekomandon.matches(':hover')) {
        popupGlobeShopsRekomandon.style.visibility = "hidden";
        popupGlobeShopsRekomandon.style.opacity = 0;
      }
    }, 300);
  });
});

// Also handle popup itself to keep it open when hovered
popupGlobeShopsRekomandon.addEventListener("mouseleave", () => {
  hideTimeout = setTimeout(() => {
    popupGlobeShopsRekomandon.style.visibility = "hidden";
    popupGlobeShopsRekomandon.style.opacity = 0;
  }, 300);
});

// Clear timeout when entering the popup
popupGlobeShopsRekomandon.addEventListener("mouseenter", () => {
  if (hideTimeout) {
    clearTimeout(hideTimeout);
    hideTimeout = null;
  }
});

console.log(popupGlobeShopsRekomandon);

// ------------------------------------- HAP POP UP DYQANI -------------------------------------------------------- /

function hapPopUpDyqani() {
  mbeshtjellsiZgjidhDyqanin.classList.toggle("hapPopUpZgjidhDyqanin");
  perdjaZezeZgjidhDyqani.classList.toggle("hapPerdja-Zeze-ZgjidhDyqanin");
  if (perdjaZezeZgjidhDyqani === true) {
    perdjaZezeZgjidhDyqani.classList.remove("hapPerdja-Zeze-ZgjidhDyqanin");
    mbeshtjellsiZgjidhDyqanin.classList.remove("hapPopUpZgjidhDyqanin");
  };
};


// ---------------------------------------- HAP POP UP ------------------------------------------------------------- /

 function hapPopUp() {
  mbeshtjellsiGjithaKategorite.classList.toggle("hapPopUpMbeshtjellsi");
  perdjaZeze.classList.toggle("hapPopUpPerdja");
  if (perdjaZeze === true) {
    perdjaZeze.classList.remove("hapPopUpPerdja");
    mbeshtjellsiGjithaKategorite.classList.remove("hapPopUpMbeshtjellsi");
  };
};







// --------------------------------------------------------------------  KARTAT E GJERA  ---------------------//

// const mbeshtjellesiGjere = document.querySelector(
//   "#mbeshtjellesi-gjere-kartave-klub"
// );
// const kartaGjereKlub = document.querySelector("#kartat-e-gjera-klub");
// const butonatShigjetGjere = document.querySelectorAll(
//   "#butonat-e-kontrolluesit-teGjere-klub"
// );
// const gjersiaKartesGjere = document.querySelector("#kartaMadheID").offsetWidth;
// const FemijetKartaveTeGjere = [...kartaGjereKlub.children];

// let cardEGjere = Math.round(kartaGjereKlub.offsetWidth / gjersiaKartesGjere);

// FemijetKartaveTeGjere.slice(-cardEGjere)
//   .reverse()
//   .forEach((card) => {
//     kartaGjereKlub.insertAdjacentHTML("afterbegin", card.outerHTML);
//   });

// FemijetKartaveTeGjere.slice(0, -cardEGjere).forEach((card) => {
//   kartaGjereKlub.insertAdjacentHTML("beforeend", card.outerHTML);
// });

// let isDraggingKartaGjere = false,
//   startXKartaGjere,
//   rrotulloMajtasKartaGjere,
//   timeoutIDKartaGjere;

// butonatShigjetGjere.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     kartaGjereKlub.scrollLeft +=
//       btn.id === "majtas-kontrolluesi-gjere-klub"
//         ? -gjersiaKartesGjere
//         : gjersiaKartesGjere;
//   });
// });

// const dragStartKartaGjere = (g) => {
//   isDraggingKartaGjere = true;
//   kartaGjereKlub.classList.add("terheqje");
//   startXKartaGjere = g.pageX;
//   rrotulloMajtasKartaGjere = kartaGjereKlub.scrollLeft;
// };

// const draggingKartaGjere = (g) => {
//   if (!isDraggingKartaGjere) return;
//   kartaGjereKlub.scrollLeft =
//     rrotulloMajtasKartaGjere - (g.pageX - startXKartaGjere);
// };

// const dragStopKartaGjere = () => {
//   isDraggingKartaGjere = false;
//   kartaGjereKlub.classList.remove("terheqje");
// };

// const autoPlayKartaGjere = () => {
//   if (window.innerWidth < 800) return;
//   timeoutIDKartaGjere = setTimeout(
//     () => (kartaGjereKlub.scrollLeft += gjersiaKartesGjere),
//     2500
//   );
// };
// autoPlayKartaGjere();

// const infiniteScrollKartaGjere = () => {
//   if (kartaGjereKlub.scrollLeft === 0) {
//     kartaGjereKlub.classList.add("jo-transition");
//     kartaGjereKlub.scrollLeft =
//       kartaGjereKlub.scrollWidth - 1 * kartaGjereKlub.offsetWidth;
//     kartaGjereKlub.classList.remove("jo-transition");
//   } else if (
//     Math.ceil(kartaGjereKlub.scrollLeft) ===
//     kartaGjereKlub.scrollWidth - kartaGjereKlub.offsetWidth
//   ) {
//     kartaGjereKlub.classList.add("jo-transition");
//     kartaGjereKlub.scrollLeft = kartaGjereKlub.offsetWidth;
//     kartaGjereKlub.classList.remove("jo-transition");
//   }
//   clearTimeout(timeoutIDKartaGjere);
//   if (mbeshtjellesiGjere.matches(":hover")) autoPlayKartaGjere();
// };

// kartaGjereKlub.addEventListener("mousedown", dragStartKartaGjere);
// kartaGjereKlub.addEventListener("mousemove", draggingKartaGjere);
// kartaGjereKlub.addEventListener("mouseup", dragStopKartaGjere);
// kartaGjereKlub.addEventListener("scroll", infiniteScrollKartaGjere);
// mbeshtjellesiGjere.addEventListener("mouseenter", () =>
//   clearTimeout(timeoutIDKartaGjere)
// );
// mbeshtjellesiGjere.addEventListener("mouseenter", autoPlayKartaGjere);



// fillimi Dark Mode Toggle button

const inputEl = document.querySelector(".input");

const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("darkmode"));

updateBody();

function updateBody() {
  if (inputEl.checked) {
    bodyEl.classList.add("darkmode");
  } else {
    bodyEl.classList.remove("darkmode");
  }
}

inputEl.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("darkmode", JSON.stringify(inputEl.checked));
}

// fundi Dark Mode Toggle button

// fillimi i elementit draggable

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
  let data = ev.dataTransfer.getData("Text");
  ev.target.appendChild(document.getElementById(data));
  ev.preventDefault();
}

// fundi i elementit draggable

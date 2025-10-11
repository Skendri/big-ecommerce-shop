

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



// -----------------------------------  KARTAT KLUB DEKLARIMET -----------------------------------------------------//
const mbeshtjellesiKartaveKlub = document.querySelector(
  "#mbeshtjellesi-kartave-klub"
);
const kartatEMedhaKlub = document.querySelector("#kartat-e-medha-klub");
const butonatShigjetKlub = document.querySelectorAll(
  "#butonat-e-kontrolluesit-klub button"
);
const gjersiaKartesTeKlub = document.querySelector(".kartaMadhe").offsetWidth;
const FemijetKartaveTeKlub = [...kartatEMedhaKlub.children];
let cardPerKlub = Math.round(
  kartatEMedhaKlub.offsetWidth / gjersiaKartesTeKlub
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



// ---------------------------------------  KARTAT KLUB  ----------------------------------------------------------//

FemijetKartaveTeKlub.slice(-cardPerKlub)
  .reverse()
  .forEach((card) => {
    kartatEMedhaKlub.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

FemijetKartaveTeKlub.slice(0, -cardPerKlub).forEach((card) => {
  kartatEMedhaKlub.insertAdjacentHTML("beforeend", card.outerHTML);
});

let isDraggingKlub = false,
  startXKlub,
  rrotulloMajtasKlub,
  timeoutIDKlub;

butonatShigjetKlub.forEach((btn) => {
  btn.addEventListener("click", () => {
    kartatEMedhaKlub.scrollLeft +=
      btn.id === "majtas-klub" ? -gjersiaKartesTePare : gjersiaKartesTePare;
  });
});

const dragStartKlub = (e) => {
  isDraggingKlub = true;
  kartatEMedhaKlub.classList.add("terheqje");
  startXKlub = e.pageX;
  rrotulloMajtasKlub = kartatEMedhaKlub.scrollLeft;
};

const draggingKlub = (k) => {
  if (!isDraggingKlub) return;
  kartatEMedhaKlub.scrollLeft = rrotulloMajtasKlub - (k.pageX - startXKlub);
};

const dragStopKlub = () => {
  isDraggingKlub = false;
  kartatEMedhaKlub.classList.remove("terheqje");
};

const autoPlayKlub = () => {
  if (window.innerWidth < 800) return;
  timeoutIDKlub = setTimeout(
    () => (kartatEMedhaKlub.scrollLeft += gjersiaKartesTeKlub),
    1000
  );
};
autoPlayKlub();

const infiniteScrollKlub = () => {
  if (kartatEMedhaKlub.scrollLeft === 0) {
    kartatEMedhaKlub.classList.add("jo-transition");
    kartatEMedhaKlub.scrollLeft =
      kartatEMedhaKlub.scrollWidth - 2 * kartatEMedhaKlub.offsetWidth;
    kartatEMedhaKlub.classList.remove("jo-transition");
  } else if (
    Math.ceil(kartatEMedhaKlub.scrollLeft) ===
    kartatEMedhaKlub.scrollWidth - kartatEMedhaKlub.offsetWidth
  ) {
    kartatEMedhaKlub.classList.add("jo-transition");
    kartatEMedhaKlub.scrollLeft = kartatEMedhaKlub.offsetWidth;
    kartatEMedhaKlub.classList.remove("jo-transition");
  }
  clearTimeout(timeoutIDKlub);
  if (mbeshtjellesiKartaveKlub.matches(":hover")) autoPlayKlub();
};

kartatEMedhaKlub.addEventListener("mousedown", dragStartKlub);
kartatEMedhaKlub.addEventListener("mousemove", draggingKlub);
kartatEMedhaKlub.addEventListener("mouseup", dragStopKlub);
kartatEMedhaKlub.addEventListener("scroll", infiniteScrollKlub);
mbeshtjellesiKartaveKlub.addEventListener("mouseenter", () =>
  clearTimeout(timeoutIDKlub)
);
mbeshtjellesiKartaveKlub.addEventListener("mouseenter", autoPlayKlub);

// -------------------------------------------------------------  KARTAT KLUB  ---------------------//

const mbeshtjellesiDyteKartaveKlub = document.querySelector(
  "#mbeshtjellesi-dyte-kartave-klub"
);
const kartatEDytaKlub = document.querySelector("#kartat-e-dyta-klub");
const butonatShigjetKlubDy = document.querySelectorAll(
  "#butonat-e-kontrolluesit-teDyte-klub button"
);
const gjersiaKartesTeKlubDy = document.querySelector(".kartaMadhe").offsetWidth;
const FemijetKartaveTeKlubDy = [...kartatEDytaKlub.children];

let cardPerKlubDy = Math.round(
  kartatEDytaKlub.offsetWidth / gjersiaKartesTeKlubDy
);

FemijetKartaveTeKlubDy.slice(-cardPerKlubDy)
  .reverse()
  .forEach((card) => {
    kartatEDytaKlub.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

FemijetKartaveTeKlubDy.slice(0, -cardPerKlubDy).forEach((card) => {
  kartatEDytaKlub.insertAdjacentHTML("beforeend", card.outerHTML);
});

let isDraggingKlubDy = false,
  startXKlubDy,
  rrotulloMajtasKlubDy,
  timeoutIDKlubDy;

butonatShigjetKlubDy.forEach((btn) => {
  btn.addEventListener("click", () => {
    kartatEDytaKlub.scrollLeft +=
      btn.id === "majtas-kontrolluesi-klubDy"
        ? -gjersiaKartesTeKlubDy
        : gjersiaKartesTeKlubDy;
  });
});

const dragStartKlubDy = (d) => {
  isDraggingKlubDy = true;
  kartatEDytaKlub.classList.add("terheqje");
  startXKlubDy = d.pageX;
  rrotulloMajtasKlubDy = kartatEDytaKlub.scrollLeft;
};

const draggingKlubDy = (d) => {
  if (!isDraggingKlubDy) return;
  kartatEDytaKlub.scrollLeft = rrotulloMajtasKlubDy - (d.pageX - startXKlubDy);
};

const dragStopKlubDy = () => {
  isDraggingKlubDy = false;
  kartatEDytaKlub.classList.remove("terheqje");
};

const autoPlayKlubDy = () => {
  if (window.innerWidth < 800) return;
  timeoutIDKlubDy = setTimeout(
    () => (kartatEDytaKlub.scrollLeft += gjersiaKartesTeKlubDy),
    1000
  );
};
autoPlayKlubDy();

const infiniteScrollKlubDy = () => {
  if (kartatEDytaKlub.scrollLeft === 0) {
    kartatEDytaKlub.classList.add("jo-transition");
    kartatEDytaKlub.scrollLeft =
      kartatEDytaKlub.scrollWidth - 2 * kartatEDytaKlub.offsetWidth;
    kartatEDytaKlub.classList.remove("jo-transition");
  } else if (
    Math.ceil(kartatEDytaKlub.scrollLeft) ===
    kartatEDytaKlub.scrollWidth - kartatEDytaKlub.offsetWidth
  ) {
    kartatEDytaKlub.classList.add("jo-transition");
    kartatEDytaKlub.scrollLeft = kartatEDytaKlub.offsetWidth;
    kartatEDytaKlub.classList.remove("jo-transition");
  }
  clearTimeout(timeoutIDKlubDy);
  if (mbeshtjellesiDyteKartaveKlub.matches(":hover")) autoPlayKlubDy();
};

kartatEDytaKlub.addEventListener("mousedown", dragStartKlubDy);
kartatEDytaKlub.addEventListener("mousemove", draggingKlubDy);
kartatEDytaKlub.addEventListener("mouseup", dragStopKlubDy);
kartatEDytaKlub.addEventListener("scroll", infiniteScrollKlubDy);
mbeshtjellesiDyteKartaveKlub.addEventListener("mouseenter", () =>
  clearTimeout(timeoutIDKlubDy)
);
mbeshtjellesiDyteKartaveKlub.addEventListener("mouseenter", autoPlayKlubDy);

// --------------------------------------------------------------------  KARTAT E GJERA  ---------------------//

const mbeshtjellesiGjere = document.querySelector(
  "#mbeshtjellesi-gjere-kartave-klub"
);
const kartaGjereKlub = document.querySelector("#kartat-e-gjera-klub");
const butonatShigjetGjere = document.querySelectorAll(
  "#butonat-e-kontrolluesit-teGjere-klub"
);
const gjersiaKartesGjere = document.querySelector("#kartaMadheID").offsetWidth;
const FemijetKartaveTeGjere = [...kartaGjereKlub.children];

let cardEGjere = Math.round(kartaGjereKlub.offsetWidth / gjersiaKartesGjere);

FemijetKartaveTeGjere.slice(-cardEGjere)
  .reverse()
  .forEach((card) => {
    kartaGjereKlub.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

FemijetKartaveTeGjere.slice(0, -cardEGjere).forEach((card) => {
  kartaGjereKlub.insertAdjacentHTML("beforeend", card.outerHTML);
});

let isDraggingKartaGjere = false,
  startXKartaGjere,
  rrotulloMajtasKartaGjere,
  timeoutIDKartaGjere;

butonatShigjetGjere.forEach((btn) => {
  btn.addEventListener("click", () => {
    kartaGjereKlub.scrollLeft +=
      btn.id === "majtas-kontrolluesi-gjere-klub"
        ? -gjersiaKartesGjere
        : gjersiaKartesGjere;
  });
});

const dragStartKartaGjere = (g) => {
  isDraggingKartaGjere = true;
  kartaGjereKlub.classList.add("terheqje");
  startXKartaGjere = g.pageX;
  rrotulloMajtasKartaGjere = kartaGjereKlub.scrollLeft;
};

const draggingKartaGjere = (g) => {
  if (!isDraggingKartaGjere) return;
  kartaGjereKlub.scrollLeft =
    rrotulloMajtasKartaGjere - (g.pageX - startXKartaGjere);
};

const dragStopKartaGjere = () => {
  isDraggingKartaGjere = false;
  kartaGjereKlub.classList.remove("terheqje");
};

const autoPlayKartaGjere = () => {
  if (window.innerWidth < 800) return;
  timeoutIDKartaGjere = setTimeout(
    () => (kartaGjereKlub.scrollLeft += gjersiaKartesGjere),
    2500
  );
};
autoPlayKartaGjere();

const infiniteScrollKartaGjere = () => {
  if (kartaGjereKlub.scrollLeft === 0) {
    kartaGjereKlub.classList.add("jo-transition");
    kartaGjereKlub.scrollLeft =
      kartaGjereKlub.scrollWidth - 1 * kartaGjereKlub.offsetWidth;
    kartaGjereKlub.classList.remove("jo-transition");
  } else if (
    Math.ceil(kartaGjereKlub.scrollLeft) ===
    kartaGjereKlub.scrollWidth - kartaGjereKlub.offsetWidth
  ) {
    kartaGjereKlub.classList.add("jo-transition");
    kartaGjereKlub.scrollLeft = kartaGjereKlub.offsetWidth;
    kartaGjereKlub.classList.remove("jo-transition");
  }
  clearTimeout(timeoutIDKartaGjere);
  if (mbeshtjellesiGjere.matches(":hover")) autoPlayKartaGjere();
};

kartaGjereKlub.addEventListener("mousedown", dragStartKartaGjere);
kartaGjereKlub.addEventListener("mousemove", draggingKartaGjere);
kartaGjereKlub.addEventListener("mouseup", dragStopKartaGjere);
kartaGjereKlub.addEventListener("scroll", infiniteScrollKartaGjere);
mbeshtjellesiGjere.addEventListener("mouseenter", () =>
  clearTimeout(timeoutIDKartaGjere)
);
mbeshtjellesiGjere.addEventListener("mouseenter", autoPlayKartaGjere);

// ---------------------------------------------------------------------- KARTAT E SHERBIMIT ---------------- //

const mbeshtjellesiSherbimit = document.querySelector(
  "#mbeshtjellesi-gjere-kartave-klub"
);
const kartaSherbimit = document.querySelector("#kartat-e-sherbimi");
const butonatShigjetSherbimit = document.querySelectorAll(
  "#butonat-e-kontrolluesit-sherbimit"
);
const gjersiaKartesSherbimit =
  document.querySelector("#kartaMadheID").offsetWidth;
const FemijetKartaveTeSherbimit = [...kartaSherbimit.children];

let cardSherbimit = Math.round(
  kartaSherbimit.offsetWidth / gjersiaKartesSherbimit
);

FemijetKartaveTeSherbimit.slice(-cardSherbimit)
  .reverse()
  .forEach((card) => {
    kartaSherbimit.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

FemijetKartaveTeSherbimit.slice(0, -cardSherbimit).forEach((card) => {
  kartaSherbimit.insertAdjacentHTML("beforeend", card.outerHTML);
});

let isDraggingKartaSherbimit = false,
  startXKartaSherbimit,
  rrotulloMajtasKartaSherbimit,
  timeoutIDKartaSherbimit;

butonatShigjetSherbimit.forEach((btn) => {
  btn.addEventListener("click", () => {
    kartaSherbimit.scrollLeft +=
      btn.id === "majtas-kontrolluesi-sherbimit"
        ? -gjersiaKartesSherbimit
        : gjersiaKartesSherbimit;
  });
});

const dragStartKartaSherbimit = (s) => {
  isDraggingKartaSherbimit = true;
  kartaSherbimit.classList.add("terheqje");
  startXKartaSherbimit = s.pageX;
  rrotulloMajtasKartaSherbimit = kartaSherbimit.scrollLeft;
};

const draggingKartaSherbimit = (s) => {
  if (!isDraggingKartaSherbimit) return;
  kartaSherbimit.scrollLeft =
    rrotulloMajtasKartaSherbimit - (s.pageX - startXKartaSherbimit);
};

const dragStopKartaSherbimit = () => {
  isDraggingKartaSherbimit = false;
  kartaSherbimit.classList.remove("terheqje");
};

const autoPlayKartaSherbimit = () => {
  if (window.innerWidth < 800) return;
  timeoutIDKartaSherbimit = setTimeout(
    () => (kartaSherbimit.scrollLeft += gjersiaKartesSherbimit),
    2500
  );
};
autoPlayKartaSherbimit();

const infiniteScrollKartaSherbimit = () => {
  if (kartaSherbimit.scrollLeft === 0) {
    kartaSherbimit.classList.add("jo-transition");
    kartaSherbimit.scrollLeft =
      kartaSherbimit.scrollWidth - 1 * kartaSherbimit.offsetWidth;
    kartaSherbimit.classList.remove("jo-transition");
  } else if (
    Math.ceil(kartaSherbimit.scrollLeft) ===
    kartaSherbimit.scrollWidth - kartaSherbimit.offsetWidth
  ) {
    kartaSherbimit.classList.add("jo-transition");
    kartaSherbimit.scrollLeft = kartaSherbimit.offsetWidth;
    kartaSherbimit.classList.remove("jo-transition");
  }
  clearTimeout(timeoutIDKartaGjere);
  if (mbeshtjellesiGjere.matches(":hover")) autoPlayKartaGjere();
};

kartaSherbimit.addEventListener("mousedown", dragStartKartaSherbimit);
kartaSherbimit.addEventListener("mousemove", draggingKartaSherbimit);
kartaSherbimit.addEventListener("mouseup", dragStopKartaSherbimit);
kartaSherbimit.addEventListener("scroll", infiniteScrollKartaSherbimit);
mbeshtjellesiSherbimit.addEventListener("mouseenter", () =>
  clearTimeout(timeoutIDKartaSherbimit)
);
mbeshtjellesiSherbimit.addEventListener("mouseenter", autoPlayKartaSherbimit);

// Dark Mode Toggle button

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

// Dark Mode Toggle button

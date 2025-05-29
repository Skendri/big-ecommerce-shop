// ---------------------------- INFO PRODUKTIT DEKLARIMET ---------------------------------------------------------- /
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

// ---------------------------------- KARTAT E MEDHA SLIDER DEKLARIMET ---------------------------------------------- /
const mbeshtjellesiKartave = document.querySelector("#mbeshtjellesi-kartave");
const kartatEMedha = document.querySelector("#kartat-e-medha");
const butonatShigjet = document.querySelectorAll(
  "#butonat-e-kontrolluesit button"
);
const gjersiaKartesTePare = document.querySelector(".kartaMadhe").offsetWidth;
const FemijetKartaveTeMedha = [...kartatEMedha.children];

// ---------------------------- KARTAT E PLANIT TE PARE DEKLARIMET ------------------------------------------------ //
const seksioniPlaniPare = document.querySelector("#seksioni-plani-pare");
const kartatPlaniPare = document.querySelector("#kartat-plan-pare");
const PlaniButonatShigjet = document.querySelectorAll(
  "#butonat-e-planit button"
);
const gjersiaKartesTePlanit =
  document.querySelector(".karta-plan-pare").offsetWidth;
const FemijetKartaveTePlanit = [...kartatPlaniPare.children];
let planiCardPerPamje = Math.round(
  kartatPlaniPare.offsetWidth / gjersiaKartesTePlanit
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

// ------------------------------------------ KATEGORI POPUP -------------------------------------------------------- /

console.log("ketu eshte kapur lista e pare", listaItems[0]);
console.log("ketu eshte kapur lista e dyte", listaItems[1]);
console.log("ketu eshte kapur lista e trete", listaItems[2]);
let listapare = listaItems[0];
console.log("kjo eshte lista pare", listapare);
listapare = listaItems[0].innerHTML;
console.log("kjo eshte lista pare bashke me vleren qe ka brenda", listapare);
// listapare.style.fontSize = "60px";
// listapare.style.backgroundColor = "red"
listaItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    popupGlobeShopsRekomandon.style.visibility = "visible";
    popupGlobeShopsRekomandon.style.opacity = 1;
    console.log("hovered on", item);
    console.log("pop up is", popupGlobeShopsRekomandon);
  });

  item.addEventListener("mouseleave", (e) => {
    // Small delay to allow hover over popup
    setTimeout(() => {
      if (!popupGlobeShopsRekomandon.matches(':hover')) {
        popupGlobeShopsRekomandon.style.visibility = "hidden";
        popupGlobeShopsRekomandon.style.opacity = 0;
      }
    }, 500);
  });

  item.addEventListener("mouseover", () => {
    if(item === "mouseover") {
    popupGlobeShopsRekomandon.style.visibility = "visible";
    popupGlobeShopsRekomandon.style.opacity = 1;
    }
  })

});

// Also handle popup itself to keep it open when hovered
popupGlobeShopsRekomandon.addEventListener("mouseleave", () => {
  popupGlobeShopsRekomandon.style.visibility = "hidden";
  popupGlobeShopsRekomandon.style.opacity = 0;
});

console.log(popupGlobeShopsRekomandon);

// ------------------------------------- HAP POP UP DYQANI -------------------------------------------------------- /

 function hapPopUpDyqani() {
  mbeshtjellsiZgjidhDyqanin.classList.toggle("hapPopUpZgjidhDyqanin");
  perdjaZezeZgjidhDyqani.classList.toggle("hapPerdja-Zeze-ZgjidhDyqanin");
  if (perdjaZezeZgjidhDyqani === true) {
    perdjaZezeZgjidhDyqani.classList.remove("hapPerdja-Zeze-ZgjidhDyqanin");
    mbeshtjellsiZgjidhDyqanin.classList.remove("hapPopUpZgjidhDyqanin");
  }
}

// ---------------------------------------- HAP POP UP ------------------------------------------------------------- /

 function hapPopUp() {
  mbeshtjellsiGjithaKategorite.classList.toggle("hapPopUpMbeshtjellsi");
  perdjaZeze.classList.toggle("hapPopUpPerdja");
  if (perdjaZeze === true) {
    perdjaZeze.classList.remove("hapPopUpPerdja");
    mbeshtjellsiGjithaKategorite.classList.remove("hapPopUpMbeshtjellsi");
  }
}

// ---------------------------------- KARTAT E MEDHA SLIDER -------------------------------------------------------- /

let cardPerPamje = Math.round(kartatEMedha.offsetWidth / gjersiaKartesTePare);

FemijetKartaveTeMedha.slice(-cardPerPamje)
  .reverse()
  .forEach((card) => {
    kartatEMedha.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

FemijetKartaveTeMedha.slice(0, -cardPerPamje).forEach((card) => {
  kartatEMedha.insertAdjacentHTML("beforeend", card.outerHTML);
});

let isDragging = false,
  startX,
  rrotulloMajtas,
  timeoutID;

butonatShigjet.forEach((btn) => {
  btn.addEventListener("click", () => {
    kartatEMedha.scrollLeft +=
      btn.id === "majtas" ? -gjersiaKartesTePare : gjersiaKartesTePare;
  });
});

const dragStart = (e) => {
  isDragging = true;
  kartatEMedha.classList.add("terheqje");
  startX = e.pageX;
  rrotulloMajtas = kartatEMedha.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  kartatEMedha.scrollLeft = rrotulloMajtas - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  kartatEMedha.classList.remove("terheqje");
};

const autoPlay = () => {
  if (window.innerWidth < 800) return;
  timeoutID = setTimeout(
    () => (kartatEMedha.scrollLeft += gjersiaKartesTePare),
    1000
  );
};
autoPlay();

const infiniteScroll = () => {
  if (kartatEMedha.scrollLeft === 0) {
    kartatEMedha.classList.add("jo-transition");
    kartatEMedha.scrollLeft =
      kartatEMedha.scrollWidth - 2 * kartatEMedha.offsetWidth;
    kartatEMedha.classList.remove("jo-transition");
  } else if (
    Math.ceil(kartatEMedha.scrollLeft) ===
    kartatEMedha.scrollWidth - kartatEMedha.offsetWidth
  ) {
    kartatEMedha.classList.add("jo-transition");
    kartatEMedha.scrollLeft = kartatEMedha.offsetWidth;
    kartatEMedha.classList.remove("jo-transition");
  }
  clearTimeout(timeoutID);
  if (mbeshtjellesiKartave.matches(":hover")) autoPlay();
};

kartatEMedha.addEventListener("mousedown", dragStart);
kartatEMedha.addEventListener("mousemove", dragging);
kartatEMedha.addEventListener("mouseup", dragStop);
kartatEMedha.addEventListener("scroll", infiniteScroll);
mbeshtjellesiKartave.addEventListener("mouseenter", () =>
  clearTimeout(timeoutID)
);
mbeshtjellesiKartave.addEventListener("mouseleave", autoPlay);

//-------------------------------------- KARTAT E PLANIT TE PARE ------------------------------------------------ //

FemijetKartaveTePlanit.slice(-planiCardPerPamje)
  .reverse()
  .forEach((card) => {
    kartatPlaniPare.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

FemijetKartaveTePlanit.slice(0, -planiCardPerPamje).forEach((card) => {
  kartatPlaniPare.insertAdjacentHTML("beforeend", card.outerHTML);
});

let isDraggingPlani = false,
  startXPlani,
  rrotulloMajtasPlani,
  timeoutIDPlani;

PlaniButonatShigjet.forEach((btn) => {
  btn.addEventListener("click", () => {
    kartatPlaniPare.scrollLeft +=
      btn.id === "majtas-plani-pare"
        ? -gjersiaKartesTePlanit
        : gjersiaKartesTePlanit;
  });
});

const dragStartPlani = (p) => {
  isDraggingPlani = true;
  kartatPlaniPare.classList.add("terheqje");
  startXPlani = p.pageX;
  rrotulloMajtasPlani = kartatPlaniPare.scrollLeft;
};

const draggingPlani = (p) => {
  if (!isDraggingPlani) return;
  kartatPlaniPare.scrollLeft = rrotulloMajtasPlani - (p.pageX - startXPlani);
};

const dragStopPlani = () => {
  isDraggingPlani = false;
  kartatPlaniPare.classList.remove("terheqje");
};

const autoPlayPlani = () => {
  if (window.innerWidth < 1000) return;
  timeoutIDPlani = setTimeout(
    () => (kartatPlaniPare.scrollLeft += gjersiaKartesTePlanit),
    1000
  );
};
autoPlayPlani();

const infiniteScrollPlani = () => {
  if (kartatPlaniPare.scrollLeft === 0) {
    kartatPlaniPare.classList.add("jo-transition");
    kartatPlaniPare.scrollLeft =
      kartatPlaniPare.scrollWidth - 2 * kartatPlaniPare.offsetWidth;
    kartatPlaniPare.classList.remove("jo-transition");
  } else if (
    Math.ceil(kartatPlaniPare.scrollLeft) ===
    kartatPlaniPare.scrollWidth - kartatPlaniPare.offsetWidth
  ) {
    kartatPlaniPare.classList.add("jo-transition");
    kartatPlaniPare.scrollLeft = kartatPlaniPare.offsetWidth;
    kartatPlaniPare.classList.remove("jo-transition");
  }
  clearTimeout(timeoutIDPlani);
  if (seksioniPlaniPare.matches(":hover")) autoPlayPlani();
};

kartatPlaniPare.addEventListener("mousedown", dragStartPlani);
kartatPlaniPare.addEventListener("mousemove", draggingPlani);
kartatPlaniPare.addEventListener("mouseup", dragStopPlani);
kartatPlaniPare.addEventListener("scroll", infiniteScrollPlani);
seksioniPlaniPare.addEventListener("mouseenter", () =>
  clearTimeout(timeoutIDPlani)
);
seksioniPlaniPare.addEventListener("mouseleave", autoPlayPlani);

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
mbeshtjellesiKartaveKlub.addEventListener("mouseleave", autoPlayKlub);

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
mbeshtjellesiDyteKartaveKlub.addEventListener("mouseleave", autoPlayKlubDy);

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
mbeshtjellesiGjere.addEventListener("mouseleave", autoPlayKartaGjere);

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
mbeshtjellesiSherbimit.addEventListener("mouseleave", autoPlayKartaSherbimit);





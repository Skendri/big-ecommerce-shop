export const kartatMedha = [
    {
        id: 0,
        paragrafi1: "Ne dyqan dhe online",
        paragrafi2: "Deri me 9 gusht",
        header1: "PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?",
        header2: "PERFITO 10'000 LEKE ULJE!!",
        paragrafi3: " Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus",
        paragrafi4: "Zgjidhni nga 12 deri ne 48 keste",
        img: "https://cms-images.mmst.eu/hzxov1nxpus5/1by1aTp4QJe7wvefpLJmRZ/21beef08ce8d290864871d4030a85671/MediaMarkt_Business__1_.jpg?q=70&fm=webp&w=730&h=410"
    },
      {
        id: 1,
        paragrafi1: "Ne dyqan dhe online",
        paragrafi2: "Deri me 30 korrik",
        header1: "PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?",
        header2: "PERFITO 20'000 LEKE ULJE!!",
        paragrafi3: " Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus",
        paragrafi4: "Zgjidhni nga 12 deri ne 48 keste",
        img: "https://cms-images.mmst.eu/hzxov1nxpus5/1by1aTp4QJe7wvefpLJmRZ/21beef08ce8d290864871d4030a85671/MediaMarkt_Business__1_.jpg?q=70&fm=webp&w=730&h=410"
    },
      {
        id: 2,
        paragrafi1: "Ne dyqan dhe online",
        paragrafi2: "Deri me 14 prill",
        header1: "PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?",
        header2: "PERFITO 30'000 LEKE ULJE!!",
        paragrafi3: " Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus",
        paragrafi4: "Zgjidhni nga 12 deri ne 48 keste",
        img: "https://cms-images.mmst.eu/hzxov1nxpus5/1by1aTp4QJe7wvefpLJmRZ/21beef08ce8d290864871d4030a85671/MediaMarkt_Business__1_.jpg?q=70&fm=webp&w=730&h=410"
    },
];

const wallKartat = document.getElementById("kartat-e-gjera-klub-home");


let productKarta = " ";

kartatMedha.forEach((kartaMadhe) => {
productKarta += `
    <div id="kartaMadheID-home" class="kartaMadhe">
        <div class="kartaMadhe-kutiaInfos kartaGjere-kutia">
            <div class="kartaMadhe-info kartaGjere-info">
                <p>${kartaMadhe.paragrafi1}</p>
                <p>${kartaMadhe.paragrafi2}</p>
            </div>
            
            <div class="kartaMadhe-infoDyte kartaGjere-infoDyte">
                <h4>${kartaMadhe.header1}</h4>
                <h3>${kartaMadhe.header2}</h3>
                <p>${kartaMadhe.paragrafi3}</p>
                
                <div class="kartaMadhe-info" id="kartaGjere-infoPosht">
                    <p>${kartaMadhe.paragrafi4}</p>
                </div>
            </div>
            
        </div>
        
        <div class="kartaMadhe-foto kartaGjere-foto">
            <img src="${kartaMadhe.img}" alt="" draggable="false" />
        </div>
    </div>`

});

wallKartat.innerHTML = productKarta;






 // ---------------------------- KARTAT E PLANIT TE PARE DEKLARIMET ------------------------------------------------ //
const mbeshtjellesiGjere = document.querySelector(
  "#mbeshtjellesi-gjere-kartave-klub"
);
const kartaGjereKlub = document.querySelector("#kartat-e-gjera-klub-home");
const butonatShigjetGjere = document.querySelectorAll(
  "#butonat-e-kontrolluesit-teGjere-klub"
);
const gjersiaKartesGjere = document.querySelector("#kartaMadheID-home").offsetWidth;
const FemijetKartaveTeGjere = [...kartaGjereKlub.children];

// --------------------------------------------------------------------  KARTAT E GJERA  ---------------------//
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


// html e kartave te medha render me javascript te index.html

    // <div id="kartaMadheID" class="kartaMadhe">
    //     <div class="kartaMadhe-kutiaInfos kartaGjere-kutia">
    //         <div class="kartaMadhe-info kartaGjere-info">
    //             <p>Ne dyqan dhe online</p>
    //             <p>Deri me 9 gusht</p>
    //         </div>
            
    //         <div class="kartaMadhe-infoDyte kartaGjere-infoDyte">
    //             <h4>PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?</h4>
    //             <h3>PERFITO 10'000 LEKE ULJE!!</h3>
    //             <p>Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum
    //                 dolor sit, amet consectetur adipisicing elit. Debitis quos
    //                 eum voluptatum molestias delectus
    //             </p>
                
    //             <div class="kartaMadhe-info" id="kartaGjere-infoPosht">
    //                 <p>Zgjidhni nga 12 deri ne 48 keste</p>
    //             </div>
    //         </div>
    //     </div>
        
    //     <div class="kartaMadhe-foto kartaGjere-foto">
    //         <img src="https://cms-images.mmst.eu/hzxov1nxpus5/1by1aTp4QJe7wvefpLJmRZ/21beef08ce8d290864871d4030a85671/MediaMarkt_Business__1_.jpg?q=70&fm=webp&w=730&h=410"
    //         alt=""
    //         draggable="false" />
    //     </div>
    // </div>
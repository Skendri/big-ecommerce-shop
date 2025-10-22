import {gjersiaKartesTePare} from './sliderKartat.js';

 const kartatGreen = [
    {
        id: 0,
        img: "https://cms-images.mmst.eu/hzxov1nxpus5/71nYeekJh3cEIXITzylCen/2d4a6375488efbaf7e0d52b1a1e13d3d/teaser_web.jpg?q=88&w=658",
        paragraf1: "Ne dyqan dhe online",
        paragraf2: "Deri me 9 gusht",
        header1: "PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?",
        header2: "PERFITO 10'000 LEKE ULJE!!",
        paragraf3: "Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus",
        paragraf4: "Zgjidhni nga 12 deri ne 48 keste"
    },
    {
        id: 1,
        img: "https://cms-images.mmst.eu/hzxov1nxpus5/71nYeekJh3cEIXITzylCen/2d4a6375488efbaf7e0d52b1a1e13d3d/teaser_web.jpg?q=88&w=658",
        paragraf1: "Ne dyqan dhe online",
        paragraf2: "Deri me 9 gusht",
        header1: "PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?",
        header2: "PERFITO 20'000 LEKE ULJE!!",
        paragraf3: "Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus",
        paragraf4: "Zgjidhni nga 12 deri ne 48 keste"
    },
    {
        id:2,
        img: "https://cms-images.mmst.eu/hzxov1nxpus5/71nYeekJh3cEIXITzylCen/2d4a6375488efbaf7e0d52b1a1e13d3d/teaser_web.jpg?q=88&w=658",
        paragraf1: "Ne dyqan dhe online",
        paragraf2: "Deri me 9 gusht",
        header1: "PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?",
        header2: "PERFITO 30'000 LEKE ULJE!!",
        paragraf3: "Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus",
        paragraf4: "Zgjidhni nga 12 deri ne 48 keste"
    },
    {
        id: 3,
        img: "https://cms-images.mmst.eu/hzxov1nxpus5/71nYeekJh3cEIXITzylCen/2d4a6375488efbaf7e0d52b1a1e13d3d/teaser_web.jpg?q=88&w=658",
        paragraf1: "Ne dyqan dhe online",
        paragraf2: "Deri me 9 gusht",
        header1: "PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?",
        header2: "PERFITO 40'000 LEKE ULJE!!",
        paragraf3: "Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus",
        paragraf4: "Zgjidhni nga 12 deri ne 48 keste"
    },
    {
        id: 4,
        img: "https://cms-images.mmst.eu/hzxov1nxpus5/71nYeekJh3cEIXITzylCen/2d4a6375488efbaf7e0d52b1a1e13d3d/teaser_web.jpg?q=88&w=658",
        paragraf1: "Ne dyqan dhe online",
        paragraf2: "Deri me 9 gusht",
        header1: "PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?",
        header2: "PERFITO 50'000 LEKE ULJE!!",
        paragraf3: "Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus",
        paragraf4: "Zgjidhni nga 12 deri ne 48 keste"
    },
    {
        id: 5,
        img: "https://cms-images.mmst.eu/hzxov1nxpus5/71nYeekJh3cEIXITzylCen/2d4a6375488efbaf7e0d52b1a1e13d3d/teaser_web.jpg?q=88&w=658",
        paragraf1: "Ne dyqan dhe online",
        paragraf2: "Deri me 9 gusht",
        header1: "PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?",
        header2: "PERFITO 60'000 LEKE ULJE!!",
        paragraf3: "Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus",
        paragraf4: "Zgjidhni nga 12 deri ne 48 keste"
    },
    {
        id: 6,
        img: "https://cms-images.mmst.eu/hzxov1nxpus5/71nYeekJh3cEIXITzylCen/2d4a6375488efbaf7e0d52b1a1e13d3d/teaser_web.jpg?q=88&w=658",
        paragraf1: "Ne dyqan dhe online",
        paragraf2: "Deri me 9 gusht",
        header1: "PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?",
        header2: "PERFITO 70'000 LEKE ULJE!!",
        paragraf3: "Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus",
        paragraf4: "Zgjidhni nga 12 deri ne 48 keste"
    },
    {
        id: 7,
        img: "https://cms-images.mmst.eu/hzxov1nxpus5/71nYeekJh3cEIXITzylCen/2d4a6375488efbaf7e0d52b1a1e13d3d/teaser_web.jpg?q=88&w=658",
        paragraf1: "Ne dyqan dhe online",
        paragraf2: "Deri me 9 gusht",
        header1: "PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?",
        header2: "PERFITO 80'000 LEKE ULJE!!",
        paragraf3: "Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus",
        paragraf4: "Zgjidhni nga 12 deri ne 48 keste"
    },
    {
        id: 8,
        img: "https://cms-images.mmst.eu/hzxov1nxpus5/71nYeekJh3cEIXITzylCen/2d4a6375488efbaf7e0d52b1a1e13d3d/teaser_web.jpg?q=88&w=658",
        paragraf1: "Ne dyqan dhe online",
        paragraf2: "Deri me 9 gusht",
        header1: "PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?",
        header2: "PERFITO 90'000 LEKE ULJE!!",
        paragraf3: "Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus",
        paragraf4: "Zgjidhni nga 12 deri ne 48 keste"
    },
    {
        id: 9,
        img: "https://cms-images.mmst.eu/hzxov1nxpus5/71nYeekJh3cEIXITzylCen/2d4a6375488efbaf7e0d52b1a1e13d3d/teaser_web.jpg?q=88&w=658",
        paragraf1: "Ne dyqan dhe online",
        paragraf2: "Deri me 9 gusht",
        header1: "PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?",
        header2: "PERFITO 10'000 LEKE ULJE!!",
        paragraf3: "Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos eum voluptatum molestias delectus",
        paragraf4: "Zgjidhni nga 12 deri ne 48 keste"
    },
];


// -----------------------------------  KARTAT KLUB DEKLARIMET bacgroundi jeshil -----------------------------------------------------//
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
// -----------------------------------  KARTAT KLUB DEKLARIMET bacgroundi jeshil -----------------------------------------------------//


const kartatGreenContainer = document.getElementById("kartat-e-medha-klub");
kartatGreenContainer.innerHTML = '';

kartatGreen.forEach((greenKart, id) => {
    const diviKrijuar = document.createElement("div");
    diviKrijuar.classList.add( 'kartaMadhe');
    diviKrijuar.id = id;

    const fotoDiv = document.createElement("div");
    fotoDiv.classList.add("kartaMadhe-foto");

    const img = document.createElement("img");
    img.src = greenKart.img;
    img.alt = "";
    img.draggable = false;
    fotoDiv.appendChild(img);

    const kutiaInfosDiv = document.createElement("div");
    kutiaInfosDiv.classList.add("kartaMadhe-kutiaInfos");

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("kartaMadhe-info");
    infoDiv.innerHTML = `<p>${greenKart.paragraf1}</p> <p>${greenKart.paragraf2}</p>`;

    const infoDiv2 = document.createElement("div");
    infoDiv2.classList.add("kartaMadhe-infoDyte");
    infoDiv2.innerHTML = `
    <h4>${greenKart.header1}</h4> 
    <h3>${greenKart.header2}</h3>  
    <p>${greenKart.paragraf3}</p>
    <div class="kartaMadhe-info">
      <p>${greenKart.paragraf4}</p>
    </div>
    `;

    kutiaInfosDiv.appendChild(infoDiv);
    kutiaInfosDiv.appendChild(infoDiv2);

    diviKrijuar.appendChild(fotoDiv);
    diviKrijuar.appendChild(kutiaInfosDiv);
    kartatGreenContainer.append(diviKrijuar);
});



// ---------------------------------------  KARTAT KLUB bacgroundi jeshil  ----------------------------------------------------------//

// FemijetKartaveTeKlub.slice(-cardPerKlub)
//   .reverse()
//   .forEach((card) => {
//     kartatEMedhaKlub.insertAdjacentHTML("afterbegin", card.outerHTML);
//   });

// FemijetKartaveTeKlub.slice(0, -cardPerKlub).forEach((card) => {
//   kartatEMedhaKlub.insertAdjacentHTML("beforeend", card.outerHTML);
// });

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
// ---------------------------------------  KARTAT KLUB bacgroundi jeshil  ----------------------------------------------------------//







            // <div class="kartaMadhe">
            //   <div class="kartaMadhe-foto">
            //     <img
            //       src="https://cms-images.mmst.eu/hzxov1nxpus5/71nYeekJh3cEIXITzylCen/2d4a6375488efbaf7e0d52b1a1e13d3d/teaser_web.jpg?q=88&w=658"
            //       alt=""
            //       draggable="false"
            //     />
            //   </div>

            //   <div class="kartaMadhe-kutiaInfos">
            //     <div class="kartaMadhe-info">
            //       <p>Ne dyqan dhe online</p>
            //       <p>Deri me 9 gusht</p>
            //     </div>

            //     <div class="kartaMadhe-infoDyte">
            //       <h4>PSE TE ZGJIDHNI SAMSUNG AI PER SHTEPIN TUAJ?</h4>
            //       <h3>PERFITO 10'000 LEKE ULJE!!</h3>
            //       <p>
            //         Per cdo blerje Samsung Galaxy Z FOLD6/ Z FLIP6 Lorem ipsum
            //         dolor sit, amet consectetur adipisicing elit. Debitis quos
            //         eum voluptatum molestias delectus
            //       </p>

            //       <div class="kartaMadhe-info">
            //         <p>Zgjidhni nga 12 deri ne 48 keste</p>
            //       </div>
            //     </div>
            //   </div>
            // </div> 
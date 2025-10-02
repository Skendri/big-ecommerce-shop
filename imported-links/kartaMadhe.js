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

const wallKartat = document.getElementById("kartat-e-gjera-klub");


let productKarta = " ";

kartatMedha.forEach((kartaMadhe, id) => {
productKarta += `
    <div id="kartaMadheID" class="kartaMadhe">
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
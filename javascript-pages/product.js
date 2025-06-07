// image slider at product.php
            // Array to store image sources
            const images = [
                "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_134805472?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402",
                "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_134805473?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402",
                "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_134805474?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402"
            ];

            let currentImageIndex = 0;

            // Function to update the main image
            function updateMainImage() {
                const mainImage = document.getElementById('slider-image');
                mainImage.src = images[currentImageIndex];
            }

            // Function for next image
            function nextImg() {
                currentImageIndex = (currentImageIndex + 1) % images.length;
                updateMainImage();
            }

            // Function for previous image
            function prevImg() {
                currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
                updateMainImage();
            }

            // Function to set the main image by clicking thumbnails
            function setImage(thumbnail) {
                const src = thumbnail.src;
                document.getElementById('slider-image').src = src;
                currentImageIndex = images.indexOf(src);
            }

            // Initialize the slider
            //updateMainImage();


        // image slider at product.php


        // // ---------------------- PRODUCT BUTTON -------------------------- //

// ---------------------- BUTTON Toggle -------------------------- //

function infoProduktitShow() {
  if (!infoProduktitDukshme) {
      for (let i = 0; i < infoProduktit.length; i++) {
      infoProduktit[i].style.visibility = "visible";
      infoProduktit[i].style.opacity = 1;
      infoProduktit[i].style.position = "unset";
      }
      infoProduktitDukshme = true;
  } else {
      for (let i = 0; i < infoProduktit.length; i++) {
      infoProduktit[i].style.visibility = "hidden";
      infoProduktit[i].style.opacity = 0;
      infoProduktit[i].style.position = "absolute";
      }
      infoProduktitDukshme = false;
  }
  }

//   for (let i = 0; i < pershkrimiProduktitBtn.length; i++) {
//   pershkrimiProduktitBtn[i].addEventListener("click", infoProduktitShow);
//   }

//   document.addEventListener("click", (event) => {
//   if (
//       !event.target.closest(".info-produktit") &&
//       !event.target.closest(".pershkrimi-produktit")
//   ) {
//       if (infoProduktitDukshme) {
//       for (let i = 0; i < infoProduktit.length; i++) {
//           infoProduktit[i].style.visibility = "hidden";
//           infoProduktit[i].style.opacity = 0;
//           infoProduktit[i].style.position = "unset";
//       }
//       infoProduktitDukshme = false;
//       }
//   }
//   });

/////////////////////                     slideri i ri                      ////////////////////////////////

const nextEl = document.querySelector(".next");

const prevEl = document.querySelector(".prev");

const imgsEl = document.querySelectorAll("img");

const imageContainerEl = document.querySelector(".image-container");

let currentImg = 1;

let timeout;

nextEl.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

prevEl.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

updateImg();

function updateImg() {
  if (currentImg > imgsEl.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgsEl.length;
  }
  imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}

//         doubel landing page

const containerEl = document.querySelector(".container");

const leftEl = document.querySelector(".left");
const rightEl = document.querySelector(".right");

leftEl.addEventListener("mouseenter", () => {
  containerEl.classList.add("active-left");
});

leftEl.addEventListener("mouseleave", () => {
  containerEl.classList.remove("active-left");
});

rightEl.addEventListener("mouseenter", () => {
  containerEl.classList.add("active-right");
});

rightEl.addEventListener("mouseleave", () => {
  containerEl.classList.remove("active-right");
});
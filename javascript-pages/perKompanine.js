// ----------------------------------------------- KARTAT E MEDHA SLIDER DEKLARIMET te perKompanine.php ------------------------------------------------ /
        const mbeshtjellesiKartaveGlobe = document.querySelector("#mbeshtjellesi-kartaveGlobe");
        const kartatEMedhaGlobe = document.querySelector("#kartat-e-medhaGlobe");
        const butonatShigjetGlobe = document.querySelectorAll(
        "#butonat-e-kontrolluesit button"
        );
        const gjersiaKartesTePareGlobe = document.querySelector(".kartaMadheGlobe").offsetWidth;
        const FemijetKartaveTeMedhaGlobe = [...kartatEMedhaGlobe.children];



            // ------------------------------------------------- KARTAT E MEDHA SLIDER -------------------------------------------------------- /

            let cardPerPamjeGlobe = Math.round(kartatEMedhaGlobe.offsetWidth / gjersiaKartesTePareGlobe);

            // 4 x 4 slidera
            // FemijetKartaveTeMedhaGlobe.slice(-cardPerPamjeGlobe)
            // .reverse()
            // .forEach((card) => {
            //     kartatEMedhaGlobe.insertAdjacentHTML("afterbegin", card.outerHTML);
            // });

            // FemijetKartaveTeMedhaGlobe.slice(0, -cardPerPamjeGlobe).forEach((card) => {
            // kartatEMedhaGlobe.insertAdjacentHTML("beforeend", card.outerHTML);
            // });

            let isDraggingGlobe = false,
            startXGlobe,
            rrotulloMajtasGlobe,
            timeoutIDGlobe;

            butonatShigjetGlobe.forEach((btn) => {
            btn.addEventListener("click", () => {
                kartatEMedhaGlobe.scrollLeft +=
                btn.id === "majtas" ? -gjersiaKartesTePareGlobe : gjersiaKartesTePareGlobe;
            });
            });

            const dragStartGlobe = (e) => {
            isDraggingGlobe = true;
            kartatEMedhaGlobe.classList.add("terheqje");
            startXGlobe = e.pageX;
            rrotulloMajtasGlobe = kartatEMedhaGlobe.scrollLeft;
            };

            const draggingGlobe = (e) => {
            if (!isDraggingGlobe) return;
            kartatEMedhaGlobe.scrollLeft = rrotulloMajtasGlobe - (e.pageX - startXGlobe);
            };

            const dragStopGlobe = () => {
            isDraggingGlobe = false;
            kartatEMedhaGlobe.classList.remove("terheqje");
            };

            const autoPlayGlobe = () => {
            if (window.innerWidth < 800) return;
            timeoutIDGlobe = setTimeout(
                () => (kartatEMedhaGlobe.scrollLeft += gjersiaKartesTePareGlobe),
                1000
            );
            };
            autoPlayGlobe();

            const infiniteScrollGlobe = () => {
            if (kartatEMedhaGlobe.scrollLeft === 0) {
                kartatEMedhaGlobe.classList.add("jo-transition");
                kartatEMedhaGlobe.scrollLeft =
                kartatEMedhaGlobe.scrollWidth - 2 * kartatEMedhaGlobe.offsetWidth;
                kartatEMedhaGlobe.classList.remove("jo-transition");
            } else if (
                Math.ceil(kartatEMedhaGlobe.scrollLeft) ===
                kartatEMedhaGlobe.scrollWidth - kartatEMedhaGlobe.offsetWidth
            ) {
                kartatEMedhaGlobe.classList.add("jo-transition");
                kartatEMedhaGlobe.scrollLeft = kartatEMedhaGlobe.offsetWidth;
                kartatEMedhaGlobe.classList.remove("jo-transition");
            }
            clearTimeout(timeoutIDGlobe);
            if (mbeshtjellesiKartaveGlobe.matches(":hover")) autoPlayGlobe();
            };

            kartatEMedhaGlobe.addEventListener("mousedown", dragStartGlobe);
            kartatEMedhaGlobe.addEventListener("mousemove", draggingGlobe);
            kartatEMedhaGlobe.addEventListener("mouseup", dragStopGlobe);
            kartatEMedhaGlobe.addEventListener("scroll", infiniteScrollGlobe);
            mbeshtjellesiKartaveGlobe.addEventListener("mouseenter", () =>
            clearTimeout(timeoutIDGlobe)
            );
            mbeshtjellesiKartaveGlobe.addEventListener("mouseleave", autoPlayGlobe);



        // -------------- KARTAT E MEDHA SLIDER MediaQUERY ---------------------------------- /


//         const checkScreenWidth = () => {
//                 const screenWidth = window.innerWidth

//                 if(screenWidth >= 1024 && screenWidth <= 1440) {
//                     butonat.style.display = "block" 
//                 } else {
//                     butonat.style.display = "none" 
//                 }
//             }

//            checkScreenWidth();
//            //Add event listener for window resize
//             window.addEventListener('resize', checkScreenWidth)

// const butonat = document.querySelector(".butonat-mediaQuery")


        const container = document.querySelector('#kartat-e-medha-klub'); // The container of carousel items
const items = document.querySelectorAll('.kartaMadheKompania'); // All carousel items
const leftButton = document.getElementById('butoni-majtas'); // Left button
const rightButton = document.getElementById('butoni-djathtas'); // Right button

const itemWidth = items[0].offsetWidth; // Get the width of a single item
let isUserDragging = false, UserstartX, scrollLeft;

const UserautoPlay = () => {
    if (window.innerWidth < 800) return;
    setTimeout(() => container.scrollLeft += itemWidth, 1000);
};

// Auto-scroll functionality (infinite loop)
const userinfiniteScroll = () => {
    const maxScroll = container.scrollWidth - container.offsetWidth;
    if (container.scrollLeft === 0) {
        container.classList.add("no-transition");
        container.scrollLeft = maxScroll - itemWidth;
        container.classList.remove("no-transition");
    } else if (container.scrollLeft === maxScroll) {
        container.classList.add("no-transition");
        container.scrollLeft = itemWidth;
        container.classList.remove("no-transition");
    }
    if (container.matches(":hover")) userautoPlay();
};

// Button controls for left/right scroll
leftButton.addEventListener("click", () => {
    container.scrollLeft -= itemWidth; // Scroll left
});

rightButton.addEventListener("click", () => {
    container.scrollLeft += itemWidth; // Scroll right
});

// Dragging functionality
container.addEventListener("mousedown", (e) => {
    isUserDragging = true;
    UserstartX = e.pageX;
    scrollLeft = container.scrollLeft;
    container.classList.add("dragging");
});

container.addEventListener("mousemove", (e) => {
    if (!isUserDragging) return;
    const distance = e.pageX - UserstartX;
    container.scrollLeft = scrollLeft - distance;
});

container.addEventListener("mouseup", () => {
    isUserDragging = false;
    container.classList.remove("dragging");
});

container.addEventListener("scroll", userinfiniteScroll);

// Auto-play on hover
container.addEventListener("mouseenter", () => clearTimeout(UserautoPlay));
container.addEventListener("mouseleave", UserautoPlay);

// Initialize auto-play
UserautoPlay();


             // -------------- KARTAT E MEDHA SLIDER MediaQUERY ---------------------------------- /





         //                      navi perKompanine page

         const navItem = document.querySelectorAll(".nav-item");

         function setActiveLink() {
            let fromTop = window.scrollY;

            navItem.forEach(link => {
                let section = document.querySelector(link.getAttribute("href"));

                if(section.offsetTop <= fromTop + 50 && section.offsetTop + section.offsetHeight > fromTop + 50 ) {
                    navItem.forEach(item => item.classList.remove("active"));
                    link.classList.add("active");
                } 
            } )

         }

         window.addEventListener("scroll", setActiveLink);
         setActiveLink()

         const navBar = document.querySelector(".navi-perKompanine");
const offset = navBar.offsetTop; // Get initial position of navbar

window.addEventListener("scroll", function () {
    if (window.scrollY >= offset) {
        navBar.classList.add("fixed");
    } else {
        navBar.classList.remove("fixed");
        navItem.forEach(item => item.classList.remove("active"));
    }

});
     //                      navi perKompanine page



     const navItems = document.querySelectorAll(".nav-item");

function updateVisibleNavLink() {
    let fromTop = window.scrollY;
    let activeIndex = 0;

    navItems.forEach((link, index) => {
        let section = document.querySelector(link.getAttribute("href"));

        if (section && section.offsetTop - 100 <= fromTop) {
            activeIndex = index; // Update the index of the currently visible link
        }
    });

    // Hide all links
    navItems.forEach(link => link.classList.remove("active"));

    // Show only the active link
    navItems[activeIndex].classList.add("active");
}

// Run on scroll & page load
window.addEventListener("scroll", updateVisibleNavLink);
document.addEventListener("DOMContentLoaded", updateVisibleNavLink);
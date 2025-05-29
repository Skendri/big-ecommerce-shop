//  hoveri te boksi suporti-klientit.php

        const kartat = document.querySelectorAll('.kartat-suportit');

        kartat.forEach( function(karta) {

        const hoveri = karta.querySelector('.hoveri');

        karta.addEventListener("mouseenter", function() {
            hoveri.style.display = "block";
        })

        karta.addEventListener("mouseleave", function() {
            hoveri.style.display = "none"
        })

        })

        //  hoveri te boksi suporti-klientit.php


        //  text carousel te suporti-klientit.php
        // using DOMContentLoaded to ensure your JavaScript runs only after the DOM has been fully loaded:

        document.addEventListener('DOMContentLoaded', function() {
            let tekstiSlide = document.querySelector("#carousel");

        

            teksti = tekstiSlide.querySelectorAll(".text");


            const prev = document.getElementById("prevBtn");
            const next = document.getElementById("nextBtn");


            let counter = 2;
            const size = teksti[0].clientWidth;

            //to set the slide one as the first slide instead of the clone
            tekstiSlide.style.transform = `translateX(-${size * counter}px)`;

            //looping the slider every 2s
            setInterval(() => {
                if(counter >= teksti.length -1) return;
                
                tekstiSlide.style.transition = `transform 0.8s ease`;
                counter++;
                tekstiSlide.style.transform = `translateX(-${size * counter}px)`; 
                
            }, 2000);

            tekstiSlide.addEventListener('transitionend', () => {
                if(teksti[counter].id === 'lastClone'){
                    tekstiSlide.style.transition = `none`;
                counter = teksti.length - 2;
                tekstiSlide.style.transform = `translateX(-${size * counter}px)`;
                }

                if(teksti[counter].id === 'firstClone'){
                    tekstiSlide.style.transition = `none`;
                    counter = teksti.length - counter;
                    tekstiSlide.style.transform = `translateX(-${size * counter}px)`;
                }  
            });

            next.addEventListener('click', ()=>{
                if(counter >= teksti.length -1) return;

                tekstiSlide.style.transition = `transform 0.4s ease`;
                
                counter++;
                
                tekstiSlide.style.transform = `translateX(-${size * counter}px)`;
            });

            prev.addEventListener('click', ()=>{
                if(counter <= 0) return;
                tekstiSlide.style.transition = `transform 0.4s ease`;
                counter--;
                tekstiSlide.style.transform = `translateX(-${size * counter}px)`;
            });

        });      

        //text carousel te suporti-klientit.php
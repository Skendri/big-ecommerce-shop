    // harta e dyqanetTona.php



        document.addEventListener('DOMContentLoaded', function() {
        
        console.log(typeof L)

        var map = L.map('map').setView([41.327953, 19.819025], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);


        var marker = L.marker([41.327953, 19.819025]).addTo(map); // Tirana/ Albania
        var marker1 = L.marker([41.323423, 19.794794]).addTo(map); // Qendra Globe, Rruga “Kavajës”, Tiranë
        var marker1 = L.marker([41.332660442617524, 19.803656636401428]).addTo(map); // Tiranë, Toptani Shopping Center
        var marker1 = L.marker([41.32745597787017, 19.8223554548262]).addTo(map); // Durrës, Rrethrrotullimi i stacionit të trenit
        var marker1 = L.marker([41.31800392251855, 19.453674977939862]).addTo(map); //  Fier, Rruga “Jakov Xoxa”, pallati pranë Piacës
        var marker1 = L.marker([40.455441, 19.482135]).addTo(map); // Vlorë, Lagjia “Pavarësia”, Rr “Kosova, përballë Hyrjes së Portit
        var marker1 = L.marker([39.87476544212163, 20.00772966826569]).addTo(map); //Sarandë, Lagjia nr. 1, rruga Skënderbeu, nr. 131 mbi Harqet
        var marker1 = L.marker([40.61589734557208, 20.780816698978903 ]).addTo(map); // Korçë, përballë Katedrales.
        var marker1 = L.marker([42.070166199853354, 19.51409856834659]).addTo(map); // Shkodër, Rruga "Qemal Draçini"
        var marker1 = L.marker([41.330618451834894, 19.83980957412795]).addTo(map); // Rruga "Ali Demi", Kompleksi Vind, Ish Uzina Gjeologjike
        var marker1 = L.marker([41.38119919413547, 19.763058075371056]).addTo(map); // Rruga Milano, Kamëz 1030
        });


        // harta e dyqanetTona.php

        // qytetet e dyqanetTona.php


        // Function to toggle visibility of content
         function toggleSection(element) {
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

        // qytetet e dyqanetTona.php

        // harta e dyqanetTona.php
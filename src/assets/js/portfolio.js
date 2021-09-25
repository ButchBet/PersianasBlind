"use strict"

// Require the json file 
// const option = {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     mode: "cors",
//     cache: "default"
// }

// let MyRequest = new Request("../json/porfolio", option)

// let products = fetch(MyRequest);

// products.then( response  => {
//     if(response.ok) {
//         return response.json();
//     } else {
//         throw new Error(response.status);
//     }
// })

// .then( response => {
//     generatePortItems(response);
// })

// .catch( error => {
//     console.error(error);
// });


// To generate the items using the response json file
function generatePortItems(data) {
    // Container
    let mainDiv = document.getElementById("mainDiv");

    data.forEach( category => {
        category.elements.forEach( element => {
            // portfolio-item div
            let firstDiv = document.createElement("div");
            
            firstDiv.classList.add("col-lg-4");

            firstDiv.classList.add("col-lg-6");

            firstDiv.classList.add("portfolio-item");
            
            firstDiv.classList.add(`filter-${category.category.toLowerCase()}`);

            // img
            let img = document.createElement("img");

            img.classList.add("img-fluid");

            img.alt = `${element.name} product image`;

            img.src = element.imgURL[0];

            // portfolio-info div
            let secondDiv = document.createElement("div");

            secondDiv.classList.add("portfolio-info");

            // h4
            let h4 = document.createElement("h4");

            h4.innerHTML = element.name;

            // p
            let p = document.createElement("p");

            p.innerHTML = category.category;

            // first a
            let firstA = document.createElement("a");

            firstA.href = element.imgURL[0];

            firstA.dataGallery = "portfolioGallery";

            firstA.classList.add("portfolio-lightbox");

            firstA.classList.add("preview-link");

            firstA.title = element.name;

            // first i
            let firstI = document.createElement("i");

            firstI.classList.add("bx");

            firstI.classList.add("bx-plus");

            // second a
            let secondA = document.createElement("a");

            secondA.href = "portfolio-details.html";

            secondA.classList.add("details-link");

            secondA.title = "More Details";

            // second i
            let secondI = document.createElement("i");

            secondI.classList.add("bx");

            secondI.classList.add("bx-link");

            // append first and second i at its respectively a tag element
            firstA.appendChild(firstI);

            secondA.appendChild(secondI);

            // append first and second a, h4 and p inside portfolio-info div
            secondDiv.appendChild(h4);

            secondDiv.appendChild(p);
            
            secondDiv.appendChild(firstA);
            
            secondDiv.appendChild(secondA);

            // apend img and portfolio-info div or secondDiv inside the first div or portfolio-item div
            firstDiv.appendChild(img);

            firstDiv.appendChild(secondDiv);

            // append first div inside mainDiv
            mainDiv.appendChild(firstDiv);
        });
    });
}

var myData = JSON.parse(data);

generatePortItems(myData);
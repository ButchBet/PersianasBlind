"use strict"

// Require the json file 
const option = {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
    mode: "cors",
    cache: "default"
}

let MyRequest = new Request("../json/porfolio", option)

let products = fetch(MyRequest);

products.then( response  => {
    if(response.ok) {
        return response.json();
    } else {
        throw new Error(response.status);
    }
})

.then( response => {
    generatePortItems(response);
})

.catch( error => {
    console.error(error);
});


// To generate the items using the response json file
function generatePortItems(file) {
    file.products.forEach(element => {
        console.log(element.category);
        
        element.elements.forEach( newElements => {
            console.log(newElements.name);
        })
    });
}
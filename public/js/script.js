"use strict";


// Declare a variable for image tags
let output ="";

// Declare a variable for the Gallery HTML element.
const gallery = document.querySelector(".gallery");

// Loop to construct image elements.
imageArray.forEach(function(charactor) {

  output += 
  `
    <a href="${charactor.linkURL}">
    <figure id="champion-${charactor.id}">
      <img src="${charactor.pathURL}" alt="${charactor.title}" width="${charactor.width}" height="${charactor.height}">
      <figcaption>${charactor.title}</figcaption>
    </figure>
    </a>
  `;

});

// Update the HTML DOM model with the image tags. 
gallery.innerHTML = output;




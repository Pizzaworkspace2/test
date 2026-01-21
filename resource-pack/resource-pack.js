document.addEventListener('DOMContentLoaded', (event) => {

const pack = true;

if (pack) {
  prompt("There is a resource pack installed, type ok");
}

let data;
let res;
const title = document.getElementById('titlescreen');

async function getJSON() {
  res = await fetch(`resource-pack.json`);
  data = await res.json();
}

getJSON().then(() => {
title.style.background = data.panorama;

  //change this if needed
//have fun!

  
  });
});

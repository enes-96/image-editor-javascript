"use strict";

const img = document.getElementById("img");

const blurFilter = document.getElementById("blur-slider");

blurFilter.addEventListener("input", (e) => {
  img.style.filter = `blur(${blurFilter.value}px)`;
});

const contrastFilter = document.getElementById("contrast-slider");

contrastFilter.addEventListener("input", (e) => {
  img.style.filter = `contrast(${contrastFilter.value}%`;
});

"use strict";

const img = document.getElementById("img");

const blurFilter = document.getElementById("blur-slider");
const contrastFilter = document.getElementById("contrast-slider");
const grayFilter = document.getElementById("gray-slider");
const hueFilter = document.getElementById("hue-slider");
const invertFilter = document.getElementById("invert-slider");
const opacityFilter = document.getElementById("opacity-slider");
const saturateFilter = document.getElementById("saturate-slider");
const sepiaFilter = document.getElementById("sepia-slider");

blurFilter.addEventListener("input", (e) => {
  const blurWrapper = document.querySelector(".blur-wrapper");
  blurWrapper.style.filter = `blur(${blurFilter.value}px)`;
});

contrastFilter.addEventListener("input", (e) => {
  const contrastWrapper = document.querySelector(".contrast-wrapper");
  contrastWrapper.style.filter = `contrast(${contrastFilter.value}%)`;
});

grayFilter.addEventListener("input", (e) => {
  const grayWrapper = document.querySelector(".gray-wrapper");
  grayWrapper.style.filter = `grayscale(${grayFilter.value}%)`;
});

hueFilter.addEventListener("input", () => {
  const hueWrapper = document.querySelector(".hue-wrapper");
  hueWrapper.style.filter = `hue-rotate(${hueFilter.value}deg)`;
});

invertFilter.addEventListener("input", () => {
  const invertWrapper = document.querySelector(".invert-wrapper");
  invertWrapper.style.filter = `invert(${invertFilter.value}%)`;
});

opacityFilter.addEventListener("input", () => {
  const opacityWrapper = document.querySelector(".opacity-wrapper");
  opacityWrapper.style.filter = `opacity(${opacityFilter.value}%)`;
});

saturateFilter.addEventListener("input", () => {
  const saturadeWrapper = document.querySelector(".saturate-wrapper");
  saturadeWrapper.style.filter = `saturate(${saturateFilter.value})`;
  console.log(`saturate(${saturateFilter.value})`);
});

sepiaFilter.addEventListener("input", () => {
  const sepiaWrapper = document.querySelector(".sepia-wrapper");
  sepiaWrapper.style.filter = `sepia(${sepiaFilter.value}%)`;
  console.log(`sepia(${sepiaFilter.value})`);
});

const imgBorder = document.getElementById("border-color");
imgBorder.addEventListener("input", () => {
  img.style.border = `12px solid ${imgBorder.value}`;
});

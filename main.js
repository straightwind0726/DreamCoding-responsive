"use strict";

const menu = document.querySelector(".menu");
const link = document.querySelector(".link");
const btn = document.querySelector(".hamberger");

btn.addEventListener("click", () => {
    menu.classList.toggle("active");
    link.classList.toggle("active");
})
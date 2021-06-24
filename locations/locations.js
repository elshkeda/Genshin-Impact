"use strict";

let slider = document.querySelector(".slider");
let slide = document.querySelectorAll(".slide");
let right = document.querySelector(".right");
let left = document.querySelector(".left");
let slideIndex = 1;

function showSlides(n){
    if (n > slide.length){
        slideIndex = 1;
    };
    if (n < 1){
        slideIndex = slide.length;
    };
    slide.forEach(el => el.style.display = "none");
    slide[slideIndex - 1].style.display = "block";
};

showSlides(slideIndex);

function nextSlide(){
    showSlides(slideIndex += 1);
};

function prevSlide(){
    showSlides(slideIndex -= 1);
};

right.onclick = function(){nextSlide()};
left.onclick = function(){prevSlide()};

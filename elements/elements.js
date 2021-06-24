"use strict"
let tabWrapper = document.querySelector(".tabWrapper");
let tab = document.querySelectorAll(".tab");
let content = document.querySelectorAll(".content");

function hideContent(a) {
    for (let i = a; i < content.length; i++){
        content[i].style.display = "none";
        tab[i].style.color = "white";
    };
};

hideContent(1);

function showContent (b) {
    if (content[b].style.display == "none"){
        content[b].style.display = "block";
        tab[b].style.color = "red";
    };
};

tabWrapper.addEventListener("click", function(event){
    if(event.target && event.target.classList.contains("tab")){
        for (let i = 0; i < tab.length; i++){
            if (event.target == tab[i]){
                hideContent(0);
                showContent(i);
                break;
            };
        };
    };
});


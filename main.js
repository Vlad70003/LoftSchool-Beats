
// всплывающее меню секции offers
let settingGear = document.querySelector(".settings__gear");
let settingList = document.querySelector(".settings__list");

settingGear.addEventListener("mouseover", function(event){
    if(event){
        settingList.style.display = "block";
    }  
})
settingGear.addEventListener("mouseout", function(event){
    if(event){
        settingList.style.display = "none";
    }  
})

// всплывающее меню Гамбургер
let hamburger = document.querySelector(".hamburger");
let hideMenu = document.querySelector(".hide-menu");
let hideMenuClose = document.querySelector(".hide-menu__close");

hamburger.addEventListener("click", function(event){
    if(event){
        hideMenu.style.display = "block";
    }  
})

hideMenuClose.addEventListener("click", function(event){
    if(event){
        hideMenu.style.display = "none";
    }
})
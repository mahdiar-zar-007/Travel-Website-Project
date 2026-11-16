const navBtn = document.querySelector(".nav_btn")
const navMenuOpen = document.querySelector(".nav_menu")

let navOpen = false;

navBtn.addEventListener("click", function(){
    if (navOpen){
        navBtn.classList.remove("nav_btn_open")
        navOpen = false
        navMenuOpen.classList.remove("nav_menu_open")
    } else{
        navBtn.classList.add("nav_btn_open")
        navOpen = true
        navMenuOpen.classList.add("nav_menu_open")
    }
})
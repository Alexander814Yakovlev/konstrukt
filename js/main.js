let navMenu = document.querySelector(".header__nav-menu")
let burger = document.querySelector(".burger")


burger.onclick = function () {
    burger.classList.toggle("open")
    document.querySelector(".nav__border>.container").appendChild(navMenu)
    if (burger.classList.contains("open")) {
        navMenu.style.display = "flex"
    } else {
        navMenu.style.display = "none"
    }
    
}

window.addEventListener('resize', function(e) {
    if (document.body.offsetWidth > 576) {
        document.querySelector(".header__nav").appendChild(navMenu)
        navMenu.style.display = 'flex'
    } else {
        navMenu.style.display = "none"
    }
})

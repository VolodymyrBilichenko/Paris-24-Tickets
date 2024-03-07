//header carte menu
const CarteItem = document.querySelectorAll('.carte__item');

CarteItem.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('carte__active');     
    })
})

//header scrolled

let header = document.querySelector(".header");
let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        header.classList.add("scrolled");
    } else if (scrollTop <= 0) {
        header.classList.remove("scrolled");
    }
    lastScrollTop = scrollTop;
});

//banner menu mob

const MenuMob = document.querySelector('.menu__more');
const MenuMobBody = document.querySelector('.menu__more__body');

MenuMob.addEventListener('click', () => {
    MenuMobBody.classList.toggle('active-b');
    MenuMob.classList.toggle('active-h');
})
//header carte menu
const CarteItem = document.querySelectorAll('.carte__item');

CarteItem.forEach(item => {
    item.addEventListener('click', () => {

        !item.classList.contains('carte__active') && document.querySelectorAll('.carte__item.carte__active').forEach(item => item.classList.remove('carte__active'))

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




document.querySelector('body').addEventListener('click', function(event) {

    const clickOutside = (buttonClass, blockClass, funcClose) => {

        if(event.target.closest(blockClass) === null && event.target.closest(buttonClass) === null) {
            funcClose()
        }

    }


    clickOutside('.carte__item__head', '.carte__item__body', () => {
        console.log(document.querySelectorAll('.carte__item.carte__active'))
        document.querySelectorAll('.carte__item.carte__active').forEach(item => item.classList.remove('carte__active'))
    })

    clickOutside('.menu__more', '.menu__more__body', () => {
        document.querySelectorAll('.menu__more').forEach(item => item.classList.remove('active-h'))
        document.querySelectorAll('.menu__more__body').forEach(item => item.classList.remove('active-b'))
    })

})







document.querySelector('.header__burger').onclick = () => {
    document.querySelector('.modal__menu').classList.add('_active')
}
document.querySelector('.modal__menu_close').onclick = () => {
    document.querySelector('.modal__menu').classList.remove('_active')
}



const resizeMenu = () => {
    const menuWidth = document.querySelector(".banner__menu").clientWidth
    const menuHiddenItemsList = document.querySelectorAll(".banner__menu li:not(._hidden)")
    const menuItemsList = document.querySelectorAll(".banner__menu li")
    const itemRightPosition = menuHiddenItemsList[menuHiddenItemsList.length - 1].getBoundingClientRect().x + menuHiddenItemsList[menuHiddenItemsList.length - 1].getBoundingClientRect().width - 20
    const buttonMoreItems = document.querySelector(".banner__menu_mob")
    const moreItemslist = document.querySelectorAll(".menu__more__body li")

    if(menuHiddenItemsList.length !== menuItemsList.length) {
        buttonMoreItems.classList.add("_active")
    } else {
        buttonMoreItems.classList.remove("_active")
    }

    if(itemRightPosition < menuWidth) {
        menuHiddenItemsList[menuHiddenItemsList.length - 1].style.display = "none"
        menuHiddenItemsList[menuHiddenItemsList.length - 1].classList.add('_hidden')

        moreItemslist[menuHiddenItemsList.length - 1].classList.add('_show')

    } else if(itemRightPosition - menuWidth > 120) {
        menuItemsList[menuHiddenItemsList.length].style.display = "block"
        menuItemsList[menuHiddenItemsList.length].classList.remove('_hidden')

        moreItemslist[menuHiddenItemsList.length].classList.remove('_show')
    }
}

window.addEventListener('resize', function(event) {

    resizeMenu()

})

for(let i = 0; i < 10; i++) {
    resizeMenu()
}
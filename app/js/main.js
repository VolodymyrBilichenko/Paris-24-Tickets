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
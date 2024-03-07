//header carte menu
const CarteItem = document.querySelectorAll('.carte__item');

CarteItem.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('carte__active');     
    })
})

//banner menu mob

const MenuMob = document.querySelector('.menu__more');
const MenuMobBody = document.querySelector('.menu__more__body');

MenuMob.addEventListener('click', () => {
    MenuMobBody.classList.toggle('active-b');
    MenuMob.classList.toggle('active-h');
})
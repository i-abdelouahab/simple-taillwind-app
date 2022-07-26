const displayMenu = document.querySelector('#displayMenu');
const menu = document.querySelector('#menu');

displayMenu.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});
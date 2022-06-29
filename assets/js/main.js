const headerToggle = document.querySelector('#toggle-burguer');
const burguerMove = document.querySelector('.burguer-container');
const sidebar = document.querySelector('aside');
const sidebarBtn = document.querySelector('.sidebar-toggle');
const iconText = document.querySelector('.nav-right');
const blob = document.querySelector('.blob');
const text = document.querySelectorAll('.text');
const nightModeDiv = document.querySelector('.night-mode');
const nightMode = document.querySelector('.label');
const nightModeIcons = document.querySelectorAll('.nm-btn');
const body = document.querySelector('body');
const main = document.querySelector('main');

//Sidebar Minimize
sidebarBtn.addEventListener('click', (e) => {
    sidebar.classList.toggle('sidebar-move');

    sidebarBtn.classList.toggle('sidebar-control');

    iconText.classList.toggle('appear');

    text.forEach((el) => {
        el.classList.toggle('visible');
    })

    nightMode.classList.toggle('nightmode-close');
    blob.classList.toggle('blob-close');
    nightModeIcons.forEach((el) => {
        el.classList.toggle('disappear');
    });

    main.classList.toggle('main-push');
});

//Nightmode
nightMode.addEventListener('click', () => {
    console.log('night')
    body.classList.toggle('night');
});

//Sidebar Mobile
/*function sidebarMobile(w) {
    if(w.matches) {
        sidebar.classList.add('disappear');
    }
}
let width = window.matchMedia("(max-width: 768px)")
sidebarMobile(width);
width.addEventListener(sidebarMobile);
*/

//Burguer Toggle
headerToggle.addEventListener('click', (e) => {
    sidebar.classList.toggle('appear');
    sidebar.classList.toggle('sidebar-move');
    text.forEach((el) => {
        el.classList.toggle('visible');
    })

})


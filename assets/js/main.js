const headerToggle = document.querySelector('#toggle-burguer');
const burguerMove = document.querySelector('.burguer-container');
const sidebar = document.querySelector('aside');
const sidebarBtn = document.querySelector('.sidebar-toggle');
const iconText = document.querySelector('.nav-right');
const blob = document.querySelector('.blob');
const text = document.querySelectorAll('.text');
const nightMode = document.querySelector('.label');
const nightModeIcons = document.querySelectorAll('.nm-btn');
const topic = document.querySelectorAll('.topic');
const content = document.querySelectorAll('.content');
const body = document.querySelector('body');
const main = document.querySelector('main');

const cv = document.querySelectorAll('#cv');

const allDark = document.querySelectorAll('.nm');
const allLight = document.querySelectorAll('.lm');

//Nightmode
nightMode.addEventListener('click', () => {
    body.classList.toggle('night');

    allDark.forEach((el) => {
        el.classList.toggle('invisible');
    })

    allLight.forEach((el) => {
        el.classList.toggle('invisible');
    })

    cv.forEach((el) => {
        el.classList.toggle('disappear');
    })
});

//Burguer Toggle
headerToggle.addEventListener('click', (e) => {
    sidebar.classList.toggle('appear');
    sidebar.classList.toggle('sidebar-move');
    text.forEach((el) => {
        el.classList.toggle('appear');
    })
})
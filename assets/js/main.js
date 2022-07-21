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

//Burguer Toggle
headerToggle.addEventListener('click', (e) => {
    sidebar.classList.toggle('appear');
    text.forEach((el) => {
        el.classList.toggle('appear');
    })
})
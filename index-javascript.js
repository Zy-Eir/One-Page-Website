



const dropdownTitle1 = document.getElementById("dropdown-title-1");
const dropdowns1 = document.getElementById("dropdown-1");



dropdownTitle1.addEventListener('click', () => {
    if (dropdowns1.style.display ===
        'none') {
            dropdowns1.style.display = 'grid'
        } else {
            dropdowns1.style.display = 'none'
        } 
});



const dropdownTitle2 = document.getElementById("dropdown-title-2");
const dropdowns2 = document.getElementById("dropdown-2");



dropdownTitle2.addEventListener('click', () => {
    if (dropdowns2.style.display ===
        'none') {
            dropdowns2.style.display = 'grid'
        } else {
            dropdowns2.style.display = 'none'
        } 
});





const dropdownTitle3 = document.getElementById("dropdown-title-3");
const dropdowns3 = document.getElementById("dropdown-3");



dropdownTitle3.addEventListener('click', () => {
    if (dropdowns3.style.display ===
        'none') {
            dropdowns3.style.display = 'grid'
        } else {
            dropdowns3.style.display = 'none'
        } 
});

const hamButton = document.getElementById("hamburger-button");
const exitButton = document.getElementById("exit-button");
const navSection = document.getElementById("nav-dropdown-section");




hamButton.addEventListener('click', () => {
    if (navSection.style.display ===
        'none') {
            navSection.style.display = 'grid'
        } else {
            navSection.style.display = 'none'
        } 
});

exitButton.addEventListener('click', () => {
    if (navSection.style.display ===
        'grid') {
            navSection.style.display = 'none'
        }
});
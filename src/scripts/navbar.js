// const hamburgerButtonElement = document.querySelector('#hamburger');
// const drawerElement = document.querySelector('#drawer');
// const mainElement = document.querySelector('main');
 
// hamburgerButtonElement.addEventListener('click', event => {
//   drawerElement.classList.toggle('open');
//   event.stopPropagation();
// });
 
// mainElement.addEventListener('click', event => {
//   drawerElement.classList.remove('open');
//   event.stopPropagation();
// })

const hamburger = document.querySelector('.hamburger');
hamburger.onclick = function () {
    const navBar = document.querySelector('.navbar');
    navBar.classList.toggle('active');
}



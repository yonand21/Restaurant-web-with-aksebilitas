// const hamburger = document.querySelector('.hamburger');
// hamburger.onclick = function () {
//     const navBar = document.querySelector('.navbar');
//     navBar.classList.toggle('active');
// }


const hamburgerButtonElement = document.querySelector('.hamburger');
const drawerElement = document.querySelector('.navbar');
const mainElement = document.querySelector('main');
 
hamburgerButtonElement.addEventListener('click', event => {
  drawerElement.classList.toggle('active');
  event.stopPropagation();
});
 
mainElement.addEventListener('click', event => {
  drawerElement.classList.remove('active');
  event.stopPropagation();
})
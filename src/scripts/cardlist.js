import Swiper from 'swiper';
  
  const data = require('../DATA.json');

  const restaurantList = document.querySelector('.restaurant-list');

  data.restaurants.forEach(restaurant => {
    const restaurantElem = document.createElement('div');
    restaurantElem.innerHTML = `
    
        <div class="resto-card">
          <div class="resto-image">
            <img src="${restaurant.pictureId}" alt="Foto Resto" />
          </div>
          <div class="resto-info">
            <h1 class="resto-brand">${restaurant.name}</h1>
            <h2>Rating: ${restaurant.rating}</h2>
            <p>City: ${restaurant.city}</p>
          </div>
          <div class="resto-desc">
            <p>${restaurant.description}</p>
          </div>
        </div>


    `;
    restaurantList.appendChild(restaurantElem);
  });

  const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
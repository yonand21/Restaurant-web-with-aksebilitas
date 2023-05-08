const data = require("../DATA.json");

const restaurantList = document.querySelector(".restaurant-list");

data.restaurants.forEach((restaurant) => {
  const restaurantElem = document.createElement("div");
  restaurantElem.innerHTML = `    
  <div class="resto-card" >
  <div class="resto-image">
    <img src="${restaurant.pictureId}" alt="Foto Resto" />
  </div>
  <div class="resto-info" tabindex="0" id="maincontent">
    <h1 class="resto-brand">${restaurant.name}</h1>
    <h2>Rating: ${restaurant.rating}</h2>
    <p>City: ${restaurant.city}</p>
  </div>
  <div class="resto-desc">
    <p>${restaurant.description}</p>
  </div>
  </div>`;
  
  restaurantList.appendChild(restaurantElem);
});
const restaurantList = document.querySelector(".restaurant-list");
const jumbotron = document.querySelector(".jumbotron");
jumbotron.innerHTML = `
  <img src="./images/heros/hero-image_1.jpg" alt="jumbotron" />
  <div class="content">
    <h1 tabindex="0">いらしゃいませ</h1>
    <p tabindex="0">Naruto One Piece Attack on Titan Death Note Dragon Ball Fullmetal Alchemist Yamaha Suzuki Ramen Tempura Okonomiyaki Udon Takoyaki Yakitori Mochi Shabu-shabu Matcha</p>
  </div>
`;

document.body.appendChild(jumbotron);
restaurantList.parentNode.insertBefore(jumbotron, restaurantList);


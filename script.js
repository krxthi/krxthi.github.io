document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItemsList = document.querySelector(".cart-items");
    const cartTotal = document.querySelector(".cart-total");
    const clearCartButton = document.querySelector(".clear-cart");
  
    let cart = [];
    let total = 0;
  
    function updateCart() {
      cartItemsList.innerHTML = "";
      total = 0;
      cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = ${item.name} - $${item.price.toFixed(2)};
        cartItemsList.appendChild(li);
        total += item.price;
      });
      cartTotal.textContent = total.toFixed(2);
    }
  
    addToCartButtons.forEach((button, index) => {
      button.addEventListener("click", function() {
        const product = {
          name: Product ${index + 1},
          price: index === 0 ? 10 : 15
        };
        cart.push(product);
        updateCart();
      });
    });
  
    clearCartButton.addEventListener("click", function() {
      cart = [];
      updateCart();
    });
  });
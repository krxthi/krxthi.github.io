let cart = [];

function addToCart(productId) {
    const product = document.querySelector([data-id="${productId}"]);
    const productName = product.dataset.name;
    const productPrice = parseFloat(product.dataset.price);

    cart.push({ id: productId,image:'cpic1.jpeg', name: productName, price: productPrice });
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cart');
    cartCount.textContent = Cart (${cart.length});
}
let cartItems = [];
let total = 0;

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    total += price;
    updateCart();
}

function clearCart() {
    cartItems = [];
    total = 0;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart-items");
    const totalSpan = document.getElementById("total");
    cartList.innerHTML = "";
    cartItems.forEach(item => {
        const li = document.createElement("li");
        li.innerText = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
    });
    totalSpan.innerText = total.toFixed(2);
}

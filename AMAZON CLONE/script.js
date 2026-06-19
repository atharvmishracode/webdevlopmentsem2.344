const products = [
{
    id: 1,
    name: "Sony Headphones",
    price: 279,
    stars: 5,
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
},
{
    id: 2,
    name: "Kindle Book Reader",
    price: 99,
    stars: 4,
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600"
},
{
    id: 3,
    name: "Instant Pot Cooker",
    price: 79,
    stars: 5,
    img: "https://images.unsplash.com/photo-1585515656973-8c1c0d5d1c0c?w=600"
},
{
    id: 4,
    name: "Nike Shoes",
    price: 89,
    stars: 4,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
},
{
    id: 5,
    name: "The Lean Startup",
    price: 12,
    stars: 4,
    img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600"
},
{
    id: 6,
    name: "Yoga Mat",
    price: 34,
    stars: 4,
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600"
},
{
    id: 7,
    name: "LEGO Star Wars",
    price: 59,
    stars: 5,
    img: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600"
},
{
    id: 8,
    name: "Vitamin D3",
    price: 18,
    stars: 4,
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600"
}
];

let cartItems = [];
let showCart = false;

const productsGrid = document.getElementById("productsGrid");
const searchBox = document.getElementById("searchBox");
const cartSection = document.getElementById("cartSection");
const cartCount = document.getElementById("cartCount");
const productCount = document.getElementById("productCount");
const noProducts = document.getElementById("noProducts");

function makeStars(num){
    return "⭐".repeat(num);
}

function renderProducts(){

    const searchText = searchBox.value.toLowerCase();

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchText)
    );

    productCount.textContent =
        `Showing ${filteredProducts.length} products`;

    productsGrid.innerHTML = "";

    if(filteredProducts.length === 0){
        noProducts.textContent =
            `No products found for "${searchBox.value}"`;
    }
    else{
        noProducts.textContent = "";
    }

    filteredProducts.forEach(product => {

        productsGrid.innerHTML += `
            <div class="product">

                <img src="${product.img}" alt="${product.name}">

                <h3>${product.name}</h3>

                <p class="stars">
                    ${makeStars(product.stars)}
                </p>

                <p class="price">
                    $${product.price}
                </p>

                <button
                    class="add-btn"
                    onclick="addToCart(${product.id})">
                    Add to Cart
                </button>

            </div>
        `;
    });
}

function addToCart(id){

    const product = products.find(item => item.id === id);

    const exists = cartItems.some(item => item.id === id);

    if(exists){
        alert("Item already in cart!");
        return;
    }

    cartItems.push(product);

    cartCount.textContent = cartItems.length;

    renderCart();

    alert(product.name + " added to cart!");
}

function removeFromCart(id){

    cartItems = cartItems.filter(item => item.id !== id);

    cartCount.textContent = cartItems.length;

    renderCart();
}

function getTotal(){

    let total = 0;

    cartItems.forEach(item => {
        total += item.price;
    });

    return total;
}

function renderCart(){

    if(!showCart){
        cartSection.style.display = "none";
        return;
    }

    cartSection.style.display = "block";

    let html = "<h2>My Cart</h2>";

    if(cartItems.length === 0){

        html += "<p>Your cart is empty.</p>";

        cartSection.innerHTML = html;

        return;
    }

    cartItems.forEach(item => {

        html += `
            <div class="cart-item">

                <img src="${item.img}" alt="${item.name}">

                <div style="flex:1">
                    <strong>${item.name}</strong>
                </div>

                <div>
                    $${item.price}
                </div>

                <button
                    class="remove-btn"
                    onclick="removeFromCart(${item.id})">
                    Remove
                </button>

            </div>
        `;
    });

    html += `
        <div style="margin-top:20px">

            <h3>Total: $${getTotal()}</h3>

            <button class="shop-btn">
                Buy Now
            </button>

        </div>
    `;

    cartSection.innerHTML = html;
}

document
.getElementById("cartBtn")
.addEventListener("click", function(){

    showCart = !showCart;

    renderCart();
});

searchBox.addEventListener("input", renderProducts);

renderProducts();
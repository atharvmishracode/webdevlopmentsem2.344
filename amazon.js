// Amazon Homepage Project
// Made by: A Student
// Date: 2024

import { useState } from "react";

// ---- MY PRODUCTS LIST ----
// I just put the products here manually
const myProducts = [
  { id: 1, name: "Sony Headphones", price: 279, img: "🎧", stars: 5 },
  { id: 2, name: "Kindle Book Reader", price: 99,  img: "📱", stars: 4 },
  { id: 3, name: "Instant Pot Cooker", price: 79,  img: "🍲", stars: 5 },
  { id: 4, name: "Nike Shoes",         price: 89,  img: "👟", stars: 4 },
  { id: 5, name: "The Lean Startup",   price: 12,  img: "📚", stars: 4 },
  { id: 6, name: "Yoga Mat",           price: 34,  img: "🧘", stars: 4 },
  { id: 7, name: "LEGO Star Wars",     price: 59,  img: "🧱", stars: 5 },
  { id: 8, name: "Vitamin D3",         price: 18,  img: "💊", stars: 4 },
];

// ---- MAIN APP ----
export default function App() {

  // this stores what user types in search box
  const [searchText, setSearchText] = useState("");

  // this stores all items in the cart
  const [cartItems, setCartItems] = useState([]);

  // this shows or hides the cart
  const [showCart, setShowCart] = useState(false);

  // ---- FUNCTIONS ----

  // this function adds item to cart
  function addToCart(product) {
    // check if item already in cart
    let alreadyInCart = false;
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === product.id) {
        alreadyInCart = true;
      }
    }

    // only add if not already there
    if (alreadyInCart === false) {
      setCartItems([...cartItems, product]);
      alert(product.name + " added to cart!");
    } else {
      alert("This item is already in your cart!");
    }
  }

  // this function removes item from cart
  function removeFromCart(productId) {
    let newCart = cartItems.filter(function(item) {
      return item.id !== productId;
    });
    setCartItems(newCart);
  }

  // this function calculates total price
  function getTotal() {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total = total + cartItems[i].price;
    }
    return total;
  }

  // this filters products based on search
  function getFilteredProducts() {
    if (searchText === "") {
      return myProducts; // return all if search is empty
    }
    let filtered = [];
    for (let i = 0; i < myProducts.length; i++) {
      let productName = myProducts[i].name.toLowerCase();
      let search = searchText.toLowerCase();
      if (productName.includes(search)) {
        filtered.push(myProducts[i]);
      }
    }
    return filtered;
  }

  // make stars string
  function makeStars(num) {
    let stars = "";
    for (let i = 0; i < num; i++) {
      stars = stars + "⭐";
    }
    return stars;
  }

  // ---- HTML / JSX ----
  return (
    <div style={{ fontFamily: "Arial", backgroundColor: "#f3f3f3", minHeight: "100vh" }}>

      {/* ===== NAVBAR ===== */}
      <div style={{ backgroundColor: "#131921", padding: "10px 20px", display: "flex", alignItems: "center", gap: "15px" }}>

        {/* Logo */}
        <h1 style={{ color: "white", margin: 0, fontSize: "24px" }}>
          🛒 <span style={{ color: "#ff9900" }}>amazon</span>
        </h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search for products..."
          value={searchText}
          onChange={function(e) { setSearchText(e.target.value); }}
          style={{
            flex: 1,
            padding: "8px",
            fontSize: "14px",
            borderRadius: "4px",
            border: "none",
          }}
        />

        {/* Search Button */}
        <button
          style={{
            backgroundColor: "#ff9900",
            border: "none",
            padding: "8px 15px",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Search
        </button>

        {/* Cart Button */}
        <button
          onClick={function() { setShowCart(!showCart); }}
          style={{
            backgroundColor: "#ff9900",
            border: "none",
            padding: "8px 15px",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          🛒 Cart ({cartItems.length})
        </button>

      </div>
      {/* ===== END NAVBAR ===== */}


      {/* ===== CART SECTION ===== */}
      {/* only show this if showCart is true */}
      {showCart === true && (
        <div style={{
          backgroundColor: "white",
          padding: "20px",
          margin: "10px 20px",
          border: "2px solid #ff9900",
          borderRadius: "8px",
        }}>
          <h2>My Cart 🛒</h2>

          {/* if cart is empty show message */}
          {cartItems.length === 0 && (
            <p>Your cart is empty. Add some products!</p>
          )}

          {/* show each item in cart */}
          {cartItems.map(function(item) {
            return (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px",
                  borderBottom: "1px solid #ddd",
                }}
              >
                <span style={{ fontSize: "30px" }}>{item.img}</span>
                <span style={{ flex: 1 }}>{item.name}</span>
                <span style={{ color: "#B12704", fontWeight: "bold" }}>${item.price}</span>
                <button
                  onClick={function() { removeFromCart(item.id); }}
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                    borderRadius: "4px",
                  }}
                >
                  Remove
                </button>
              </div>
            );
          })}

          {/* show total only if cart has items */}
          {cartItems.length > 0 && (
            <div style={{ marginTop: "15px" }}>
              <h3>Total: ${getTotal()}</h3>
              <button style={{
                backgroundColor: "#ff9900",
                border: "none",
                padding: "10px 20px",
                fontSize: "16px",
                borderRadius: "4px",
                cursor: "pointer",
              }}>
                Buy Now
              </button>
            </div>
          )}

        </div>
      )}
      {/* ===== END CART ===== */}


      {/* ===== BIG BANNER ===== */}
      <div style={{
        backgroundColor: "#232f3e",
        color: "white",
        padding: "40px",
        textAlign: "center",
        margin: "10px 0",
      }}>
        <h2 style={{ fontSize: "32px", margin: 0 }}>🎉 Big Sale Today!</h2>
        <p style={{ fontSize: "18px" }}>Up to 60% off on all products</p>
        <button style={{
          backgroundColor: "#ff9900",
          border: "none",
          padding: "12px 30px",
          fontSize: "18px",
          borderRadius: "5px",
          cursor: "pointer",
        }}>
          Shop Now
        </button>
      </div>
      {/* ===== END BANNER ===== */}


      {/* ===== PRODUCTS SECTION ===== */}
      <div style={{ padding: "20px" }}>

        <h2>Products</h2>

        {/* show how many results found */}
        <p>Showing {getFilteredProducts().length} products</p>

        {/* products grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "15px",
        }}>

          {/* loop through each product */}
          {getFilteredProducts().map(function(product) {
            return (
              <div
                key={product.id}
                style={{
                  backgroundColor: "white",
                  padding: "15px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  textAlign: "center",
                }}
              >
                {/* product image (emoji) */}
                <div style={{ fontSize: "50px" }}>{product.img}</div>

                {/* product name */}
                <h3 style={{ fontSize: "14px", margin: "10px 0 5px" }}>{product.name}</h3>

                {/* stars */}
                <p style={{ margin: "5px 0", fontSize: "12px" }}>{makeStars(product.stars)}</p>

                {/* price */}
                <p style={{
                  color: "#B12704",
                  fontWeight: "bold",
                  fontSize: "18px",
                  margin: "5px 0",
                }}>
                  ${product.price}
                </p>

                {/* add to cart button */}
                <button
                  onClick={function() { addToCart(product); }}
                  style={{
                    backgroundColor: "#ff9900",
                    border: "none",
                    padding: "8px 15px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    width: "100%",
                    fontSize: "13px",
                  }}
                >
                  Add to Cart
                </button>

              </div>
            );
          })}

        </div>

        {/* show message if no products found */}
        {getFilteredProducts().length === 0 && (
          <p style={{ textAlign: "center", fontSize: "18px", marginTop: "40px" }}>
            No products found for "{searchText}" 😢
          </p>
        )}

      </div>
      {/* ===== END PRODUCTS ===== */}


      {/* ===== FOOTER ===== */}
      <div style={{
        backgroundColor: "#131921",
        color: "white",
        textAlign: "center",
        padding: "20px",
        marginTop: "30px",
      }}>
        <p>© 2024 Amazon Clone - Made by a Student 😊</p>
      </div>
      {/* ===== END FOOTER ===== */}

    </div>
  );
}
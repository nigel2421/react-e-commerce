// script.js
function displayProducts(products) {
 // ... (Same displayProducts function from previous responses, including image handling and WhatsApp button)
}



// Sample product data – replace with your actual product information
const products = [
    // your product data objects, format should be the same as in earlier examples.
  ];
  displayProducts(products);

// Cart functionality
const cart = [];

function addToCart(product) {
    cart.push(product);
    //Optional: Provide feedback to the user that the item was added to the cart.
    alert("Product added to cart!");
    // You might want to update a cart display on the page as well.  For example:
    // updateCartDisplay(); //This function would need to be implemented.
    
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }


    let message = "Hello, I'd like to inquire about the following products:\n\n";
    cart.forEach(product => {
        message += `${product.name} - ${product.price}\n`;
    });

    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink);
}

// Event listeners to add and remove from cart in your product display area. Ensure to pass appropriate product data.


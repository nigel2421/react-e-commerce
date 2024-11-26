import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './ProductsGrid.css'; //Component specific style

function ProductsGrid() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch product data here (replace with your fetch logic). Replace sample URL
        fetch('/api/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching products:", error));
    }, []);


// helper function for adding to cart and redirect to whatsapp
    const checkout = (cart) => {
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




    return (
        <div className="products-grid">
            {products.map(product => (
                <ProductCard key={product.id} product={product} checkout={checkout} />
            ))}
        </div>
    );
}


export default ProductsGrid;


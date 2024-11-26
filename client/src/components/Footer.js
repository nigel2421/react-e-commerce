import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './ProductsGrid.css';

function ProductsGrid() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('/api/products');
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                setProducts(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const checkout = (cart) => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        let message = "Hello, I'd like to inquire about the following products:\n\n";
        let totalPrice = 0; // Calculate total price

        cart.forEach(product => {
            message += `${product.name} - ${product.price}\n`;
            totalPrice += parseFloat(product.price.replace(/[^0-9.-]+/g,"")); //Extract numerical price
        });

        message += `\nTotal: ${totalPrice}`; // Add total price to the message

        const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank'); // Open in a new tab/window
    };


    if (loading) {
        return <div>Loading products...</div>; // Display loading message
    }

    if (error) {
        return <div>Error: {error.message}</div>; // Display error message
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


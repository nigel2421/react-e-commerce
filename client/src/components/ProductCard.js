import './ProductCard.css'
import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

function ProductCard({ product, checkout }) {

    const { cart, setCart } = useContext(CartContext);



    const addToCart = (product) => {
        const existingProduct = cart.find((item) => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity++;
        } else { setCart([...cart, { ...product, quantity: 1 }]); }
    }


    return (
        <div className="product-card">
            {/* Display product image, name, price, etc. */}
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button onClick={() => checkout(cart)}>Checkout</button>
        </div>

    );
}

export default ProductCard;


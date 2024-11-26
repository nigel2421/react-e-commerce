import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Checkout() {
    const { cart } = useContext(CartContext);

    const checkout = () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        let message = "Hello, I'd like to inquire about the following products:\n\n";
        let totalPrice = 0;

        cart.forEach(product => {
            message += `${product.name} - ${product.price} x ${product.quantity}\n`;
            totalPrice += product.price * product.quantity;
        });

        message += `\nTotal: ${totalPrice}`;

        const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
    };

    return (
        <div>
            <h1>Checkout</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {/* Display cart items here */}
                    <button onClick={checkout}>Proceed to Checkout</button>
                </div>
            )}
        </div>
    );
}

export default Checkout;

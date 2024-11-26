import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
    const { cart, setCart } = useContext(CartContext);

    const removeFromCart = (product) => {
        const updatedCart = cart.filter((item) => item.id !== product.id);
        setCart(updatedCart);
    };

    const updateQuantity = (product, newQuantity) => {
        const updatedCart = cart.map((item) =>
            item.id === product.id ? { ...item, quantity: newQuantity } : item
        );
        setCart(updatedCart);
    };

    let totalPrice = 0;
    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
    });

    return (
        <div>
            <h1>Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <input
                                        type="number"
                                        min="1"
                                        value={item.quantity}
                                        onChange={(e) =>
                                            updateQuantity(item, parseInt(e.target.value, 10))
                                        }
                                    />
                                </td>
                                <td>{(item.price * item.quantity).toFixed(2)}</td>
                                <td>
                                    <button onClick={() => removeFromCart(item)}>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            {cart.length > 0 && (
                <div>
                    <h2>Total: ${(totalPrice).toFixed(2)}</h2>
                    {/* Add checkout button here */}
                </div>
            )}
        </div>
    );
}

export default Cart;

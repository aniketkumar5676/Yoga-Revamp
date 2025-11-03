
import React from 'react';
import { useCart } from '../contexts/CartContext';
import { XIcon, TrashIcon } from './icons';

const CartDrawer: React.FC = () => {
    const { isCartOpen, toggleCart, cart, removeFromCart, updateQuantity } = useCart();
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <>
            <div className={`fixed inset-0 bg-black/50 z-50 transition-opacity ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleCart}></div>
            <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center p-6 border-b">
                        <h2 className="text-xl font-semibold">Shopping Cart</h2>
                        <button onClick={toggleCart} className="text-gray-500 hover:text-gray-800"><XIcon className="w-6 h-6" /></button>
                    </div>

                    {cart.length === 0 ? (
                        <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
                            <p className="text-gray-500">Your cart is empty.</p>
                            <button onClick={toggleCart} className="mt-4 bg-brand-primary text-white py-2 px-6 rounded-full hover:bg-blue-700">Continue Shopping</button>
                        </div>
                    ) : (
                        <div className="flex-grow overflow-y-auto p-6 space-y-4">
                            {cart.map(item => (
                                <div key={item.id} className="flex items-center space-x-4">
                                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                                    <div className="flex-grow">
                                        <h3 className="font-semibold">{item.name}</h3>
                                        <p className="text-sm text-gray-500">₹{item.price.toFixed(2)}</p>
                                        <div className="flex items-center mt-2">
                                            <input type="number" value={item.quantity} onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))} className="w-16 border rounded-md text-center" min="1" />
                                        </div>
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500"><TrashIcon className="w-5 h-5" /></button>
                                </div>
                            ))}
                        </div>
                    )}

                    {cart.length > 0 && (
                        <div className="p-6 border-t">
                            <div className="flex justify-between font-semibold mb-4">
                                <span>Subtotal</span>
                                <span>₹{subtotal.toFixed(2)}</span>
                            </div>
                            <button className="w-full bg-brand-secondary text-brand-dark font-bold py-3 rounded-full hover:bg-amber-500 transition-colors">Checkout</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default CartDrawer;

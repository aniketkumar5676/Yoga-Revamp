
import React from 'react';
import type { Product } from '../types';
import { ShoppingCartIcon } from './icons';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
           <button onClick={() => addToCart(product)} className="bg-brand-primary text-white rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300 hover:bg-brand-secondary">
             <ShoppingCartIcon className="w-6 h-6" />
           </button>
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-brand-dark">{product.name}</h3>
        <p className="text-brand-primary font-bold mt-1">₹{product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
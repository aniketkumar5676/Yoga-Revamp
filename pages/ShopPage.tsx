import React, { useState, useMemo } from 'react';
import usePageMetadata from '../hooks/usePageMetadata';
import productsData from '../data/products.ts';
import type { Product } from '../types';
import ProductCard from '../components/ProductCard';
import AnimatedSection from '../components/AnimatedSection';

const ShopPage: React.FC = () => {
    usePageMetadata('Shop - Yogkit Essentials', 'Browse our collection of high-quality yoga mats, props, and accessories to support your practice.');
    
    const [products, setProducts] = useState<Product[]>(productsData);
    const [categoryFilter, setCategoryFilter] = useState('All');
    const [priceFilter, setPriceFilter] = useState(1500);

    const categories = ['All', ...Array.from(new Set(productsData.map(p => p.category)))];

    const filteredProducts = useMemo(() => {
        return products
            .filter(p => categoryFilter === 'All' || p.category === categoryFilter)
            .filter(p => p.price <= priceFilter);
    }, [products, categoryFilter, priceFilter]);

    return (
        <div className="container mx-auto px-6 py-24 max-w-7xl">
            <div className="text-center pt-20">
                <h1 className="text-4xl md:text-5xl font-sans font-bold">Shop Yoga Essentials</h1>
                <p className="mt-4 text-lg text-gray-600">High-quality gear to support and enhance your practice.</p>
            </div>
            
            <AnimatedSection>
              <aside className="my-12 p-6 bg-brand-light rounded-lg flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="flex items-center gap-4">
                      <label htmlFor="category" className="font-semibold">Category:</label>
                      <select id="category" value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)} className="p-2 border rounded-md">
                          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                      </select>
                  </div>
                  <div className="flex items-center gap-4 w-full md:w-1/3">
                      <label htmlFor="price" className="font-semibold">Max Price:</label>
                      <input type="range" id="price" min="100" max="1500" step="50" value={priceFilter} onChange={e => setPriceFilter(Number(e.target.value))} className="w-full accent-brand-primary" />
                      <span className="font-bold w-20 text-right">₹{priceFilter}</span>
                  </div>
              </aside>
            </AnimatedSection>
            
            <AnimatedSection>
              <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {filteredProducts.map(product => (
                      <ProductCard key={product.id} product={product} />
                  ))}
              </main>
            </AnimatedSection>
        </div>
    );
};

export default ShopPage;
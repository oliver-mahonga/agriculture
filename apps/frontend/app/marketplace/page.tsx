'use client';

import React, { useState, useMemo } from 'react';
//import styles from '@/components/Marketplace.module.css';
import AddProduct from './components/AddProductModal';
import Filters from './components/Filters';
import ProductCard from './components/ProductCard';
//import Filters from '@/components/Filters';
//import ProductCard from '@/components/ProductCard';
//import AddProduct from '@/components/AddProduct';

const initialProducts = [
  {
    id: 1,
    name: 'Organic Maize',
    type: 'produce',
    place: 'Eldoret',
    price: 1500,
    image: '/products/maize.jpg',
  },
  {
    id: 2,
    name: 'Cow Plough',
    type: 'tools',
    place: 'Nairobi',
    price: 7000,
    image: '/products/plough.jpg',
  },
  {
    id: 3,
    name: 'Tomato Seeds',
    type: 'seeds',
    place: 'Kisumu',
    price: 300,
    image: '/products/seeds.jpg',
  },
  {
    id: 4,
    name: 'Local Chicken',
    type: 'livestock',
    place: 'Mombasa',
    price: 1200,
    image: '/products/chicken.jpg',
  },
  // Add as many as needed
];

export default function MarketplacePage() {
  const [products, setProducts] = useState(initialProducts);
  const [selectedType, setSelectedType] = useState('');
  const [selectedPlace, setSelectedPlace] = useState('');

  const handleAddProduct = (product: any) => {
    setProducts((prev) => [product, ...prev]);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      return (
        (selectedType ? p.type === selectedType : true) &&
        (selectedPlace ? p.place === selectedPlace : true)
      );
    });
  }, [products, selectedType, selectedPlace]);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>KilimoX Marketplace</h1>

      <Filters
        selectedType={selectedType}
        selectedPlace={selectedPlace}
        onTypeChange={setSelectedType}
        onPlaceChange={setSelectedPlace}
      />

      <AddProduct onAddProduct={handleAddProduct} />

      <div className={styles.grid}>
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </main>
  );
}

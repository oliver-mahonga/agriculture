// pages/marketplace.tsx
'use client';
import React, { useState, useEffect } from 'react';
//import styles from '../styles/Marketplace.module.css';
import AddProductModal from './components/AddProductModal';
import Filters from './components/Filters';
import ProductCard from './components/ProductCard';
import styles from './styles/Marketplace.module.css';
// import ProductCard from '../components/ProductCard';
// import Filters from '../components/Filters';
// import AddProductModal from '../components/AddProductModal';

interface Product {
  id: string;
  name: string;
  type: string;
  location: string;
  place: string;
  price: string;
  image: string;
}

const types = ['Fruits', 'Vegetables', 'Livestock', 'Tools', 'Seeds'];
const locations = ['Nairobi', 'Mombasa', 'Kisumu', 'Eldoret', 'Machakos'];

const generateMockProducts = (): Product[] => {
  const items: Product[] = [];
  for (let i = 1; i <= 1500; i++) {
    const type = types[i % types.length];
    const location = locations[i % locations.length];
    items.push({
      id: `${i}`,
      name: `${type} Product ${i}`,
      type,
      location,
      place: `Area ${i % 100}`,
      price: `${(100 + (i % 2000)).toLocaleString()} KES`,
      image: `https://picsum.photos/seed/${i}/300/200`,
    });
  }
  return items;
};

const MarketplacePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [selectedType, setSelectedType] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const data = generateMockProducts();
    setProducts(data);
    setFiltered(data);
  }, []);

  useEffect(() => {
    let temp = [...products];
    if (selectedType) temp = temp.filter((p) => p.type === selectedType);
    if (selectedLocation) temp = temp.filter((p) => p.location === selectedLocation);
    setFiltered(temp);
  }, [selectedType, selectedLocation, products]);

  const handleAdd = (product: Product) => {
    setProducts((prev) => [product, ...prev]);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>KilimoX Marketplace</h1>

      <Filters
        selectedType={selectedType}
        selectedLocation={selectedLocation}
        onTypeChange={setSelectedType}
        onLocationChange={setSelectedLocation}
      />

      <button className={styles.addButton} onClick={() => setShowModal(true)}>
        + Add Product
      </button>

      {showModal && <AddProductModal onClose={() => setShowModal(false)} onAdd={handleAdd} />}

      <div className={styles.grid}>
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MarketplacePage;

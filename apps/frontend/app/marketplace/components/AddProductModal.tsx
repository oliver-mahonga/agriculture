import React, { useState } from 'react';
import styles from './Marketplace.module.css';
import { PlusCircle } from 'lucide-react';

interface AddProductProps {
  onAddProduct: (product: {
    id: number;
    name: string;
    type: string;
    place: string;
    price: number;
    image: string;
  }) => void;
}

const AddProduct: React.FC<AddProductProps> = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [place, setPlace] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !type || !place || !price || !image) return;

    const newProduct = {
      id: Date.now(),
      name,
      type,
      place,
      price: parseFloat(price),
      image,
    };

    onAddProduct(newProduct);
    setName('');
    setType('');
    setPlace('');
    setPrice('');
    setImage('');
  };

  return (
    <div className={styles.addProductContainer}>
      <h3>
        <PlusCircle size={20} style={{ verticalAlign: 'middle', marginRight: 8 }} />
        Add Product
      </h3>
      <form onSubmit={handleSubmit} className={styles.addProductForm}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
        <select value={type} onChange={(e) => setType(e.target.value)} className={styles.select}>
          <option value="">Select Type</option>
          <option value="seeds">Seeds</option>
          <option value="tools">Tools</option>
          <option value="produce">Produce</option>
          <option value="livestock">Livestock</option>
        </select>
        <select value={place} onChange={(e) => setPlace(e.target.value)} className={styles.select}>
          <option value="">Select Place</option>
          <option value="Nairobi">Nairobi</option>
          <option value="Eldoret">Eldoret</option>
          <option value="Kisumu">Kisumu</option>
          <option value="Mombasa">Mombasa</option>
        </select>
        <input
          type="number"
          placeholder="Price (KES)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.addButton}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

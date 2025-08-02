
import React, { useState } from 'react';
import styles from '../styles/AddProductModal.module.css';

interface AddProductModalProps {
  onClose: () => void;
  onAdd: (product: any) => void;
}

const AddProductModal: React.FC<AddProductModalProps> = ({ onClose, onAdd }) => {
  const [form, setForm] = useState({
    name: '',
    type: 'Fruits',
    location: 'Nairobi',
    place: '',
    price: '',
    image: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onAdd({ ...form, id: crypto.randomUUID() });
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Add Product</h2>
        <input name="name" placeholder="Product Name" value={form.name} onChange={handleChange} />
        <select name="type" value={form.type} onChange={handleChange}>
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Livestock">Livestock</option>
          <option value="Tools">Tools</option>
          <option value="Seeds">Seeds</option>
        </select>
        <select name="location" value={form.location} onChange={handleChange}>
          <option value="Nairobi">Nairobi</option>
          <option value="Mombasa">Mombasa</option>
          <option value="Kisumu">Kisumu</option>
        </select>
        <input name="place" placeholder="Place/Area" value={form.place} onChange={handleChange} />
        <input name="price" placeholder="Price (KES)" value={form.price} onChange={handleChange} />
        <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
        <div className={styles.buttons}>
          <button onClick={handleSubmit}>Add</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;

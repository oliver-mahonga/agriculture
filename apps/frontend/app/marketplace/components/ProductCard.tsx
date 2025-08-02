
import React from 'react';
import styles from '../styles/ProductCard.module.css';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className={styles.card}>
    <img src={product.image} alt={product.name} className={styles.image} />
    <div className={styles.content}>
      <div className={styles.title}>{product.name}</div>
      <div className={styles.price}>Ksh {product.price}</div>
      <div className={styles.location}>{product.location}</div>
    </div>
  </div>
);

export default ProductCard;

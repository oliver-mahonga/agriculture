import React from 'react';
import styles from './Marketplace.module.css';
import { MapPin } from 'lucide-react';

type Product = {
  id: number;
  name: string;
  image: string;
  location: string;
  price: string;
};

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} />
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{product.name}</h3>
        <div className={styles.cardLocation}>
          <MapPin size={16} style={{ marginRight: 6, verticalAlign: 'middle' }} />
          {product.location}
        </div>
        <div className={styles.cardPrice}>{product.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;

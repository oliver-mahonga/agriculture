import React from 'react';
import styles from './Marketplace.module.css';
import { Filter } from 'lucide-react';

interface FiltersProps {
  filterType: string;
  filterPlace: string;
  onTypeChange: (type: string) => void;
  onPlaceChange: (place: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
  filterType,
  filterPlace,
  onTypeChange,
  onPlaceChange,
}) => {
  return (
    <div className={styles.filters}>
      <h3>
        <Filter size={20} style={{ verticalAlign: 'middle', marginRight: 8 }} />
        Filter Products
      </h3>
      <div className={styles.filterGroup}>
        <label htmlFor="type">Type:</label>
        <select
          id="type"
          value={filterType}
          onChange={(e) => onTypeChange(e.target.value)}
          className={styles.select}
        >
          <option value="">All</option>
          <option value="seeds">Seeds</option>
          <option value="tools">Tools</option>
          <option value="produce">Produce</option>
          <option value="livestock">Livestock</option>
        </select>
      </div>
      <div className={styles.filterGroup}>
        <label htmlFor="place">Place:</label>
        <select
          id="place"
          value={filterPlace}
          onChange={(e) => onPlaceChange(e.target.value)}
          className={styles.select}
        >
          <option value="">All</option>
          <option value="Nairobi">Nairobi</option>
          <option value="Eldoret">Eldoret</option>
          <option value="Kisumu">Kisumu</option>
          <option value="Mombasa">Mombasa</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;

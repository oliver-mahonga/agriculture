// components/Filters.tsx
import React from 'react';
import styles from '../styles/Filters.module.css';

interface FiltersProps {
  selectedType: string;
  selectedLocation: string;
  onTypeChange: (type: string) => void;
  onLocationChange: (location: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
  selectedType,
  selectedLocation,
  onTypeChange,
  onLocationChange,
}) => {
  return (
    <div className={styles.filters}>
      <select value={selectedType} onChange={(e) => onTypeChange(e.target.value)}>
        <option value="">All Types</option>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Livestock">Livestock</option>
        <option value="Tools">Tools</option>
        <option value="Seeds">Seeds</option>
      </select>

      <select value={selectedLocation} onChange={(e) => onLocationChange(e.target.value)}>
        <option value="">All Locations</option>
        <option value="Nairobi">Nairobi</option>
        <option value="Mombasa">Mombasa</option>
        <option value="Kisumu">Kisumu</option>
        <option value="Eldoret">Eldoret</option>
      </select>
    </div>
  );
};

export default Filters;

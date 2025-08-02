'use client';
import { useState, useEffect } from 'react';

import styles from './Diagnosis.module.css'
import { History, Trash2 } from 'lucide-react';

interface DiagnosisResult {
  name: string;
  description: string;
  treatment: string;
  date: string;
}

const mockDiseases = [
    {
    name: 'Maize Leaf Blight',
    description: 'Caused by fungus, this disease reduces photosynthesis and stunts growth.',
    treatment: 'Apply fungicides and rotate crops regularly.',
  },
  {
    name: 'Cassava Mosaic Virus',
    description: 'Leads to discolored, deformed leaves and poor yield.',
    treatment: 'Use virus-free planting material and resistant varieties.',
  },
  {
    name: 'Tomato Early Blight',
    description: 'Dark spots appear on older leaves, causing defoliation.',
    treatment: 'Prune affected leaves and apply copper-based fungicides.',
  },
  {
    name: 'Coffee Leaf Rust',
    description: 'Yellow-orange powder on the underside of leaves.',
    treatment: 'Apply preventive fungicides and improve airflow.',
  },
  {
    name: 'Banana Bacterial Wilt',
    description: 'Yellowing leaves and wilting banana plants.',
    treatment: 'Remove infected plants and sterilize tools.',
  },
];

export default function AIDiagnosisPage() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<DiagnosisResult[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('diagnosisHistory');
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setResult(null);
    }
  };

  const diagnose = () => {
    setLoading(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * mockDiseases.length);
      const fakeResult = mockDiseases[randomIndex];
      const diagnosis: DiagnosisResult = {
        ...fakeResult,
        date: new Date().toLocaleString(),
      };
      setResult(diagnosis);
      const newHistory = [diagnosis, ...history];
      setHistory(newHistory);
      localStorage.setItem('diagnosisHistory', JSON.stringify(newHistory));
      setLoading(false);
    }, 2000);
  };

  const clearHistory = () => {
    localStorage.removeItem('diagnosisHistory');
    setHistory([]);
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>🌿 AI Crop Disease Diagnosis</h1>

      <label className={styles.uploadLabel}>
        📷 Upload Crop Image
        <input type="file" accept="image/*" onChange={handleImageUpload} className={styles.fileInput} />
      </label>

      {preview && (
        <div className={styles.previewSection}>
          <img src={preview} alt="Uploaded crop" className={styles.imagePreview} />
          <button onClick={diagnose} className={styles.button} disabled={loading}>
            {loading ? <><span className={styles.spinner}></span> Analyzing...</> : 'Diagnose'}
          </button>
        </div>
      )}

      {result && (
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>🦠 {result.name}</h2>
          <p><strong>Description:</strong> {result.description}</p>
          <p><strong>Treatment:</strong> {result.treatment}</p>
          <p><strong>Confidence:</strong> {Math.floor(80 + Math.random() * 20)}%</p>
          <p style={{ marginTop: '1rem', color: '#aaa' }}>
            Need help? Contact your local agricultural officer or call <strong>AgriSupport</strong> at 0800-123-456.
          </p>
        </div>
      )}

      {history.length > 0 && (
        <div className={styles.historySection}>
          <div className={styles.historyHeader}>
            <h2><History size={20} /> Diagnosis History</h2>
            <button className={styles.clearButton} onClick={clearHistory}>
              <Trash2 size={16} /> Clear
            </button>
          </div>
          <ul className={styles.historyList}>
            {history.map((entry, index) => (
              <li key={index} className={styles.historyItem}>
                <div>
                  <strong>{entry.name}</strong>
                  <p className={styles.historyDate}>{entry.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

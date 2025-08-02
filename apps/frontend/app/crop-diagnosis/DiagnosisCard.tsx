import styles from './Diagnosis.module.css';

interface Props {
  result: {
    crop: string;
    disease: string;
    solution: string;
  };
}

export default function DiagnosisCard({ result }: Props) {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>🧪 Diagnosis Result</h2>
      <p><strong>Crop:</strong> {result.crop}</p>
      <p><strong>Disease:</strong> {result.disease}</p>
      <p><strong>Suggested Solution:</strong> {result.solution}</p>
    </div>
  );
}

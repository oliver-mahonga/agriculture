import styles from './VoiceAssistant.module.css';

interface VoiceCardProps {
  question: string;
  answer: string;
}

export default function VoiceCard({ question, answer }: VoiceCardProps) {
  return (
    <div className={styles.voiceCard}>
      <p><strong>👤 You:</strong> {question}</p>
      <p><strong>🤖 KilimoX:</strong> {answer}</p>
    </div>
  );
}

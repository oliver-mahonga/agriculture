'use client';
import React, { useState } from 'react';
import styles from './VoiceAssistant.module.css';
import { Mic, Languages, Trash2 } from 'lucide-react';

const mockQA: Record<string, string> = {
  hello: "Hello! Welcome to KilimoX — your smart farming companion.",
  "hi": "Hi there! How can I assist your farm journey today?",
  "what is kilimox": "KilimoX is an AI-powered farming assistant for African farmers. We offer crop diagnosis, weather forecasts, a marketplace, chama savings, and more.",
  "who are you": "I’m your KilimoX Assistant, here to help with farming advice, diagnosis, and updates!",
  "how does crop diagnosis work": "You simply upload a photo of your crop, and KilimoX AI analyzes it to detect diseases or issues.",
  "what is the weather like": "Go to the Weather Forecast section, select your area, and get personalized farming suggestions.",
  "what is the marketplace": "It’s where farmers can post and discover agricultural products across the country.",
  "what is chama": "Chama is a group saving feature for farmers to save, contribute, and borrow together securely.",
  "how can i join chama": "Just go to the Chama section, create or join a group, and start saving together.",
  "how are you": "I’m thriving! Ready to help you with all your farming needs.",
  "what can you do": "I can help you diagnose crops, provide weather advice, explain KilimoX features, and more!",
  "thank you": "You're welcome! Happy farming!",
  "bye": "Goodbye! See you in the fields soon.",
  "asante": "Karibu! Tuko pamoja mkulima.",
  "habari": "Nzuri sana! Karibu KilimoX, msaidizi wako wa kilimo.",
};

const getMockedResponse = (input: string) => {
  const cleaned = input.trim().toLowerCase();
  const found = Object.entries(mockQA).find(([key]) => cleaned.includes(key));
  return found ? found[1] : "Sorry, I didn’t quite catch that. Try asking about weather, crop diagnosis, chama, or the marketplace.";
};

const VoiceAssistant: React.FC = () => {
  const [listening, setListening] = useState(false);
  const [history, setHistory] = useState<{ question: string; answer: string }[]>([]);
  const [language, setLanguage] = useState<'en' | 'sw'>('en');

  const handleListen = () => {
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = language === 'en' ? 'en-US' : 'sw-KE';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setListening(true);

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      const response = getMockedResponse(transcript);

      setHistory(prev => [...prev, { question: transcript, answer: response }]);
      speak(response);
    };

    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);

    recognition.start();
  };

  const speak = (text: string) => {
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = language === 'en' ? 'en-US' : 'sw-KE';
    synth.speak(utter);
  };

  const clearHistory = () => setHistory([]);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>🎙️ KilimoX Voice Assistant</h1>

      <div className={styles.topControls}>
        <button className={styles.micButton} onClick={handleListen}>
          <Mic />
        </button>

        <button
          className={styles.langButton}
          onClick={() => setLanguage(prev => (prev === 'en' ? 'sw' : 'en'))}
        >
          <Languages /> {language === 'en' ? 'English' : 'Kiswahili'}
        </button>
      </div>

      {listening && <div className={styles.listening}>🎧 Listening...</div>}

      <div className={styles.historyHeader}>
        <h2 className={styles.subtitle}>Assistant History</h2>
        <button className={styles.clearButton} onClick={clearHistory}>
          <Trash2 size={16} /> Clear
        </button>
      </div>

      <div className={styles.cardList}>
        {history.map((entry, idx) => (
          <div key={idx} className={styles.card}>
            <p><strong>👤 You:</strong> {entry.question}</p>
            <p><strong>🤖 Assistant:</strong> {entry.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoiceAssistant;

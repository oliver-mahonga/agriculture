import styles from './WeatherCard.module.css'


interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  location: string;
}

export default function WeatherCard({ data }: { data: WeatherData }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.location}>{data.location}</h2>
      <p className={styles.temp}>{data.temperature}°C</p>
      <div className={styles.details}>
        <p>Humidity: {data.humidity}%</p>
        <p>Wind: {data.windSpeed} km/h</p>
      </div>
    </div>
  );
}

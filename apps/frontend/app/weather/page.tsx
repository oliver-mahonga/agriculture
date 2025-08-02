'use client';

import { useEffect, useState } from 'react';
import styles from './WeatherCard.module.css';

interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  location: string;
  suggestion: string;
}

const locations = [
  { name: 'Nairobi', lat: -1.2921, lon: 36.8219 },
  { name: 'Mombasa', lat: -4.0435, lon: 39.6682 },
  { name: 'Kisumu', lat: -0.0917, lon: 34.7680 },
  { name: 'Eldoret', lat: 0.5204, lon: 35.2698 },
  { name: 'Nakuru', lat: -0.3031, lon: 36.0800 },
  { name: 'Kitale', lat: 1.0157, lon: 35.0060 },
  { name: 'Garissa', lat: -0.4532, lon: 39.6460 },
  { name: 'Meru', lat: 0.0470, lon: 37.6498 },
  { name: 'Machakos', lat: -1.5200, lon: 37.2650 },
  { name: 'Embu', lat: -0.5310, lon: 37.4500 },
];

export default function WeatherPage() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  const getSuggestion = (temp: number, humidity: number): string => {
    if (temp > 32 && humidity < 40) return '⚠️ High heat and low humidity: Focus on drought-resistant crops like sorghum or millet.';
    if (temp > 26 && humidity > 60) return '🌿 Ideal for planting leafy greens like sukuma wiki, spinach, or amaranth.';
    if (temp < 20) return '🌧️ Cool weather: Use greenhouses for tomatoes, peppers, or raise seedlings.';
    return '🌱 Maintain soil moisture and prepare compost for the upcoming planting cycle.';
  };

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${selectedLocation.lat}&longitude=${selectedLocation.lon}&current=temperature_2m,wind_speed_10m,relative_humidity_2m`
        );
        const data = await res.json();
        const weatherData: WeatherData = {
          temperature: data.current.temperature_2m,
          humidity: data.current.relative_humidity_2m,
          windSpeed: data.current.wind_speed_10m,
          location: selectedLocation.name,
          suggestion: getSuggestion(data.current.temperature_2m, data.current.relative_humidity_2m),
        };
        setWeather(weatherData);
      } catch (error) {
        console.error('Failed to fetch weather:', error);
      }
      setLoading(false);
    };

    fetchWeather();
  }, [selectedLocation]);

  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <h1>🌦️ Weather & Smart Farming Tips</h1>
        <select
          className={styles.dropdown}
          value={selectedLocation.name}
          onChange={(e) =>
            setSelectedLocation(
              locations.find((loc) => loc.name === e.target.value) || locations[0]
            )
          }
        >
          {locations.map((loc) => (
            <option key={loc.name} value={loc.name}>
              {loc.name}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p className={styles.loading}>Loading weather...</p>
      ) : (
        weather && (
          <div className={styles.card}>
            <h2>{weather.location}</h2>
            <p>🌡️ <strong>Temperature:</strong> {weather.temperature}°C</p>
            <p>💧 <strong>Humidity:</strong> {weather.humidity}%</p>
            <p>🌬️ <strong>Wind Speed:</strong> {weather.windSpeed} m/s</p>
            <div className={styles.suggestionBox}>
              <strong>🌾 Farmer Tip:</strong>
              <p>{weather.suggestion}</p>
            </div>
          </div>
        )
      )}
    </main>
  );
}

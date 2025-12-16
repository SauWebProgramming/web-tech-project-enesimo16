// weather fetch ile

async function initWeatherApp() {
    const weatherTemp = document.getElementById('weather-temp');
    const weatherIcon = document.getElementById('weather-icon');
    const timeDisplay = document.getElementById('local-time');

    if (!weatherTemp) return; 

    const updateTime = () => {
        const now = new Date();
        timeDisplay.innerText = now.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
    };
    setInterval(updateTime, 1000); 
    updateTime(); 

    const lat = 40.77;
    const lon = 30.40;
    // Open-Meteo tarafından sağlanan ücretsiz hava durumu API'sini kullandım.
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

    try {
        const response = await fetch(url);
        
        if (!response.ok) { 
            throw new Error(`API hatası: ${response.status}`);
        }
        
        const data = await response.json();
        const temp = Math.round(data.current_weather.temperature);
        const code = data.current_weather.weathercode;

        let icon = '☀️'; 
        if (code >= 1 && code <= 3) icon = '🌤️'; 
        if (code >= 45 && code <= 48) icon = '🌫️'; 
        if (code >= 51 && code <= 65) icon = '🌧️'; 
        if (code >= 71 && code <= 75) icon = '❄️'; 
        if (code >= 80 && code <= 99) icon = '⛈️'; 

        weatherTemp.innerText = `Sakarya: ${temp}°C`;
        weatherIcon.innerText = icon;

    } catch (error) {
        console.error('Hava durumu alınamadı:', error);
        weatherTemp.innerText = 'Servis dışı';
        weatherIcon.innerText = '❌';
    }
}
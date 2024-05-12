document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("weatherForm");
    const weatherInfo = document.querySelector(".weather-info");
    const timeInfo = document.querySelector(".time-info");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        const city = document.getElementById("cityInput").value;
        const country = document.getElementById("countryInput").value;

        obtenerClima(city, country);
    });

    function obtenerClima(ciudad, pais) {
        const apiKey = '3e14c9912e8841ebba531410242102';
        const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${ciudad},${pais}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                mostrarClima(data);
            })
            .catch(error => {
                console.error('Error al obtener datos del clima:', error);
            });
    }

    function mostrarClima(datos) {
        const temperature = datos.current.temp_c;
        const condition = datos.current.condition.text;
        const feelsLike = datos.current.feelslike_c;
        const windSpeed = datos.current.wind_kph;
        const humidity = datos.current.humidity;
        const visibility = datos.current.vis_km;
        const iconUrl = datos.current.condition.icon;
        const city = datos.location.name;
        const country = datos.location.country;
        // Agregar clase para el efecto de desvanecimiento
        weatherInfo.classList.add('fade-in');

        weatherInfo.innerHTML = `
            <h2>${city}, ${country}</h2>
            <p>Temperatura: ${temperature}°C</p>
            <p>Condición: ${condition}</p>
            <p>Sensación térmica: ${feelsLike}°C</p>
            <p>Viento: ${windSpeed} km/h</p>
            <p>Humedad: ${humidity}%</p>
            <p>Visibilidad: ${visibility} km</p>
            <img src="https:${iconUrl}" alt="Icono del clima">
        `;
         // Eliminar clase después de un tiempo para volver a aplicar el efecto en la próxima búsqueda
    setTimeout(() => {
        weatherInfo.classList.remove('fade-in');
    }, 500); // Tiempo de la animación en milisegundos
    }

    function mostrarHora() {
        const ahora = new Date();
        const horas = ahora.getHours() % 12 || 12; // Formato de 12 horas
        const minutos = ahora.getMinutes();
        const ampm = ahora.getHours() >= 12 ? 'PM' : 'AM';

        timeInfo.textContent = `Hora Local: ${horas}:${minutos < 10 ? '0' : ''}${minutos} ${ampm}`;
    }
    mostrarHora();
});

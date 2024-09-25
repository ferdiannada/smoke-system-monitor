async function getSensorData() {
  try {
    // Ganti dengan IP address Pico W
    const response = await fetch("http://192.168.58.143:5000/updateData");
    const data = await response.json();
    console.log(data);
    document.getElementById("suhu").textContent =
      data.readingTemp.toFixed(2) + " °C";
    document.getElementById("kelembaban").textContent =
      data.readingHum.toFixed(2) + " %";
    document.getElementById("tekanan-udara").textContent =
      data.readingPress.toFixed(2) + " hPa";
    document.getElementById("ketinggian").textContent =
      data.readingAlt.toFixed(2) + " m";
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Fetch data setiap 5 detik
setInterval(getSensorData, 2000);

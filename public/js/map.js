var map = L.map("map").setView([20.5937, 78.9629], 5);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

async function fetchCoords() {
  try {
    let response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(currLocation)}`,
    );
    let data = await response.json();

    if (data && data.length > 0) {
      let lat = data[0].lat;
      let lon = data[0].lon;

      एँ;
      map.setView([lat, lon], 12);

      L.marker([lat, lon])
        .addTo(map)
        .bindPopup(
          `<b>${currLocation}</b><br>Exact location provided after booking.`,
        )
        .openPopup();
    }
  } catch (e) {
    console.log("Error finding coordinates:", e);
  }
}

fetchCoords();

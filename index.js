const express = require("express");
const app = express();

app.use(express.json());

app.post("/webhook", (req, res) => {
  const today = new Date();
  const hari = today.toLocaleDateString("id-ID", { weekday: "long" });
  const jam = today.getHours();

  let jadwal = [];

  if (hari === "Senin") {
    jadwal = [
      { jam: "07.00–08.30", mapel: "Matematika" },
      { jam: "08.30–10.00", mapel: "Bahasa Indonesia" },
      { jam: "10.15–11.45", mapel: "IPA" }
    ];
  } else if (hari === "Selasa") {
    jadwal = [
      { jam: "07.00–08.30", mapel: "IPS" },
      { jam: "08.30–10.00", mapel: "Bahasa Inggris" }
    ];
  } else {
    jadwal = [{ jam: "-", mapel: "Tidak ada jadwal" }];
  }

  let responseText = `📅 Jadwal hari ${hari}:\n`;
  jadwal.forEach(j => {
    responseText += `⏰ ${j.jam} — ${j.mapel}\n`;
  });

  res.json({
    fulfillmentText: responseText
  });
});

app.listen(3000, () => {
  console.log("Webhook aktif di port 3000");
});

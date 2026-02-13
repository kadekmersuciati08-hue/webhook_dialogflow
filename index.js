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
      { jam: "08.10–09.30", mapel: "bahasa bali"      },
      { jam: "09.30–10.10", mapel: "ipas"             },
      { jam: "10.10–10.40", mapel: "bahasa indonesia" }
                                                                                    
    ];
  } else if (hari === "Selasa") {
    jadwal = [
      { jam: "08.10–09.30", mapel: "pjok"        },
      { jam: "09.30–10.10", mapel: "dda"         }
      { jam: "10.10–10.40", mapel: "matematika"  }
    ]; 
    } else if (hari === "rabu") {
    jadwal = [
      { jam: "08.10–09.30", mapel: "ppkn"             },
      { jam: "09.30–10.10", mapel: "matemat           },
      { jam: "10.10–10.40", mapel: "seni budaya "     }
      { jam: "10.40–12.00", mapel: "sejarah"          },
      { jam: "12.00-13.20", mapel: "bk"               },
      { jam: "14.20-15.40", mapel: "bahasa indonesia" }
                                                     
      else if (hari === "kamis") {
    jadwal = [
      { jam: "08.10–09.30", mapel: "kka"          },
      { jam: "09.30–10.10", mapel: "dda"          }
      { jam: "10.10–10.40", mapel: "agama hindu"  }
    ];  
     else if (hari === "jumat") {
    jadwal = [
      { jam: "08.10–09.30", mapel: "informatika"          },
      { jam: "09.30-14.20m", mapel: "bahasa inggris"       }
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

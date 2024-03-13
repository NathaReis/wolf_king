const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const ytdl = require('ytdl-core');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", async (req,res) => {
    const url = req.body.link;
    try {
        // Obtendo informações sobre o vídeo
        const info = await ytdl.getInfo(url);
        // Encontrando o formato de áudio com a maior qualidade disponível
        const audioFormat = ytdl.chooseFormat(info.formats, { filter: 'audioonly' });
        // Baixando o áudio
        ytdl(url, { format: audioFormat })
          .pipe(fs.createWriteStream(`igest.mp3`));
        console.log('Áudio baixado com sucesso!');
      } catch (error) {
        console.error('Ocorreu um erro ao baixar o áudio:', error);
      }
});

const port = 5000;
app.listen(port, () => console.log('Server listen to ', port));
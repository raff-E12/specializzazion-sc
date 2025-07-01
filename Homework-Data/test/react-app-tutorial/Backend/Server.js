
// Uso di express nella Applicazione react

import express from "express"
import cors from "cors"

const app = express();
const port = 8080;
// const cors_port = cors();

const cors_option = {
    origin: "http://localhost:5173"
}

app.use(express.json());

app.use(cors(cors_option));

app.get("/", (req, res) =>{
    return res.status(201).send("Benvenuto nel server");
})

app.get("/api/list", (req, res) =>{
    return res.status(200).json({
        "id": 7,
        "colore": "blu",
        "prezzo": 19.99,
        "disponibile": false
      });
})

app.listen(port, ()=>{return console.log(`">> Iniziazione del server in http://localhost:${port}`)})
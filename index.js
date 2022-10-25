const dotenv = require("dotenv").config();
const express = require("express");

const app = express();

// La variable process est accessible partout (dans les fichiers js ou ejs)
const port = process.env.PORT || 8080;

//Mise en place du middleware de statiques
app.use("/public", express.static("public"));

// Middlware nécessaire pour la récupération des informations postées dans un formulaire. Grâce à lui on peut récupérer ces infos dans request.body
app.use(express.urlencoded({ extended: true }));

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccesStatus: 200,
  credentials: true,
};
app.use(cors(corsOptions));
app.options("*", cors());

//Mise en place du routage
const router = require("./app/router");
app.use(router);

app.listen(port, (_) => {
  console.log(`Listening on ${port} ...`);
});

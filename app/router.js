const express = require("express");
const carouselController = require("./controllers/carouselController.js");
const router = express.Router();

const port = process.env.PORT || 8080;

router.get("/", (request, response) => {
  console.log(request);
  response.send(`
    <div style="margin: 5em auto; width: 400px; line-height: 1.5">
      <h1 style="text-align: center">Hello!</h1>
      <p>Si tu vois ce message, c'est que ton serveur est bien lancé !</p>
      <div>Désormais, tu dois venir utiliser l'API</div>
      <ul style="display: inline-block; margin-top: .2em">
        <li>carousel : <code>GET http://localhost:${port}/carousel</code></li>
      </ul>
    </div>
  `);
});

router.get("/carousel", carouselController.getInfoCarousel);

module.exports = router;

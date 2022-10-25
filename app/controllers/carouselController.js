const Carousel = require("../models/carousel");

const carouselController = {
  getInfoCarousel: async (request, response) => {
    const carousel = await Carousel.findAll({
      raw: true,
    });

    if (!carousel) {
      console.log("aucun carousel de trouvé");
      response.status(401).end();
      return;
    }

    console.log(carousel);
    response.json(carousel);
  },
};

module.exports = carouselController;

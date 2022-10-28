const Carousel = require("../models/carousel");
const Project = require("../models/Project");
const MyDescription = require("../models/myDescription");

const carouselController = {
  getAllData: async (request, response) => {
    const carousel = await Carousel.findAll({
      raw: true,
    });

    if (!carousel) {
      console.log("aucun carousel de trouvé");
      response.status(401).end();
      return;
    }

    const project = await Project.findAll({
      raw: true,
    });

    if (!project) {
      console.log("aucun projet trouvé");
      response.status(401).end();
      return;
    }

    const myDescription = await MyDescription.findAll({
      raw: true,
    });

    if (!myDescription) {
      console.log("aucun projet trouvé");
      response.status(401).end();
      return;
    }

    console.log(carousel, project, myDescription);
    response.json({ carousel, project, myDescription });
  },
};

module.exports = carouselController;

const Project = require("../models/Project");

const carouselController = {
  getDataProject: async (request, response) => {
    const project = await Project.findAll({
      raw: true,
    });

    if (!project) {
      console.log("aucun projet trouvé");
      response.status(401).end();
      return;
    }

    console.log(project);
    response.json(project);
  },
};

module.exports = carouselController;

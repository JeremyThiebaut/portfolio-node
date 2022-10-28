-- On démarre une transaction afin de s'assurer de la cohérence globale de la BDD
BEGIN;

INSERT INTO
    "carousel" ("text", "image", "title")
VALUES
    (
        'text 1',
        'http://localhost:3001/public/images/work1.jpg',
        'titre 1'
    ),
    (
        'text 2',
        'http://localhost:3001/public/images/work2.jpg',
        'titre 2'
    ),
    (
        'text 3',
        'http://localhost:3001/public/images/work3.jpg',
        'titre 3'
    );

INSERT INTO
    "project" ("title", "description", "picture", "link")
VALUES
    (
        'Nom du projet 1',
        'description du projet',
        'http://localhost:3001/public/images/work1.jpg',
        'http://jtdev.fr'
    ),
    (
        'Nom du projet 2',
        'description du projet',
        'http://localhost:3001/public/images/work1.jpg',
        'http://jtdev.fr'
    );

INSERT INTO
    "myDescription" ("text")
VALUES
    (
        'Passionné de la technologie web depuis mon adolescence. Cette passion s'' est développée grâce aux jeux vidéo et à l ''informatique. J'' ai donc décidé de me lancer dans l ''aventure en mai 2022 en tant que Développeur web indépendant.'
    ),
    (
        'Ayant un Bac Professionnel "Système Électronique Numérique". J''ai voulu acquérir de nouvelles compétences en réalisant deux formations chez O''Clock en 2020 et la SJT en 2021/2022.'
    ),
    (
        'Développeur Full-stack spécialisé en HTML5, CSS3, PHP, Javascript, React, NodeJS, PostgreSQL, MySQL, Bootstrap 5 et SPIP. Je vous propose mes services, pour travailler ensemble sur vos projets numériques.'
    ),
    (
        'J''aime découvrir, apprendre, expérimenter de nouvelles techniques au fur et à mesure de mes projets.'
    );

-- On enregistre les transactions en BDD si est seulement si tout c'est bien passé.
-- Cette instruction signe la fin du fichier.
COMMIT;
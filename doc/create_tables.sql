-- On démarre une transaction afin de s'assurer de la cohérence globale de la BDD
BEGIN;

-- Nous supprimerons ensuite les tables 'si elles existent', pour pouvoir à chaque fois retravailler sur une base saine.
DROP TABLE IF EXISTS "carousel",
"project",
"myDescription";

-- Ensuite on la (re)crée
CREATE TABLE IF NOT EXISTS "carousel" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "image" TEXT NOT NULL DEFAULT ''
);

CREATE TABLE IF NOT EXISTS "project" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "picture" TEXT NOT NULL DEFAULT '',
    "link" TEXT NOT NULL DEFAULT ''
);

CREATE TABLE IF NOT EXISTS "myDescription" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "text" TEXT NOT NULL DEFAULT ''
);

CREATE TABLE IF NOT EXISTS "myDocuments" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "link" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "picture" TEXT NOT NULL DEFAULT '',
    "title" TEXT NOT NULL DEFAULT ''
);

-- On enregistre les transactions en BDD si est seulement si tout c'est bien passé.
-- Cette instruction signe la fin du fichier.
COMMIT;
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

-- On enregistre les transactions en BDD si est seulement si tout c'est bien passé.
-- Cette instruction signe la fin du fichier.
COMMIT;
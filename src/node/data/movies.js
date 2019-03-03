const directors =  require('./directors');

module.exports = [
    {
        id: 1,
        title: 'NOCTURNAL ANIMALS',
        year: 2017,
        lang: 'English',
        director: directors[0],
        synopsis: 'Susan Morrow, une galeriste d’art de Los Angeles, s’ennuie dans l’opulence de son existence, délaissée par son riche mari Hutton. Alors que ce dernier s’absente, encore une fois, en voyage d’affaires, Susan reçoit un colis inattendu : un manuscrit signé de son ex-mari Edward Sheffield dont elle est sans nouvelles depuis des années. Une note l’accompagne, enjoignant la jeune femme à le lire puis à le contacter lors de son passage en ville. Seule dans sa maison vide, elle entame la lecture de l’oeuvre qui lui est dédicacée.',
        genre: 'Drame, Thriller'
    },
    {
        id: 2,
        title: '3 BILLBOARDS, LES PANNEAUX DE LA VENGEANCE',
        year: 2018,
        lang: 'English',
        director: directors[1],
        synopsis: `Après des mois sans que l'enquête sur la mort de sa fille ait avancé, Mildred Hayes prend les choses en main, affichant un message controversé visant le très respecté chef de la police sur trois grands panneaux à l'entrée de leur ville.`,
        genre: 'Drame'
    }
]
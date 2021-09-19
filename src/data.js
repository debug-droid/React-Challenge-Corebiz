import cemiterio from "./img/cemiterio.jpg";
import fortim from "./img/fortim.jpg";
import sherlock from "./img/sherlock.jpg";
import conde from "./img/conde.jpg";

import movieConan from "./img/movie-conan.jpg";
import movieConde from "./img/movie-conde.jpg";
import movieExorcista from "./img/movie-exorcista.jpg";
import movieSherlock from "./img/movie-sherlock.jpg";

import serieDexter from "./img/serie-dexter.jpg";
import serieLore from "./img/serie-lore.jpg";
import serieOffice from "./img/serie-office.jpg";
import serieSouth from "./img/serie-south.jpg";

const data = {
    livros: [
    {
        name: 'cemiterio maldito',
        url: cemiterio
    },
    {
        name: 'O fortim',
        url: fortim
    },
    {
        name: 'Sherlock Holmes',
        url: sherlock
    },

    {
        name: 'O conde de monte cristo',
        url: conde
    }
    ],
    filmes: [
        {
            name: 'O conde de monte cristo',
            url: movieConde
        },
        {
            name: 'conan',
            url: movieConan
        },
        {
            name: 'exorcista',
            url: movieExorcista
        },
        {
            name: 'Sherlock Holmes',
            url: movieSherlock
        },
    ],
    series: [
        {
            name: 'Dexter',
            url: serieDexter
        },
        {
            name: 'The Lore',
            url:  serieLore
        },
        {
            name: 'The office',
            url: serieOffice
        },
        {
            name: 'South Park',
            url: serieSouth
        }
        
    ],
}

export default data;

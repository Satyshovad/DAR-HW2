import { Movie, Actor } from './types';

export const movies: Movie[] = [
    {
        id: 1, 
        title: 'Batman',
        description: 'vgbhnjmk',
        duration: 180,
        image: 'https://i.pinimg.com/originals/1d/16/83/1d1683df1921c56cdedc14d9e74716c4.jpg'
    },
    {
        id: 2, 
        title: 'Spider-man',
        description: 'vgbhnjmk',
        duration: 120,
        image: 'https://get.wallhere.com/photo/2560x1600-px-action-man-marvel-spider-spiderman-superhero-1684899.jpg'
    },
    {
        id: 3,
        title: 'Iron Man',
        description: 'vgbhnjmk',
        duration: 150,
        image: 'https://dzbc.org/d/2068/ATTI2.jpg'
    }
];

export const actors: Actor[] = [
    {
        id: 1,
        name: 'Tom Holland',
        film: 'Uncharted',
        duration: 120,
        image: 'https://i.pinimg.com/736x/ff/9c/4d/ff9c4d12d6655783fca9bb73b0b81602.jpg'
    },
    {
        id: 2, 
        name: 'Zendaya Maree',
        film: 'Spider-Man: No Way Home/ Dune',
        duration: 156,
        image: 'https://i.pinimg.com/originals/c2/b0/aa/c2b0aaf0d73259b794181d520eff13ff.jpg'
    },
    {
        id: 3,
        name: 'Scarlett Johansson',
        film: 'Black Widow',
        duration: 90,
        image: 'https://kinowar.com/wp-content/uploads/2020/07/скарлетт-йоханссон-фото-scarlett-johansson-photo-4.jpg'
    }
];
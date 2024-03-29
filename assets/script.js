const images = [
    {
        image: 'assets/img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'assets/img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'assets/img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'assets/img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'assets/img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }, {
        image:  'https://www.freecodecamp.org/news/content/images/2022/08/pexels-antonio-batinic--4164418--1-.jpg',
        title: 'Code',
        text: 'Code image'
    }
];

const containerHighlighted = document.querySelector('.highlighted');
const containerThumbs = document.querySelector('.thumbs');

images.forEach((image, index) => {
    containerHighlighted.innerHTML += `<img src="${image.image}" alt="" class="${index == 0 ? 'active' : ''}">`;
    containerThumbs.innerHTML += `<img src="${image.image}" alt="" class="${index == 0 ? 'active' : ''}">`;
});

// selezionimo le immagini nell'html
const listHighlighted = document.querySelectorAll('.highlighted img');
// selezioniamo le miniature
const listThumbs = document.querySelectorAll('.thumbs img');
// selezioniamo i bottoni
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');


// definito una variabile che rappresenta lo stato attuale del carosello
// cioe' l'indice dell'immagine attiva
let activeIndex = 0;

btnNext.addEventListener('click',
    function() {
        // dall'immagine attiva tolgo la classe active
        listHighlighted[activeIndex].classList.remove('active');
        listThumbs[activeIndex].classList.remove('active');
        // settiamo il nuovo valore di active index
        activeIndex++;
        if (activeIndex >= listHighlighted.length) {
            activeIndex = 0;
        }
        // alla nuova immagine attiva aggiungiamo la classe active
        listHighlighted[activeIndex].classList.add('active');
        listThumbs[activeIndex].classList.add('active');
    }
);

btnPrev.addEventListener('click',
    function() {
        // dall'immagine attiva tolgo la classe active
        listHighlighted[activeIndex].classList.remove('active');
        listThumbs[activeIndex].classList.remove('active');
        // settiamo il nuovo valore di active index
        activeIndex--;
        if (activeIndex < 0) {
            activeIndex = listHighlighted.length - 1;
        }
        // alla nuova immagine attiva aggiungiamo la classe active
        listHighlighted[activeIndex].classList.add('active');
        listThumbs[activeIndex].classList.add('active');
    }
);

// ciclo per aggiungere gli event listeners alle miniature
for (let i = 0; i < listThumbs.length; i++) {
    listThumbs[i].addEventListener('click',
        function() {
            console.log('cliccata la miniature in posizione ' + i)
            listHighlighted[activeIndex].classList.remove('active');
            listThumbs[activeIndex].classList.remove('active');
            activeIndex = i;
            listHighlighted[activeIndex].classList.add('active');
            listThumbs[activeIndex].classList.add('active');
        }
    )
}



/*
btnNext ---> al click fai function() {...}
btnPrev ---> al click fai function() {...}
thumb0 ----> al click fai function() {...}
thumb1 ----> al click fai function() {...}
thumb3 ----> al click fai function() {...}
thumb4 ----> al click fai function() {...}
*/
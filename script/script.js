const carrosselItens = [
    {
        id: 01,
        img: 'img/img1.jpg',
        caption: 'Martin Wallström e Rami Malek fazem parte de trama densa.',
        alt: 'Martin Wallström e Rami Malek fazem parte de trama densa.'
    },
    {
        id: 02,
        img: 'img/img2.jpg',
        caption: 'O personagem de Rami Malek faz parte de um grupo hacker que luta contra grandes corporações corruptas.',
        alt: 'O personagem de Rami Malek faz parte de um grupo hacker que luta contra grandes corporações corruptas.'
    },
    {
        id: 03,
        img: 'img/img3.jpg',
        caption: 'A relação entre os personagens de Christian Slater e Rami Malek é enigmática.',
        alt: 'A relação entre os personagens de Christian Slater e Rami Malek é enigmática.'
    },
    {
        id: 04,
        img: 'img/img4.jpg',
        caption: 'O personagem de Rami Malek parece sofrer de desassociação de personalidade.',
        alt: 'O personagem de Rami Malek parece sofrer de desassociação de personalidade.'
    },
    {
        id: 05,
        img: 'img/img5.jpg',
        caption: 'O personagem de Rami Malek se consulta frequentemente com uma psiquiatra vivida por Gloria Reuben.',
        alt: 'O personagem de Rami Malek se consulta frequentemente com uma psiquiatra vivida por Gloria Reuben.'
    }
];

const carrosselImage = document.querySelector('#carrossel-img');
const carrosselCaption = document.querySelector('#carrossel-caption');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');

const navigateCarrossel = function(carrossel, imageOutput, captionOutput, fButton, pButton) {
    let counter = 0;
    const changeImage = () => {
        imageOutput.setAttribute('src', carrossel[counter].img);
        imageOutput.classList.remove('opacity');
        imageOutput.setAttribute('alt', carrossel[counter].alt);
        captionOutput.innerText = carrossel[counter].caption;
    };

    const btnAction = (btn) => {
        btn.setAttribute('disabled', '');
        console.log(counter);
        imageOutput.classList.add('opacity');
        let myTimeOut = setTimeout(() => {
            console.log(counter);
            changeImage();
            btn.removeAttribute('disabled', '');
        }, 250);
    }

    fButton.addEventListener('click', () => {
        btnAction(btn1);
        if (counter < carrossel.length - 1) {
            counter++
        } else {
            counter = 0;
        }
    });

    pButton.addEventListener('click', () => {
        btnAction(btn2);
        if (counter > 0) {
            counter--;
        } else {
            counter = carrossel.length - 1;
        }
    });
};

navigateCarrossel(carrosselItens, carrosselImage, carrosselCaption, btn1, btn2);

let rellax = new Rellax('.rellax');
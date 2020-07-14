const carrosselContainer = document.querySelector('.galeria__carrossel');
const carrosselCollection = document.querySelectorAll('.carrossel-item');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
let counter = 0;

// CARROSSEL
const navigateCarrossel = () => {
    btn1.addEventListener('click', () => {
        carrosselCollection[counter].classList.remove('opacity');
        let hideCurrentItem = setTimeout(() => {
            carrosselCollection[counter].classList.remove('display');
        }, 100);
        
        let displayNextItem = setTimeout(() => {
            counter++;
            carrosselCollection[counter].classList.add('display', 'opacity');
            if (counter === carrosselCollection.length -1) {
                btn1.setAttribute('disabled', '');
            } else if (counter > 0) {
                if (btn2.hasAttribute('disabled', '')) {
                    btn2.removeAttribute('disabled', '');
                    btn2.setAttribute('enabled', '');
                }
            }
        }, 100);
    });
    btn2.addEventListener('click', () => {
        if (counter >= 0) {
            carrosselCollection[counter].classList.remove('opacity');
            let hideCurrentItem = setTimeout(() => {
                carrosselCollection[counter].classList.remove('display');
            }, 100);
            
            let displayNextItem = setTimeout(() => {
                counter--;
                carrosselCollection[counter].classList.add('display', 'opacity');
                if (counter === 0) {
                    btn2.setAttribute('disabled', '');
                } else if (counter < carrosselCollection.length - 1) {
                    if (btn1.hasAttribute('disabled', '')) {
                        btn1.removeAttribute('disabled', '');
                        btn1.setAttribute('enabled', '');
                    }
                }
            }, 100);
        }
    })
};

navigateCarrossel();
let rellax = new Rellax('.rellax');

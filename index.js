const box = document.getElementById('box');
const container = document.querySelector('.container');
const guess = document.querySelector('.guess');

let colors = [];
let colorToGuess = '';
let quantity = 6;

const generateColor = () => {
    let color = '#';
    for (let i = 0; i < quantity; i++) {
        for (let i = 0; i < 6; i++) {
            color += Math.floor(Math.random() * 16).toString(16);
        }
        return color;
    }
};

/* Genera la cantidad de cajas correspondientes con quantity
    Genera 6 veces un numero al azar entre 0 y 15,
    y toString() los convierte a su valor hexadecimal */

const generateArrayColors = () => {
    while (colors.length < quantity) {
        const newColor = generateColor();
        if (!colors.includes(newColor)) {
            colors.push(newColor);
        }
    }
};
/* Rellena el array con la cantidad de cajas correspondientes 
    usando generateColors() y asegura que no haya duplicados */

generateArrayColors();

colorToGuess = colors[Math.floor(Math.random() * quantity)];
/* Retorna una posicion al azar de colors[] mediante un 
    indice aleatorio entre 0 y quantity */

guess.textContent = `El color a adivinar es ${colorToGuess}`;

const verifyColor = (color) => {
    if (color === colorToGuess) {
        window.alert('Ganaste!! Reiniciando...');
        window.location.reload();
    }
};
/* Verifica si el color tomado al azar de colors[] 
    es igual al color pasado por parametro */

const renderColors = () => {
    colors.forEach((e) => {
        const box = document.createElement('div');
        box.classList.add('box');
        box.id = e;
        box.style.backgroundColor = e;

        box.addEventListener('click', (e) => verifyColor(e.target.id));

        container.appendChild(box);
    });
};
/*  Renderiza cada caja con su color, le asigna su 
    valor mediante el id y su listener verifyColor() */

renderColors();

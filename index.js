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

const generateArrayColors = () => {
    while (colors.length < quantity) {
        const nuevoColor = generateColor();
        if (!colors.includes(nuevoColor)) {
            colors.push(nuevoColor);
        }
    }
};

generateArrayColors();
colorToGuess = colors[Math.floor(Math.random() * quantity)];

guess.textContent = `El color a adivinar es ${colorToGuess}`;

const verifyColor = (color) => {
    if (color === colorToGuess) {
        window.alert('Ganaste!! Reiniciando...');
        window.location.reload();
    }
};

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

renderColors();

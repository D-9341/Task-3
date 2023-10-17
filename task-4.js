const readlineSync = require('readline-sync');

const calculateRectangleProperties = (width, heigth) => {
    width = readlineSync.question('Введите ширину: ');
    width = Number(width);
    heigth = readlineSync.question('Введите высоту: ');
    heigth = Number(heigth);
    P = width + heigth;
    S = width * heigth;
    return console.log(`Периметр введённого прямоугольника: ${P}\nПлощадь введённого прямоугольника: ${S}`);
}

calculateRectangleProperties();
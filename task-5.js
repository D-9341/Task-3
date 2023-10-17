const readlineSync = require('readline-sync');

const calculateDistance = (x1, y1, x2, y2) => {
    x1 = readlineSync.question('Введите координату x первой точки: ');
    x1 = Number(x1);
    y1 = readlineSync.question('Введите координату y первой точки: ');
    y1 = Number(y1);
    x2 = readlineSync.question('Введите координату x второй точки: ');
    x2 = Number(x2);
    y2 = readlineSync.question('Введите координату y второй точки: ');
    y2 = Number(y2);
    return console.log(`Расстояние между двумя точками: ${(x1 + y1) - (x2 + y2)}`);
}

calculateDistance();
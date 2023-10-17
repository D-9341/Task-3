const readlineSync = require('readline-sync');

const calculateTime = (distance, speed) => {
    distance = readlineSync.question('Введите расстояние в км: ');
    distance = Number(distance);
    speed = readlineSync.question('Введите скорость в км/ч: ');
    speed = Number(speed);
    time = distance / speed;
    minutes = Math.floor(time * 60 % 60);
    return console.log(`Необходимо времени для преодоления ${distance} километров при скорости ${speed} км/ч: ${Math.floor(time)} ч, ${minutes} мин`);
}

calculateTime();
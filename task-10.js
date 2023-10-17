const readlineSync = require('readline-sync');

const generateRandomEquation = () => {
    a = Math.round(Math.random());
    b = Math.round(Math.random());
    c = Math.round(Math.random());
    return console.log(`Случайно сгенерированное уравнение (правильность не гарантирована): ${a}x + ${b} = ${c}`)
}

generateRandomEquation();
const readlineSync = require('readline-sync');

const celsiusToFahrenheit = (celsius) => {
    celsius = readlineSync.question('Введите температуру по цельсию для конвертации: ');
    fahrenheit = (celsius * (9/5) + 32);
    return console.log(`Введённая температура по цельсию: ${celsius}\nКонвертированная температура по фаренгейту: ${fahrenheit}`);
}

celsiusToFahrenheit();
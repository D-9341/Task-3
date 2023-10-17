const readlineSync = require('readline-sync');

const calculateDiscount = (price, discountPercentage) => {
    price = readlineSync.question('Введите цену: ');
    discountPercentage = readlineSync.question('Введите процент скидки:');
    return console.log(`Сумма с учётом скидки: ${price * (discountPercentage / 100)}`);
}

calculateDiscount();
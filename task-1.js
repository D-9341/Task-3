const readlineSync = require('readline-sync');

const incomeTaxCalculator = (income) => {
    income = readlineSync.question('Введите ваш доход: ');
    tax = income * 0.15;
    return console.log(`Налог на доход равен ${tax}`);
}

incomeTaxCalculator()
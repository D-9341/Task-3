const readlineSync = require('readline-sync');

const calculateBalance = (incomes, expenses) => {
    incomes = readlineSync.question('Введите доход: ');
    expenses = readlineSync.question('Введите расходы: ');
    balance = incomes - expenses;
    if (balance >= 0) {
        balance = balance
    } else if (balance < 0) {
        balance = `${balance}, кажется кто-то в долгах!`
    }
    return console.log(`Ваш баланс: ${balance}`);
}

calculateBalance();
const readlineSync = require('readline-sync');

const calculateEmployeeBonus = (salary, performanceRating) => {
    salary = readlineSync.question('Введите зарплату: ');
    performanceRating = readlineSync.question('Введите рейтинг: ');
    if (performanceRating > 8) {
        bonus = 1.2;
    } else if (performanceRating <= 8) {
        bonus = 1.1;
    }
    total = salary * bonus;
    return console.log(`Зарплата сотрудника: ${salary}\nРейтинг сотрудника: ${performanceRating}\nКоэффициент зарплаты: ${bonus}\nИтоговая зарплата: ${Math.round(total)}`);
}

calculateEmployeeBonus();
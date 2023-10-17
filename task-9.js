const readlineSync = require('readline-sync');

const calculateAverageGrade = (grades) => {
    grades = readlineSync.question('Введите оценки: ');
    list = grades.split(' ').map(Number);
    total = list.length;
    list = list.reduce((all, marks) => all + marks, 0) / total
    return console.log(`Средняя оценка: ${list}`);
}

calculateAverageGrade();
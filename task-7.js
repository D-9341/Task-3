const readlineSync = require('readline-sync');

const countWords = (sentence) => {
    sentence = readlineSync.question('Введите предложение для подсчёта слов: ');
    list = sentence.split(' ');
    total = list.length;
    return console.log(`Количество слов в введённом предложении: ${total}`);
}

countWords();
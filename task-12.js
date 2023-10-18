const readlineSync = require('readline-sync');

const reverseStringWithException = (str, exception) => {
    str = readlineSync.question('Введите строку: ');
    exception = readlineSync.question('Введите слово-исключение: ');
    list = str.split(' ');
    exc = list.indexOf(exception);
    if (exc === 0) {
        second = 1;
    } else if (exc > 0) {
        second = exc;
    };
    toDelete = list.splice(exc, second);
    list = list.join('').split('');
    final = list.reverse();
    final = final.join('');
    return console.log(`${toDelete} ${final}`);
}

reverseStringWithException();
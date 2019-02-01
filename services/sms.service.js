


module.exports = {
    inputText
};


const keyboards = [
    [' ', '0'],
    ['a', '2'],
    ['b', '22'],
    ['c', '222'],
    ['d', '3'],
    ['e', '33'],
    ['f', '333'],
    ['g', '4'],
    ['h', '44'],
    ['i', '444'],
    ['j', '5'],
    ['k', '55'],
    ['l', '555'],
    ['m', '6'],
    ['n', '66'],
    ['o', '666'],
    ['p', '7'],
    ['q', '77'],
    ['r', '777'],
    ['s', '7777'],
    ['t', '8'],
    ['u', '88'],
    ['v', '888'],
    ['w', '9'],
    ['x', '99'],
    ['y', '999'],
    ['z', '9999'],
];


function inputText(message) {

    if (typeof message !== 'string') {
        return console.log('Mensagem deve ser uma string')
    }
    if (message.length < 1 || message.length > 255) {
        return console.log('Mensagem deve conter de 1 a 255 caracteres');
    }
    message = message.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();

    if (message.match(/^([0-9_])*$/)) {
        return getText(message, keyboards);
    }
    if (message.match(/^([a-z ])*$/)) {
        return getNumber(message, keyboards);
    }

    return console.log('Mensagem deve conter números  somente ou texto somente');
}


function getText(text, inputKeyBoards) {
    let newKeyBoards = inputKeyBoards.slice(0);
    const char = newKeyBoards.pop();

    if (text.match(/^([a-z _])*$/)) {
        return text.replace(/_/g, '');
    }

    text = text.replace(new RegExp(char[1], 'gi'), char[0]);

    return getText(text, newKeyBoards);
}

function getNumber(number, inputKeyBords) {
    let newKeyBords = inputKeyBords.slice(0);
    const char = newKeyBords.pop();

    if (number.match(/^([0-9_])*$/)) {
        return number;
    }

    number = number.replace(new RegExp(`${char[0]}${char[1].charAt(0)}`, 'gi'), `${char[1]}_${char[1].charAt(0)}`);
    number = number.replace(new RegExp(char[0], 'gi'), char[1]);

    return getNumber(number, newKeyBords);
}
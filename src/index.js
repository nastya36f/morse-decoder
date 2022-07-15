const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let string = '';
    for ( let i = 0; i < expr.length; ) {
        let ten = expr.slice(i, i + 10);    //цикл разбивает на десятки
        let morse = '';
        if (ten === '**********') {
            string += ' ';
            
        }else {
            for (let j = 10; j > 0;) {                      // цикл перебирает десяток и превращает в точки-тире
                let letter = ten.slice(j-2, j);
                if(letter === '10') {
                    morse = '.' + morse;
                }else {
                    if(letter === '11'){
                        morse = '-' + morse;
                    }else {
                        break;
                    }                  
                }
                j -= 2;
            }
            string += MORSE_TABLE[morse];
        }
        i += 10;
    }

    return string;
}

module.exports = {
    decode
}
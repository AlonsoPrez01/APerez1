let char = 'b';

esVocal(char);

function esVocal(char){
    if((char = 'a') && (char = 'A')){
        console.log("El caracter es vocal.");
        return true;
    }
    else if((char = 'e') && (char = 'E')){
        console.log("El caracter es vocal.");
        return true;
    }
    else if((char = 'i') && (char = 'I')){
        console.log("El caracter es vocal.");
        return true;
    }
    else if((char = 'o') && (char = 'O')){
        console.log("El caracter es vocal.");
        return true;
    }
    else if((char = 'u') && (char = 'U')){
        console.log("El caracter es vocal.");
        return true;
    }
    else {
        console.log("El caracter no es vocal");
        return false;
    }
}
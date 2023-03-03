let a = 42;
let b = 20;
let c = 20;

numeroMenor(a, b, c);

function numeroMenor(a, b, c){
    if(a < b && a < c ){
        console.log("El numero menor es: " + a);
    }
    else if(b < a && b < c){
        console.log("El numero menor es: " + b);
    }
    else if(c < a && c < b){
        console.log("El numero menor es: " + c);
    }
    else {
        console.log("Los numeros son iguales.");
    }
}
let vinoBlanco = 1;
let vinoTinto = 2;
let proCliente;
let discount;

proCliente = 2;

if (proCliente == 1){
    discount = '5%';
    console.log(discount);
}
else if(proCliente == 2){
    discount = '10%';
    console.log(discount);
}
else {
    console.log("No existe el producto.");
}
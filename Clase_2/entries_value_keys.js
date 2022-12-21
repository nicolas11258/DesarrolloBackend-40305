let impuestos = {
    impuesto1:50,
    impuesto2:100,
    impuesto3:110
};

let parLlaveValor = Object.entries(impuestos);
console.log(parLlaveValor);

let soloLlaves = Object.keys(impuestos);
console.log(soloLlaves);

let soloValores = Object.values(impuestos);
console.log(soloValores);

let numero = '+57310-2345667';

let numeroSinGuiones = numero.replace("-","");

console.log(numero);
console.log(numeroSinGuiones);
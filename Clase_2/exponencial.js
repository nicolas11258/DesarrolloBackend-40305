let valoresBase = [1,2,3,4,5,6];

let nuevosValores =  valoresBase.map((numero,indice)=>numero**indice);

console.log(nuevosValores);

let nombres = ['Juan', 'Nicolas', 'Ana', 'Camilo'];
if(nombres.includes('Camilo')){
    console.log('Ese nombre si se encuentra')
}else{
    console.log('Ese nombre no se encuentra')
}




let arregloPrueba = [1,2,3,4,5];

const miFuncionMap = (arreglo, callback) => {
    let nuevoArreglo = [];
    for (let index = 0; index < arreglo.length; index++) {
        let nuevoValor = callback(arreglo[index]);
        nuevoArreglo.push(nuevoValor);
    }

    return nuevoArreglo;
}

let nuevoArregloPropio = miFuncionMap(arregloPrueba, (x)=>{x*2});
console.log(nuevoArregloPropio);

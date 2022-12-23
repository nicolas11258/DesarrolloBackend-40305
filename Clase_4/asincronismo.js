




//setTimeout(callback, delay);

console.log("Iniciando programa");

setTimeout(() => {
    console.log("Hola");
}, 1000);

console.log("Este mensaje se imprimira antes que el Hola");

// setInterval(callback, interval);

console.log("Iniciando programa");

let contador = 0;

const intervalo = setInterval(()=> {
    console.log(contador);
    contador++;
    //contador = contador + 1;

    if(contador == 10) {
        clearInterval(intervalo);
    }
},1000);

console.log("Este mensaje se imprimira antes que todos los numeros");



function suma(x,y){
    return x+y;
};

const suma2 = (x,y) => {
    return x+y;
};

// Callback

function saludar(nombre, callback) {
    console.log(`Hola, ${nombre}`);
    callback();
}

function despedirse(){
    console.log("Adios");
}

saludar("Diego", despedirse);

// Promise
const promesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const resultado = Math.random();
        if(resultado > 0.5){
            resolve(resultado);
        }else{
            reject(new Error("El resultado es menor que 0.5"))
        }
    }, 1000);
});

promesa.then((resultado)=> {
    console.log("La promesa se ha cumplido");
})
.catch((error)=>{
    console.log("La promesa no se ha cumplido");
})

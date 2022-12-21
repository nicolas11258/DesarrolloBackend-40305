


const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if(divisor === 0){
            reject('No se puede hacer divisiones por cero');
        }else{
            resolve(dividendo/divisor);
        }
    })
}


dividir(6,2).then(resultado =>{
    console.log(resultado);
})
.catch(error =>{
    console.log(error);
})

const funcionAsincrona = async() => {
    try{
        let resultado = await dividir(10,5)
        console.log(resultado)
    }
    catch(error){
        console.log(error);
    }
}

funcionAsincrona();


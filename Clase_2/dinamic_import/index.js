let modo = 'calculos';

async function ejemploImport(){
    if(modo === "calculos"){
        const {default: Calculadora} = await import('./calculadora.js');
        let calculadora2 = new Calculadora();
        console.log(calculadora2.sumar(2,5));
    }
}

ejemploImport();
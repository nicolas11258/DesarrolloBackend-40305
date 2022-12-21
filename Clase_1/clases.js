



class nombreDeMiClase{
    constructor(parametrosDeLaCreacion){
        console.log('Nuevo objeto creado');
        this.variableInterna = parametrosDeLaCreacion;
    }

    static variable = 4;

    metodo1(){
        console.log('Soy un metodo de la clase');
    }

    metodo2 = () =>{
        console.log(`Soy un metodo de la clase que me permite agregar variables internas ejemplo: ${this.variableInterna}`);
    }
}

let instancia = new nombreDeMiClase();

//console.log(instancia);
instancia.metodo1();

console.log(nombreDeMiClase.variable);

let instancia_2 = new nombreDeMiClase();
let instancia_3 = new nombreDeMiClase();


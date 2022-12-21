




class Persona{
    constructor(nombre){
        this.nombre = nombre;
    }

    static especie = "Humano";
    saludar = () => {
        console.log(`Hola soy ${this.nombre}, mucho gust!`);
    }

    getEspecie = () => {
        console.log(`Aunque no lo creas, soy un ${Persona.especie}`);
    }
}

let persona1 = new Persona("Jose");
let persona2 = new Persona("Ivan");
persona1.saludar();
persona2.saludar();
persona1.getEspecie();
persona2.getEspecie();
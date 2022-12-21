let variableDePrueba = 0;

let varaibleAsignable = variableDePrueba || 'Sin valor';
console.log(varaibleAsignable);

let varaibleAsignableNullish = variableDePrueba??'Sin valor';
console.log(varaibleAsignableNullish);

class Persona {
    #fullname;
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.#fullname = `${this.nombre} ${this.apellido}`;
    }

    getFullName = () => {
        return this.#fullname;
    }
}

let instancia = new Persona("Diego", "Escudero");
console.log(instancia.getFullName());
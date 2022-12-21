class TicketManager {
    #precioBaseGanancia = 0.15;
    constructor () {
        this.eventos = [];
    }

    getEventos = () => {
        return this.eventos;
    }

    addEventos = (nombre, lugar, precio, capacidad=50,fecha=new Date().toLocaleDateString()) => {
        const evento = {
            nombre,
            lugar,
            precio: precio+precio*this.#precioBaseGanancia,
            capacidad,
            fecha,
            participantes:[]
        }

        if(this.eventos.length === 0) {
            evento.id= 0;
        }else{
            evento.id = this.eventos.length;
        }
        this.eventos.push()
    }
}
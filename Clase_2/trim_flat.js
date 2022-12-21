let cadena = '          hola';

console.log(cadena.trim());
console.log(cadena);

let mensajes = [];
let intentoDeMensaje = 'asdsfasfsdfds';
if(intentoDeMensaje.trim().length>0){
    mensajes.push(intentoDeMensaje.trim())
    console.log(mensajes);
}else {
    console.log("Mensaje vacio, por favor arregla este caso");
}




import ManagerUsuarios from "./ManagerUsuarios.js";

const manager = new ManagerUsuarios();
const env = async() =>{
    let primeraConsultaUsuarios = await manager.consultarUsuarios();
    console.log(primeraConsultaUsuarios); //Debe devolver vacío
    let user = {
        nombre:"Mauricio",
        apellido:"Espinosa",
        edad:28,
        curso:"Backend"
    }
    let result = await manager.crearUsuario(user);
    console.log(result);
    let segundaConsultaUsuarios = await manager.consultarUsuarios();
    console.log(segundaConsultaUsuarios);
}



const escribirArchivo = require('./escArchivo')

console.log('Iniciar el programa')

escribirArchivo('Hola mundo', ()=>{
    console.log('Termine de escribir el archivo')
})

console.log('fin del programa')
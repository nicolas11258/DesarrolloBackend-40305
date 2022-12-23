



const fs = require("fs");

fs.readFile("mi-archivo.txt", (error, data) => {
    if(error){
        console.log(error);
        return;
    }

    console.log(data.toString());
});

fs.writeFile("mi-archivo.txt", "Hola mundo", (error)=>{
    if (error){
        console.log(error);
        return;
    }
    console.log("El archivo fue editado");
})

fs.mkdir('mi-directorio', (error) => {
    if (error) {
  
      console.error(error);
      return;
  
    }
    console.log('El directorio se ha creado correctamente');
  
  });





const fs = require("fs");

console.log("Iniciando programa");

try {
    const data = fs.readFileSync("mi-archivo.txt");
    console.log(data.toString());
}catch(error){
    console.log(error);
};

console.log("finaliza programa");

///////////////////

console.log("Iniciando programa");

fs.readFile("mi-archivo.txt", (error, data)=> {
    if(error) {
        console.log(error);
        return
    }
    console.log(data.toString());
})

console.log("finaliza programa");
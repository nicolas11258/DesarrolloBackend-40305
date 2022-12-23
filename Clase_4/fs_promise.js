





const fs = require("fs").promises;

fs.readFile("mi-archivo.txt", "utf8")
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.error(error);
})

async function readFile() {
    try {
      const data = await fs.readFile('mi-archivo.txt', 'utf8');
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  readFile();

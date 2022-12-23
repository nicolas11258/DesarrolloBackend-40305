




const fs = require('fs').promises;

async function getFileSize() {
  try {
    const stats = await fs.stat('mi-archivo.txt');
    console.log(`Size of file.txt: ${stats.size} bytes`);
  } catch (error) {
    console.error(error);
  }
}

getFileSize();
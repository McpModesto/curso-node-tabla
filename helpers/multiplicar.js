const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar, hasta) => {
    let salida = '';
    for (let index = 1; index <= hasta; index++) {
        salida += `${base} x ${index} = ${base*index}\n`;
    }
    
    if (listar) console.log(colors.rainbow(salida));
    
    try {
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt creada`.red;
    } catch (error) {
        throw error;
    }
    
}

// Exportar función.
module.exports = {
    crearArchivo
}
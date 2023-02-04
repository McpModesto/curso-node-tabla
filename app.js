// Requerir filesystem.
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(msg => console.log(msg))
        .catch(err => console.log(err));
 
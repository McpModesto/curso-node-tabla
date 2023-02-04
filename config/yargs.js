const argv = require('yargs')
// Flag en consola.
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Base de la tabla de multiplicar'
})
.check( (argv, options) => {
    if (isNaN(argv.base)) {
        throw 'La base tiene que ser un número';
    }
    return true;
})
.option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en consola'
})
.check( (argv, options) => {
    if (isNaN(argv.base)) {
        throw 'La base tiene que ser un número';
    }
    return true;
})
.option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Hasta donde quiere multiplicar'
})
.check( (argv, options) => {
    if (isNaN(argv.base)) {
        throw 'La base tiene que ser un número';
    }
    return true;
})
.argv;

module.exports = argv;
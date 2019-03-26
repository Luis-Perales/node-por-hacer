const descripcio = {
    demand: true, //obligatorio
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer' //esto es una descripcio
};

completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        // descripcion: {
        //     demand: true, //obligatorio
        //     alias: 'd',
        //     desc: 'Descripcion de la tarea por hacer' //esto es una descripcio
        // }
        descripcio
    })
    .command('actualizar', 'Actualizar el estado completado de una tarea', {
        // descripcion: {
        //     demand: true,
        //     alias: 'd',
        //     desc: 'Descripcion de la tarea por hacer'
        // },
        // completado: {
        //     default: true,
        //     alias: 'c',
        //     desc: 'Marca como completado o pendiente la tarea'
        // }
        descripcio,
        completado
    })
    .command('borrar', 'Borrar una tarea', {
        // descripcion: {
        //     demand: true,
        //     alias: 'd',
        //     desc: 'Descripcion de la tarea por hacer'
        // }
        descripcio
    })
    .help()
    .argv;


module.exports = {
    argv
}

/*
const argv ...

comado crear 'Crear un elemento por hacer'
        --descriptcion -d
comando actualizar 'Actualiza el estado completado de una tarea'
        --descriptcion -d
        --compleato -c true si no tiene valor que aparesca true por defecto

        --help

        */
const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer); // convertir un objeto a un formato json valido

    fs.writeFile('db/data.json', data, (err) => { //guardar en un archivo json
        if (err) throw new Error('No se pudo grabar', err);
    });

}

const cargarDB = () => {
    /*Leer datos desde un archivo json, hay varias forma de leer un archivo json, podriaamos hacer un peticion hhtp para
    poder cargar ese archivo, pero como estamos en un lenguaje que se encuentra al lado del servidor podemos hacer un
    require de ese archivo y esa funcion al detectar que es un archivo json, automaticamento lo serializa y lo convierte en 
    un objeto de javascript */
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

let crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;

}

const getListado = () => {
    //let leerDB = require('../db/data.json');
    //return leerDB;
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();
    // si da flaso devolvera un -1
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index => 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });

    if (listadoPorHacer === nuevoListado) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}
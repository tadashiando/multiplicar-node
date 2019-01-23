const fs = require('fs');
const colors = require('colors');

let listaTabla = async(base, limite) => {
    return await multiplicar(base, limite);
};

let crearArchivo = async(base, limite) => {
    let multipl = await multiplicar(base, limite);
    let createFile = await crear(base, multipl);
    return `tablas/tabla-${base}.txt`.blue;
};

let multiplicar = async(base, limite) => {
    let data = 'Tabla de multiplicar\n'.green;
    if (!Number(base)) {
        throw new Error('Defina un numero de base para la tabla de multiplicar')
    } else {
        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index}\n`;
        }
        return data;
    }
}

let crear = async(base, data) => {
    if (!data) {
        throw new Error('Tabla de Multiplicar no fue creada')
    } else {
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) throw err;
        });
    }
};

module.exports = {
    crearArchivo,
    listaTabla
};
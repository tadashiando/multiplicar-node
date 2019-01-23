const { crearArchivo, listaTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listaTabla(argv.base, argv.limite).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite).then((result) => {
            console.log(`El archivo fue creado: ${result}`);
        }).catch((err) => {
            console.log(err);
        });
        break;

    default:
        console.log('Nada encontrado');
        break;
}
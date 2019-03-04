// Clase programador

const later = require('later');
const EventEmitter = require('./events');


class Programador extends EventEmitter {
	
	constructor(configuracion) {
		super();
		later.date.localTime();
		if(configuracion instanceof Array){
			for(var i=0; i<configuracion.length; i++){
				var e = configuracion[i];
		console.log('Hora' + e.hora + 'Temperatura' + e.temperatura);
		later.setInterval(() => this.emit('ideal', e.temperatura),later.parse.text('at ' + e.hora));

		}

	}
}
}
// Para cuando hacemos el require en practica2.js nos devuelva lo que queremos
exports = module.exports = Programador;
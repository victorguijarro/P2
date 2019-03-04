class EventEmitter {
	
	constructor(){
		this.events = {};
	}

	on(nameEvent, listenner){
		if(!this.events[nameEvent]){
			this.events[nameEvent] = [];
		}

		this.events[nameEvent].push(listenner);
	}

	emit(nameEvent,args){
		const event = this.events[nameEvent];
		if(event){
			event.forEach(cb => cb.call(null,args))
		}
	}
	
}

exports = module.exports = EventEmitter;
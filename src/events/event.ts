// event class in order to other functions listening in.
//
export default class Event {
  listeners: Function[] = [];
  sender: Object 

	constructor(sender: Object) {
		this.sender = sender;
	}

	attach(listener: Function) {
		this.listeners.push(listener);
	}

	public notify(args: any[]) {
		for (let i = 0; i < this.listeners.length; i += 1) {
			try {
				this.listeners[i](this.listeners, args);
			} catch (error) {
				console.error(error);
			}
		}
	}
}


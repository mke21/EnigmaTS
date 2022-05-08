// event class in order to other functions listening in.
//

export class Event {
  listeners: Function[] = [];
  sender: Object 

	constructor(sender: Object) {
		this.sender = sender;
	}

	attach(listener: Function) {
		this.listeners.push(listener);
	}

	public notify(args: any) {
		for (let i = 0; i < this.listeners.length; i += 1) {
			try {
				this.listeners[i](args);
			} catch (error) {
				console.error(error);
			}
		}
	}
}


export class Controller {
  eventObj: Event;
  listener: Function;

  constructor(eventObj: Event, listener: Function) {
    this.eventObj = eventObj;
    this.listener = listener;
    this.reaction = this.reaction.bind(this);
    this.enable();
    return this;
  }

  enable() {
    this.eventObj.attach(this.reaction);
    return this;
  }

  reaction(args: any) {
    this.listener(args);
  }
}

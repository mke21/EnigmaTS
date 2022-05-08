/* src/BaseClasses/EventsClass.js
 * Baseclass that provides the events create functions
 * events is an array of strings
 */
import { Event, Controller } from "./event";


export class EventsBase {
  _controllers: Controller[] = [];
  _events: { [key: string]: Event } = {}; 

	constructor(events: string[]=[]) {
		this._setEvents(events);
		this.addEventListener = this.addEventListener.bind(this);
	}

	_setEvents(events: string[]) {
		events.forEach(e => {
			this._events[e] = new Event(this);
		});
	}

	addEventListener(e: string, listener: Function) {
		this._controllers.push(new Controller(this._events[e], listener));
	}
}


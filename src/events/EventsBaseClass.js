/* src/BaseClasses/EventsClass.js
 * Baseclass that provides the events create functions
 * events is an array of strings
 */
const Event = require("EVENTS/event").default;
const Controller = require("EVENTS/controller").default;

export default class {
	constructor(events=[]) {
		this._setEvents(events);
		this.addEventListener = this.addEventListener.bind(this);
	}

	_setEvents(events) {
		this._controllers = [];
		this._events = {};
		events.forEach(e => {
			this._events[e] = new Event(this);
		});
	}

	addEventListener(e, listener) {
		this._controllers.push(new Controller(this._events[e], listener));
	}
}


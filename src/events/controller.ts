import { Event } from "./event";

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

  reaction(send, args) {
    this.listener(args);
  }
}

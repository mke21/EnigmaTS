export default class Controller {
  eventObj: Object;

    constructor(eventObj, listener) {
        this.eventObj = eventObj;
        this.listener = listener;

        this.setupHandlers()
            .enable();
        return this;
    }
    setupHandlers() {
        this.reactionHandler = this.reaction.bind(this);
        return this;
    }
    enable() {
        this.eventObj.attach(this.reactionHandler);
        return this;
    }

    reaction(send, args) {
        this.listener(args);
    }
}


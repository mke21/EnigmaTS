import { EventsBase } from "ev/EventsBaseClass";
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

export class KeyInput extends EventsBase{
  constructor() {
    super(["KeyPress", "KeyRelease"]);
    let that = this;
    window.onkeydown = k => {
      if (LETTERS.includes(k.key)) {
        that._events.KeyPress.notify(k.key.toUpperCase());
      }
    };

    window.onkeyup = () => that._events.KeyRelease.notify("up");
  }
}

import { EventsBase } from "ev/EventsBaseClass";
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

export class KeyInput extends EventsBase{

  private pressed: boolean = false;

  constructor() {
    super(["KeyPress", "KeyRelease"]);
    let that = this;
    window.onkeydown = k => {
      if (LETTERS.includes(k.key) && !that.pressed) {
        that.pressed = true;
        that._events.KeyPress.notify(k.key.toUpperCase());
      }
    };

    window.onkeyup = () => {
      that.pressed = false;
      that._events.KeyRelease.notify("up");
    }
  }
}

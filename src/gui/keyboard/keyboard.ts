/* keyboard.ts
 * registers both a click on the virual keyboard and keypresses on the
 * physical keyboard.
 * 2 events, keypress and keyrelease
 */

import "./keyboard.css";
import { EventsBase } from "ev/EventsBaseClass";
import { create, append } from "helper/html";
import { KeyInput } from "./input";

const LETTERS = [
  ["Q", "W", "E", "R", "T", "Z", "U", "I", "O"],
  ["A", "S", "D", "F", "G", "H", "J", "K"],
  ["P", "Y", "X", "C", "V", "B", "N", "M", "L"],
];

export class KeyBoard extends EventsBase {
  public div: HTMLElement = create("div", ["keyboard"]);
  private keys = new Map<string, HTMLElement>();
  private input: KeyInput = new KeyInput();

  constructor() {
    super(["KeyPress", "KeyRelease"]);
    let that = this;
    let Rows = [
      create("div", ["row"]),
      create("div", ["row"]),
      create("div", ["row"]),
    ];
    for (let i = 0; i < Rows.length; i++) {
      LETTERS[i].forEach((l) => {
        let button: HTMLButtonElement = document.createElement("button");
        button.id = l;
        button.innerText = l;
        button.onmousedown = () => that._events.KeyPress.notify(l);
        button.onmouseup = () => that._events.KeyRelease.notify(l);
        this.keys.set(l, button);
        Rows[i].appendChild(button);
      });
    }
    append(this.div, Rows);

    this.realKeyPress = this.realKeyPress.bind(this);
    this.realKeyRelease = this.realKeyRelease.bind(this);
    this.realKeysEvents();
  }

  realKeysEvents(this: KeyBoard) {
    let that = this;
    this.input.addEventListener("KeyPress", (key: any) => {
      that.realKeyPress(String(key));
      that._events.KeyPress.notify(String(key));
    });

    this.input.addEventListener("KeyRelease", () => {
      that.realKeyRelease();
      that._events.KeyRelease.notify("");
    });
  }

  realKeyPress(key: string) {
    this.keys.get(key).classList.add("active");
  }

  realKeyRelease() {
    this.keys.forEach((k) => k.classList.remove("active"));
  }
}

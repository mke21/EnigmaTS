import "./board.css";
import { Light } from "./light";
import { create, append } from "helper/html";

const LETTERS = [
  ["Q", "W", "E", "R", "T", "Z", "U", "I", "O"],
  ["A", "S", "D", "F", "G", "H", "J", "K"],
  ["P", "Y", "X", "C", "V", "B", "N", "M", "L"],
];

export class Board {
  public div: HTMLElement;
  private lights = new Map<string, Light>();

  constructor() {
    let that = this;
    this.div = create("div", ["lightboard"]);
    let Rows = [
      create("div", ["row"]),
      create("div", ["row"]),
      create("div", ["row"]),
    ];
    for (let i=0; i < Rows.length; i++) {
      LETTERS[i].forEach(l => {
        let n = new Light(l);
        that.lights.set(l, n);
        Rows[i].appendChild(n.div);
      });
    }
    append(this.div, Rows);
    this.on = this.on.bind(this);
    this.off = this.off.bind(this);
  }

  on(char: string): void {
    this.lights.get(char.toUpperCase()).on();
  }

  off(): void {
    this.lights.forEach((l: Light) => l.off());
  }
}

import "./keyboard.css";
import { create, append } from "helper/html";

const LETTERS = [
  ["Q", "W", "E", "R", "T", "Z", "U", "I", "O"],
  ["A", "S", "D", "F", "G", "H", "J", "K"],
  ["P", "Y", "X", "C", "V", "B", "N", "M", "L"],
];

export class KeyBoard {
  public div: HTMLElement = create("div", ["keyboard"]);

  constructor() {
    let Rows = [
      create("div", ["row"]),
      create("div", ["row"]),
      create("div", ["row"]),
    ];
    for (let i = 0; i < Rows.length; i++) {
      LETTERS[i].forEach((l) => {
        let button: HTMLButtonElement = document.createElement("button");
        button.innerText = l;
        Rows[i].appendChild(button);
      });
    }
    append(this.div, Rows);
  }
}

import { append } from "helper/html";
import { Board } from "./lightboard/board";
import { Machine } from "mechanics/machine";
import { KeyInput } from "./input/input";

export class App {
  public board: Board = new Board();
  public machine: Machine = new Machine();
  private input: KeyInput = new KeyInput();
  private reset: HTMLButtonElement = document.createElement("button");

  constructor() {
    this.reset.classList.add("resetbutton");  
    this.reset.textContent = "Reset";
    append(document.body, [this.board.div, this.reset])

    this.input.addEventListener("KeyPress", (key: any) => {
      this.board.on(this.machine.encrypt(String(key)));
    });
    this.input.addEventListener("KeyRelease", this.board.off);
    this.reset.onclick = this.machine.reset;
  }
}

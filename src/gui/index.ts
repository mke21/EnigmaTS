// GUI/input.ts
//
import { append } from "helper/html";
import { Board } from "./lightboard/board";
import { Machine } from "mechanics/machine";
import { Output } from "./output/output";
import { KeyBoard } from "./keyboard/keyboard";
import { Rotors, RotorValue } from "./rotors/rotors";

export class App {
  public readonly board: Board = new Board();
  public readonly machine: Machine = new Machine();
  private readonly reset: HTMLButtonElement = document.createElement("button");
  private readonly output: Output = new Output();
  private readonly keyboard: KeyBoard = new KeyBoard();
  private rotors: Rotors = new Rotors(this.machine.rotors.RotorSettings);
;

  constructor() {
    this.reset.classList.add("resetbutton");
    this.reset.textContent = "Reset";
    append(document.body, [
      this.board.div,
      this.reset,
      this.output.div,
      this.keyboard.div,
      this.rotors.div,
    ]);

    this.keyboard.addEventListener("KeyPress", (key: string) => {
      let encr = this.machine.encrypt(key);
      this.rotors.values = this.machine.rotors.RotorCurrent;
      this.output.add(key, encr);
      this.board.on(encr);
    });

    this.keyboard.addEventListener("KeyRelease", () => {
      this.board.off();
    });

    this.rotors.addEventListener("changeRotorSetting", (v: RotorValue) => {
      this.machine.rotors.setRotorStart(v.nr, v.value);
    })
    this.reset.onclick = () => {
      this.machine.reset();
      this.rotors.values = this.machine.rotors.RotorCurrent;
      this.output.reset();
    };

  }
}

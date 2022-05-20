// GUI/input.ts
//
import "./index.css";
import { append, create } from "helper/html";
import { Board } from "./lightboard/board";
import { Machine } from "mechanics/machine";
import { Output } from "./output/output";
import { KeyBoard } from "./keyboard/keyboard";
import { Rotors, RotorValue } from "./rotors/rotors";
import { WireBoard } from "./wireboard/wireboard";

export class App {
  public readonly board: Board = new Board();
  public readonly machine: Machine = new Machine();
  private readonly reset: HTMLButtonElement = document.createElement("button");
  private readonly output: Output = new Output();
  private readonly keyboard: KeyBoard = new KeyBoard();
  private rotors: Rotors = new Rotors(this.machine.rotors.RotorSettings);
  private readonly wireboard = new WireBoard();

  constructor() {
    this.reset.classList.add("resetbutton");
    this.reset.textContent = "Reset";
    let rotordiv = create("div", ["rotorpanel"]);
    append(document.body, [
      append(rotordiv, [this.reset, this.rotors.div]),
      this.board.div,
      this.keyboard.div,
      this.wireboard.div,
      this.output.input,
      this.output.output
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

    this.wireboard.addEventListener("connected", this.machine.plugboard.add);
    this.wireboard.addEventListener(
      "disconnected",
      this.machine.plugboard.delete
    );

    this.rotors.addEventListener("changeRotorSetting", (v: RotorValue) => {
      this.machine.rotors.setRotorStart(v.nr, v.value);
    });
    this.reset.onclick = () => {
      this.machine.reset();
      this.rotors.values = this.machine.rotors.RotorCurrent;
      this.output.reset();
    };
  }
}

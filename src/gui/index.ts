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
import { Settings } from "./settings/settings";

export class App {
  public readonly board: Board = new Board();
  public readonly machine: Machine = new Machine();
  private readonly reset: HTMLElement = create("button", ["reset"]);
  private readonly output: Output = new Output();
  private readonly keyboard: KeyBoard = new KeyBoard();
  private rotors: Rotors = new Rotors(this.machine.rotors.RotorSettings);
  private readonly wireboard = new WireBoard();

  constructor() {
    this.reset.classList.add("resetbutton");
    this.reset.textContent = "Reset";
    let rotordiv = create("div", ["rotorpanel"]);

    let headerdiv = create("div", ["header"]);
    let h1 = create("h1");
    h1.innerText = "Enigma";
    let bodydiv = create("div", ["body"]);
    let left = create("div", ["left", "writing"]);
    let lefth2 = document.createElement("h2");
    lefth2.innerText = "Input";
    append(left, [lefth2, this.output.input]);

    let right = create("div", ["right", "writing"]);
    let righth2 = document.createElement("h2");
    righth2.innerText = "Output";
    append(right, [righth2, this.output.output]);

    append(document.body, [
      append(headerdiv, [h1]),
      append(bodydiv, [
        left,
        right,
        append(rotordiv, [this.rotors.div, this.reset]),
        this.board.div,
        this.keyboard.div,
        this.wireboard.div,
      ]),
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

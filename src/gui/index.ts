import { append } from "helper/html";
import { Board } from "./lightboard/board";
import { Machine } from "mechanics/machine";
import { KeyInput } from "./input/input";
import { Output } from "./output/output";
import {KeyBoard} from "./keyboard/keyboard";

export class App {
  public board: Board = new Board();
  public machine: Machine = new Machine();
  private input: KeyInput = new KeyInput();
  private reset: HTMLButtonElement = document.createElement("button");
  private output: Output = new Output();
  private keyboard: KeyBoard = new KeyBoard();

  constructor() {
    this.reset.classList.add("resetbutton");  
    this.reset.textContent = "Reset";
    append(document.body, [this.board.div, this.reset, this.output.div, this.keyboard.div])

    this.input.addEventListener("KeyPress", (key: any) => {
      this.keyboard.realKeyPress(String(key));
      let encr = this.machine.encrypt(String(key));
      this.output.add(String(key), encr);
      this.board.on(encr);
    });
    this.input.addEventListener("KeyRelease", ()=>{
      this.keyboard.realKeyRelease();
      this.board.off
    });
    this.reset.onclick = () =>{
      this.machine.reset();
      this.output.reset();
    }
  }
}

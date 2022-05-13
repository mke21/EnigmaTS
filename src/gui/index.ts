// GUI/input.ts
//
import { append } from "helper/html";
import { Board } from "./lightboard/board";
import { Machine } from "mechanics/machine";
import { Output } from "./output/output";
import {KeyBoard} from "./keyboard/keyboard";

export class App {
  public board: Board = new Board();
  public machine: Machine = new Machine();
  private reset: HTMLButtonElement = document.createElement("button");
  private output: Output = new Output();
  private keyboard: KeyBoard = new KeyBoard();

  constructor() {
    this.reset.classList.add("resetbutton");  
    this.reset.textContent = "Reset";
    append(document.body, [this.board.div, this.reset, this.output.div, this.keyboard.div])

    this.keyboard.addEventListener("KeyPress", (key: string) => {
      let encr = this.machine.encrypt(key);
      this.output.add(key, encr);
      this.board.on(encr);
    });

    this.keyboard.addEventListener("KeyRelease", ()=>{
      this.board.off();
    });

    this.reset.onclick = () =>{
      this.machine.reset();
      this.output.reset();
    }
  }
}

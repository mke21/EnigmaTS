import {Board} from "./lightboard/board";
import { Machine } from "mechanics/machine";
import { KeyInput } from "./input/input";

export class App {
  public board: Board = new Board();
  public machine: Machine = new Machine();
  private input: KeyInput = new KeyInput();

  constructor() {
    document.body.appendChild(this.board.div);
    this.input.addEventListener("KeyPress", this.board.on);
    this.input.addEventListener("KeyRelease", this.board.off);
  }
}

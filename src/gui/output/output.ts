import "./output.css";
import { create, append } from "helper/html";

export class Output {
  public div: HTMLElement = create("div", ["output"]);
  private input: HTMLElement = create("div");
  private output: HTMLElement = create("div");

  constructor() {
    append(this.div, [this.input, this.output]);
    this.reset = this.reset.bind(this);
    this.add = this.add.bind(this);
  }

  add(inp: string, outp: string) {
    this.input.innerText += inp;
    this.output.innerText += outp
  }

  reset(): void {
    this.input.innerText = "";
    this.output.innerText = "";
  }

}

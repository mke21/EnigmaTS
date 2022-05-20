import "./output.css";
import { create } from "helper/html";

export class Output {
  public input: HTMLElement = create("div", ["notition"]);
  public output: HTMLElement = create("div", ["notition"]);

  constructor() {
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

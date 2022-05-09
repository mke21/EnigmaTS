import "@fontsource/open-sans";
import "./light.css";
import { create, append } from "helper/html"; 

export class Light {
  public div: HTMLElement;
  private light: HTMLElement;

  constructor(char: string) {
    this.div = create("div", ["LightWrapper"]);
    this.light = create("div", ["Light"]);
    let currChar = char.toUpperCase();
    this.light.appendChild(document.createTextNode(currChar));
    append(this.div, [this.light]);
    this.on = this.on.bind(this);
    this.off = this.off.bind(this);
  }

  on() {
    this.light.classList.add("on");
  }
  off() {
    this.light.classList.remove("on");
  }
}

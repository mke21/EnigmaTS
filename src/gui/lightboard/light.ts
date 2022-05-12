import "@fontsource/open-sans";
import "./light.css";
import { create, append } from "helper/html"; 

export class Light {

  public div: HTMLElement = create("div", ["LightWrapper"]);
  private light: HTMLElement = create("div", ["Light"]);

  constructor(char: string) {
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

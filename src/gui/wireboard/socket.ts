// socket
import { EventsBase } from "ev/EventsBaseClass";
import { create, append } from "helper/html";

export class Socket extends EventsBase {
  public div: HTMLElement = create("div", ["socket"]);
  private label: HTMLElement = create("div", ["label"]);
  private bus: HTMLElement =  create("div", ["bus"]);
  private colorValue: string = "";

  constructor(letter: string) {
    super(["clicked"]);
    let that = this;
    this.label.innerText = letter;
    append(this.div, [this.label, this.bus]);
    this.div.onclick = () => that._events.clicked.notify(letter);
  }

  get letter(): string {
    return this.label.innerText;
  }

  set color(value: string) {
    this.removeColor();
    this.colorValue = value;
    this.bus.classList.add(value);
  }

  get color() {
    return this.colorValue;
  }

  removeColor() {
    if (this.colorValue !== "") {
      this.bus.classList.remove(this.colorValue);
      this.colorValue = "";
    }
  }
}

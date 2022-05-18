// socket
import { EventsBase } from "ev/EventsBaseClass";
import { create, append } from "helper/html";

export class Socket extends EventsBase {
  public div: HTMLElement = create("div", ["socket"]);
  private label: HTMLElement = create("div", ["label"]);
  private bus: HTMLElement =  create("div", ["bus"]);

  constructor(letter: string) {
    super(["clicked"]);
    let that = this;
    this.label.innerText = letter;
    append(this.div, [this.label, this.bus]);
    this.div.onclick = () => that._events.clicked.notify(letter);
  }


}

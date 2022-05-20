/*this must be a javascript module as
 * typescript does not support dialog tags yet
 */

import "./modal.css";
import { append, create } from "helper/html";

export class Modal {
  modal = create("dialog", ["dialog"]);
  h2 = create("h2");
  content = create("div");
  openButton = create("button", ["button", "button-open"]);
  closeButton = create("button", ["button", "button-close"]);

  constructor(title) {
    this.h2.innerText = title;
    this.closeButton.innerText = "Close";

    append(this.modal, [this.h2, this.content, this.closeButton]);
    this.openButton.onclick = () => this.modal.showModal();
    this.closeButton.onclick = () => this.modal.close();
  }

  append(objects) {
    append(this.content, objects);
  }
}

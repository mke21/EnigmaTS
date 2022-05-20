import { EventsBase } from "ev/EventsBaseClass";
import {Modal} from "./modal";

function createSelect(types: string[], value: string): HTMLSelectElement {
  let result = document.createElement("select") as HTMLSelectElement;
  types.forEach(t => {
    let o = document.createElement("option") as HTMLOptionElement;
    o.innerText = t;
    o.value = t;
    result.append(o);
  });
  result.value = value;
  return result;
}
export class Settings extends EventsBase {
  modal = new Modal("Rotor Settings");
  
  constructor(types: string[], current: string[]) {
    super(["setRotor"]);
    this.modal.openButton.innerText = "Rotor Settings";
    for (let i=current.length-1; i >= 0; i--){
      let s = createSelect(types, current[i]);
      s.onchange = () => this._events.setRotor.notify({index: i, rotor_number: s.value});
      this.modal.content.appendChild(s);
    }
  }

  get div():HTMLDivElement {
    return this.modal.modal as HTMLDivElement;
  }

  get button(): HTMLButtonElement {
    return this.modal.openButton as HTMLButtonElement;
  }
}

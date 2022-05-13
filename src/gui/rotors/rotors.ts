import { EventsBase } from "ev/EventsBaseClass";
import { create, append } from "helper/html";

export interface RotorValue {
  nr: number;
  value: number;
}

export class Rotors extends EventsBase {
  public div: HTMLElement = create("div", ["rotors"]);
  private rotors: HTMLInputElement[] = [];
  private public: boolean = true;

  constructor(settings: number[]) {
    super(["changeRotorSetting"]);
    for (let i = 0; i < settings.length; i++) {
      let rotor = document.createElement("input");
      rotor.type = "number";
      rotor.min = "1";
      rotor.max = "26";
      rotor.value = String(settings[i]);
      rotor.onchange = () => {
        if (this.public) {
          this._events.changeRotorSetting.notify({
            nr: i,
            value: parseInt(rotor.value),
          });
        }
      };
      this.rotors.push(rotor);
    }
    append(this.div, this.rotors.slice().reverse());
  }

  set values(values: number[]) {
    this.public = false;
    for (let i = 0; i < values.length; i++) {
      this.rotors[i].value = String(values[i]);
    }
    this.public = true;
  }
}

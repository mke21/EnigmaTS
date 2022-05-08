// represents the plugboard

import { CharacterCarrier, validate } from "./interfaces";


export class Wire {
  readonly side1: string;
  readonly side2: string;

  constructor(side1: string, side2: string) {
    let s1 = side1.toUpperCase();
    let s2 = side2.toUpperCase();
    if (!validate(s1) || !validate(s2)) {
      throw "plugs not correct, should be a single letter";
    }
    if (s1 === s2) {
      throw "cannot plug wire into itself";
    }
    this.side1 = s1;
    this.side2 = s2;
  }
}

export class PlugBoard {
  connections = new Map<string, string>();

  constructor() {
    this.add = this.add.bind(this);
    this.delete = this.delete.bind(this);
    this.passThrough = this.passThrough.bind(this);
  }

  add(wire: Wire): void {
    if (this.connections.has(wire.side1) || this.connections.has(wire.side2)) {
      throw "Cannot connect mutiple wires to the same socket";
    }
    this.connections.set(wire.side1, wire.side2);
    this.connections.set(wire.side2, wire.side1);
  }

  delete(wire: Wire) {
    if (this.connections.get(wire.side1) === wire.side2) {
      this.connections.delete(wire.side1);
      this.connections.delete(wire.side2);
    } else {
      throw "Wire is not connected";
    }
  }

  passThrough(char: CharacterCarrier): CharacterCarrier {
    let translation = this.connections.get(char.value) || char.value;
    return new CharacterCarrier(translation, char.rotate);
  }
}

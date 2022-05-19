// represents the plugboard

import { CharacterCarrier, validate } from "./interfaces";

interface Wire{side1: string, side2: string};

export class PlugBoard {
  connections = new Map<string, string>();

  constructor() {
    this.add = this.add.bind(this);
    this.delete = this.delete.bind(this);
    this.passThrough = this.passThrough.bind(this);
  }

  add(wire: Wire): void {
    let s1 = wire.side1.toUpperCase();
    let s2 = wire.side2.toUpperCase();
    // validate
    if (validate(s1) || validate(s2)) {
      throw "plugs not correct, should be a single letter";
    }
    if (s1 === s2) {
      throw "cannot plug wire into itself";
    }
    if (this.connections.has(wire.side1) || this.connections.has(wire.side2)) {
      throw "Cannot connect mutiple wires to the same socket";
    }
    this.connections.set(s1, s2);
    this.connections.set(s2, s1);
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

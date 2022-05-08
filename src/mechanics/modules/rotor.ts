// represents a rotor
import { CharacterCarrier } from "./interfaces";

interface RotorConfiguration {
  sequence: string;
  turnover: string;
}

export type RotorNumber = "I" | "II" | "III" | "IV" | "V" | "test";

const RotorTypes = {
  test: { sequence: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", turnover: "C" },
  I: { sequence: "EKMFLGDQVZNTOWYHXUSPAIBRCJ", turnover: "Q" },
  II: { sequence: "AJDKSIRUXBLHWTMCQGZNPYFVOE", turnover: "E" },
  III: { sequence: "BDFHJLCPRTXVZNYEIWGAKMUSQO", turnover: "V" },
  IV: { sequence: "ESOVPZJAYQUIRHXLNFTGKDCMWB", turnover: "J" },
  V: { sequence: "VZBRGITYUPSDNHLXAWMJQOFECK", turnover: "Z" },
};

export class Rotor {
  rotorNumber: RotorNumber;
  _rotor: RotorConfiguration;
  _start: number;
  readonly base: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  current: number;

  constructor() {
    this.forward = this.forward.bind(this);
    this.reverse = this.reverse.bind(this);
    this.rotate = this.rotate.bind(this);
    this.reset = this.reset.bind(this);
  }

  get rotor(): RotorNumber {
    return this.rotorNumber;
  }

  set rotor(rotor: RotorNumber) {
    this.rotorNumber = rotor;
    this._rotor = RotorTypes[rotor];
    this.start = 1;
  }

  get outstring(): string {
    let i: number = this.current - 1;
    return `${this._rotor.sequence.slice(i)}${this._rotor.sequence.slice(
      0,
      i
    )}`;
  }

  forward(char: CharacterCarrier): CharacterCarrier {
    if (char.rotate) {
      this.rotate();
    }
    let index: number = this.base.indexOf(char.value);
    let rotate: boolean = this.outstring[0] === this._rotor.turnover;
    let result: CharacterCarrier = new CharacterCarrier(
      this.outstring[index],
      rotate
    );
    return result;
  }

  reverse(char: CharacterCarrier): CharacterCarrier {
    let index: number = this.outstring.indexOf(char.value);
    let result: CharacterCarrier = new CharacterCarrier(this.base[index]);
    return result;
  }

  rotate(): void {
    this.current += 1;
    if (this.current > this._rotor.sequence.length) {
      this.current = 1;
    }
  }

  set start(value: number) {
    if (value < 1 || value > this._rotor.sequence.length) {
      throw "no valid rotor setting";
    }
    this._start = value;
    this.current = value;
  }

  get start(): number {
    return this._start;
  }

  reset(): void {
    this.current = this._start;
  }
}

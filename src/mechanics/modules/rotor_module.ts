import { CharacterCarrier } from "./interfaces";
import { Rotor, RotorNumber } from "./rotor";

export class RotorModule {
  readonly rotors: Rotor[] = [new Rotor(), new Rotor(), new Rotor()];

  constructor(
    firstRotor: RotorNumber = "I",
    secondRotor: RotorNumber = "II",
    thirdRotor: RotorNumber = "III"
  ) {
    this.setRotor(0, firstRotor);
    this.setRotor(1, secondRotor);
    this.setRotor(2, thirdRotor);
    // binding
    this.forward = this.forward.bind(this);
    this.reverse = this.reverse.bind(this);
    this.setRotor = this.setRotor.bind(this);
    this.reset = this.reset.bind(this);
  }

  forward(char: CharacterCarrier): CharacterCarrier {
    let result = new CharacterCarrier(char.value, char.rotate);
    for (let i = 0; i < this.rotors.length; i++) {
      result = this.rotors[i].forward(result);
    }
    return result;
  }

  reverse(char: CharacterCarrier) {
    let result = new CharacterCarrier(char.value, char.rotate);
    for (let i = this.rotors.length - 1; i >= 0; i--) {
      result = this.rotors[i].reverse(result);
    }
    return result;
  }

  reset(): void {
    this.rotors.forEach((r) => r.reset());
  }

  setRotor(index: number, rotor_number: RotorNumber): void {
    this.rotors[index].rotor = rotor_number;
  }
}

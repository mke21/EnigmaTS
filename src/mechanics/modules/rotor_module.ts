import { CharacterCarrier } from "./interfaces";
import { AutoBind } from "HELPER";
import { Rotor, RotorNumber } from "./rotor";

export class RotorModule extends AutoBind {
  readonly rotors: Rotor[] = [new Rotor(), new Rotor(), new Rotor()];

  constructor(
    firstRotor: RotorNumber,
    secondRotor: RotorNumber,
    thirdRotor: RotorNumber
  ) {
    super(["forward", "reverse", "reset", "setRotor"]);
    this.setRotor(0, firstRotor);
    this.setRotor(1, secondRotor);
    this.setRotor(2, thirdRotor);
  }

  forward(char: CharacterCarrier): CharacterCarrier {
    let result = new CharacterCarrier(char.value, char.rotate);
    return result;
  }

  reverse(char: CharacterCarrier) {
    let result = new CharacterCarrier(char.value, char.rotate);
    return result;
  }

  reset(): void {
    this.rotors.forEach((r) => r.reset());
  }

  setRotor(index: number, rotor_number: RotorNumber): void {
    this.rotors[index].rotor = rotor_number;
  }
}

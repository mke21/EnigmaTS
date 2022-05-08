import { CharacterCarrier } from "./modules/interfaces";
import { PlugBoard } from "./modules/plugboard";
import { RotorModule } from "./modules/rotor_module";
import { Reflector } from "./modules/reflector";

export class Machine {
  readonly plugboard: PlugBoard = new PlugBoard();
  readonly rotors = new RotorModule();
  readonly reflector = new Reflector();

  constructor() {
    this.encrypt = this.encrypt.bind(this);
    this.reset = this.reset.bind(this);
  }

  encrypt(char: string): string {
    let result = new CharacterCarrier(char, true); // always rotate first rotor
    result = this.plugboard.passThrough(result); 
    result = this.rotors.forward(result);
    result = this.reflector.passThrough(result);
    result = this.rotors.reverse(result);
    result = this.plugboard.passThrough(result);
    return result.value;
  }

  reset(): void {
    this.rotors.reset();
  }

}

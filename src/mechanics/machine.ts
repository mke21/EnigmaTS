import { CharacterCarrier } from "./modules/interfaces";
import { AutoBind } from "HELPER";
import { PlugBoard } from "./modules/plugboard";
import { RotorModule } from "./modules/rotor_module";
import { Reflector } from "./modules/reflector";

export class Machine extends AutoBind {
  readonly plugboard: PlugBoard = new PlugBoard();
  readonly rotors = new RotorModule();
  readonly reflector = new Reflector();

  constructor() {
    super(["encrypt"]);
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

// represents a reflector type B
import { CharacterCarrier } from "./interfaces";

export class Reflector {
	readonly base: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	readonly sequence: string = "YRUHQSLDPXNGOKMIEBFZCWVJAT";

	constructor() {
    this.passThrough = this.passThrough.bind(this);
	}

	passThrough(char: CharacterCarrier): CharacterCarrier {
		let index: number = this.base.indexOf(char.value);
		return new CharacterCarrier(this.sequence[index], char.rotate);
	}
}

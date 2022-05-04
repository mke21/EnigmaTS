// represents a reflector type B
import { CharacterCarrier } from "./interfaces";
import { AutoBind } from "HELPER";

export class Reflector extends AutoBind {
	readonly base: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	readonly sequence: string = "YRUHQSLDPXNGOKMIEBFZCWVJAT";

	constructor() {
		super(["passThrough"]);
	}

	passThrough(char: CharacterCarrier): CharacterCarrier {
		let index: number = this.base.indexOf(char.value);
		return new CharacterCarrier(this.sequence[index], char.rotate);
	}
}

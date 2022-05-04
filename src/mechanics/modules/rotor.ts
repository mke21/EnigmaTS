// represents a rotor
import { CharacterCarrier } from "./interfaces";
import { AutoBind } from "HELPER";

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

export class Rotor extends AutoBind {
	readonly rotorNumber: RotorNumber;
	readonly rotor: RotorConfiguration;
	readonly start: number;
	readonly base: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	current: number;

	constructor(rotor: RotorNumber, start: number) {
		super(["forward", "reverse", "rotate"]);
		this.rotorNumber = rotor;
		this.rotor = RotorTypes[rotor];
		this.start = start;
		this.current = start;
	}

	get outstring(): string {
		let i: number = this.current - 1;
		return `${this.rotor.sequence.slice(i)}${this.rotor.sequence.slice(0, i)}`;
	}

	forward(char: CharacterCarrier) :CharacterCarrier {
		if (char.rotate) {
			this.rotate();
		}
		let index: number = this.base.indexOf(char.value);
		let rotate: boolean = (this.outstring[0] === this.rotor.turnover);
		let result: CharacterCarrier = new CharacterCarrier(this.outstring[index], rotate);
		return result;
	}

	reverse(char:CharacterCarrier) :CharacterCarrier {
		let index: number = this.outstring.indexOf(char.value);
		let result:CharacterCarrier = new CharacterCarrier(this.base[index]);
		return result;
	}

	rotate() {
		this.current += 1;
		if (this.current > this.rotor.sequence.length) {
			this.current = 1;
		}
	}
}

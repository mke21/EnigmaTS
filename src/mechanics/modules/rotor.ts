// represents a rotor

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
	readonly rotorNumber: RotorNumber;
	readonly rotor: RotorConfiguration;
	readonly start: number
	readonly base: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	current: number

	constructor(rotor: RotorNumber, start: number) {
		this.rotorNumber = rotor;
		this.rotor = RotorTypes[rotor];
		this.start = start;
		this.current = start;
	}

	get outstring(): string { 
		let i: number = this.current - 1;
		return `${this.rotor.sequence.slice(i)}${this.rotor.sequence.slice(0,i)}`;
	}

	forward () {}

	reverse() {}

	rotate() {}
}

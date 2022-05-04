const CHECKSTRING = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 

export class CharacterCarrier {
	readonly value: string
	rotate: boolean = false

	constructor(value: string, rotate: boolean=false) {
		let upperCase = value.toUpperCase();
		if (value.length !== 1 || !CHECKSTRING.includes(upperCase)) {
			throw `Value "${value} is not a character that could be typed in enigma`;
		}
		this.value = upperCase;
		this.rotate = rotate;
	}
}

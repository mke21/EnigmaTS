const CHECKSTRING = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 

export function validate(value: string): boolean {
	return (value.length !== 1 || !CHECKSTRING.includes(value)) ;
}

export class CharacterCarrier {
	readonly value: string
	rotate: boolean = false

	constructor(value: string, rotate: boolean=false) {
		let upperCase = value.toUpperCase();
		if (validate(upperCase)) {
			throw `Value "${value} is not a character that could be typed in enigma`;
		}
		this.value = upperCase;
		this.rotate = rotate;
	}
}

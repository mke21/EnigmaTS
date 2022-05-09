/* helper/html.ts
*
* helper functions for creating html objects */

export function create(type:string, classes: string[]=[]): HTMLElement {
	// creates object with classes
	let r: HTMLElement = document.createElement(type);
	classes.forEach(c => r.classList.add(c));
	return r;
}


export function append(container: HTMLElement, objectlist: HTMLElement[]) {
	objectlist.forEach(o => container.appendChild(o));
	return container
}


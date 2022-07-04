import { browser } from '$app/env';
import { writable } from 'svelte/store';

const initialValue = '';
const initialValueNum = '0';

export const playerCharacterSizes = ['Tiny', 'Small', 'Medium', 'Large', 'Huge', 'Gargantuan'];
export const playerCharacterAlignments = [
	'Lawful Good',
	'Lawful Neutral',
	'Lawful Evi',
	'Neutral Good',
	'Neutral',
	'Neutral Evil',
	'Chaotic Good',
	'Chaotic Neutral',
	'Chaotic Evil'
];

export const playerCharacterGeneral = writable({
	playerName: browser ? window.localStorage.getItem('playerName') ?? initialValue : initialValue, // nullish coalescing operator
	characterName: browser
		? window.localStorage.getItem('characterName') ?? initialValue
		: initialValue,
	experiencePoints: browser
		? window.localStorage.getItem('experiencePoints') ?? initialValueNum
		: initialValueNum,
	ancestry: browser ? window.localStorage.getItem('ancestry') ?? initialValue : initialValue,
	heritage: browser ? window.localStorage.getItem('heritage') ?? initialValue : initialValue,
	background: browser ? window.localStorage.getItem('background') ?? initialValue : initialValue,
	class: browser ? window.localStorage.getItem('class') ?? initialValue : initialValue,
	size: browser ? window.localStorage.getItem('size') ?? initialValue : initialValue,
	alignment: browser ? window.localStorage.getItem('alignment') ?? initialValue : initialValue,
	traits: browser ? window.localStorage.getItem('traits') ?? initialValue : initialValue,
	deity: browser ? window.localStorage.getItem('deity') ?? initialValue : initialValue,
	level: browser ? window.localStorage.getItem('level') ?? initialValue : initialValue,
	heroPoints: browser ? window.localStorage.getItem('heroPoints') ?? initialValue : initialValue,

	strength: browser ? window.localStorage.getItem('strength') ?? initialValue : initialValue,
	dexterity: browser ? window.localStorage.getItem('dexterity') ?? initialValue : initialValue,
	constitution: browser
		? window.localStorage.getItem('constitution') ?? initialValue
		: initialValue,
	intelligence: browser
		? window.localStorage.getItem('intelligence') ?? initialValue
		: initialValue,
	wisdom: browser ? window.localStorage.getItem('wisdom') ?? initialValue : initialValue,
	charisma: browser ? window.localStorage.getItem('charisma') ?? initialValueNum : initialValueNum,
	charismaMod: browser
		? window.localStorage.getItem('charismaMod') ?? initialValueNum
		: initialValueNum,
	charismaSign: browser ? window.localStorage.getItem('charismaSign') ?? initialValue : initialValue
});

playerCharacterGeneral.subscribe((playerCharacterFields) => {
	if (browser) {
		for (const [key, value] of Object.entries(playerCharacterFields)) {
			window.localStorage.setItem(key, value);

			// if (key == 'charisma') {
			// 	let charismaMod = Math.floor((Number(value) - 10) / 2);
			// 	console.log(charismaMod.toString());
			// 	window.localStorage.setItem('charismaMod', charismaMod.toString());
			// }
		}
	}
});

playerCharacterGeneral.subscribe((test) => {
	test.charismaMod = Math.floor((Number(test.charisma) - 10) / 2).toString();
	if (Math.sign(Number(test.charismaMod)) > 0) {
		test.charismaSign = '+';
	} else {
		test.charismaSign = '';
	}
});

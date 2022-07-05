import { browser } from '$app/env';
import { derived, writable } from 'svelte/store';

const initialValue = '';
const initialValueNum = '0';

export const playerCharacterSizes = ['Tiny', 'Small', 'Medium', 'Large', 'Huge', 'Gargantuan'];
export const playerCharacterAlignments = [
	'Lawful Good',
	'Lawful Neutral',
	'Lawful Evil',
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
	level: browser ? window.localStorage.getItem('level') ?? initialValueNum : initialValueNum,
	heroPoints: browser ? window.localStorage.getItem('heroPoints') ?? initialValue : initialValue
});

export const playerCharacterAbilities = writable({
	// strength: browser ? window.localStorage.getItem('strength') ?? initialValueNum : initialValueNum,
	// strengthMod: browser
	// 	? window.localStorage.getItem('charismaMod') ?? initialValueNum
	// 	: initialValueNum,
	// strengthSign: browser
	// 	? window.localStorage.getItem('charismaSign') ?? initialValue
	// 	: initialValue,

	// dexterity: browser
	// 	? window.localStorage.getItem('dexterity') ?? initialValueNum
	// 	: initialValueNum,
	// dexterityMod: browser
	// 	? window.localStorage.getItem('dexterityMod') ?? initialValueNum
	// 	: initialValueNum,
	// dexteritySign: browser
	// 	? window.localStorage.getItem('dexteritySign') ?? initialValue
	// 	: initialValue,

	// constitution: browser
	// 	? window.localStorage.getItem('constitution') ?? initialValueNum
	// 	: initialValueNum,
	// constitutionMod: browser
	// 	? window.localStorage.getItem('constitutionMod') ?? initialValueNum
	// 	: initialValueNum,
	// constitutionSign: browser
	// 	? window.localStorage.getItem('constitutionSign') ?? initialValue
	// 	: initialValue,

	// intelligence: browser
	// 	? window.localStorage.getItem('intelligence') ?? initialValueNum
	// 	: initialValueNum,
	// intelligenceMod: browser
	// 	? window.localStorage.getItem('intelligenceMod') ?? initialValueNum
	// 	: initialValueNum,
	// intelligenceSign: browser
	// 	? window.localStorage.getItem('intelligenceSign') ?? initialValue
	// 	: initialValue,

	// wisdom: browser ? window.localStorage.getItem('wisdom') ?? initialValueNum : initialValueNum,
	// wisdomMod: browser
	// 	? window.localStorage.getItem('wisdomMod') ?? initialValueNum
	// 	: initialValueNum,
	// wisdomSign: browser ? window.localStorage.getItem('wisdomSign') ?? initialValue : initialValue,

	charisma: browser ? window.localStorage.getItem('charisma') ?? initialValueNum : initialValueNum,
	charismaMod: browser
		? window.localStorage.getItem('charismaMod') ?? initialValueNum
		: initialValue
});

playerCharacterGeneral.subscribe((playerCharacterFields) => {
	if (browser) {
		for (const [key, value] of Object.entries(playerCharacterFields)) {
			window.localStorage.setItem(key, value);
		}
	}
});

playerCharacterAbilities.subscribe((playerCharacterAbilities) => {
	const abilities = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];

	if (browser) {
		for (const [key, value] of Object.entries(playerCharacterAbilities)) {
			window.localStorage.setItem(key, value);
		}

		for (const [key, value] of Object.entries(playerCharacterAbilities)) {
			if (abilities.includes(key)) {
				let abilityMod = Math.floor((Number(value) - 10) / 2);
				window.localStorage.setItem(key + 'Mod', abilityMod.toString());
			}
		}
	}
});

export const charismaMod = derived(
	playerCharacterAbilities,
	(playerCharacterAbilities) =>
		(playerCharacterAbilities.charismaMod = Math.floor(
			(Number(playerCharacterAbilities.charisma) - 10) / 2
		).toString())
);

// playerCharacterGeneral.subscribe((playerCharacterAbility) => {
// 	// playerCharacterAbility.charismaMod = Math.floor(
// 	// 	(Number(playerCharacterAbility.charisma) - 10) / 2
// 	// ).toString();
// 	// if (Math.sign(Number(playerCharacterAbility.charismaMod)) > 0) {
// 	// 	playerCharacterAbility.charismaSign = '+';
// 	// } else {
// 	// 	playerCharacterAbility.charismaSign = '';
// 	// }
// });

// playerCharacterGeneral.subscribe((playerCharacterAbility) => {
// 	const abilities = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];

// 	if (browser) {
// 		for (const [key, value] of Object.entries(playerCharacterAbility)) {
// 			let abilityMod;

// 			if (abilities.includes(key)) {
// 				console.log(key);
// 				abilityMod = Math.floor((Number(value) - 10) / 2);
// 				window.localStorage.setItem(key + 'Mod', abilityMod.toString());

// 				// if (Number(abilityMod) > 0) {
// 				// 	window.localStorage.setItem(key + 'Sign', '+');
// 				// }
// 			}
// 		}
// 	}
// });

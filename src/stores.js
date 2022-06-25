import { browser } from '$app/env';
import { writable } from 'svelte/store';

const initialValue = '';
const initialValueNum = '0';

export const playerCharacterGeneral = writable({
	playerName: browser ? window.localStorage.getItem('playerName') ?? initialValue : initialValue, // nullish coalescing operator
	characterName: browser
		? window.localStorage.getItem('characterName') ?? initialValue
		: initialValue,
	experiencePoints: browser
		? window.localStorage.getItem('experiencePoints') ?? initialValueNum
		: initialValue
});

playerCharacterGeneral.subscribe((playerCharacterFields) => {
	if (browser) {
		for (const [key, value] of Object.entries(playerCharacterFields)) {
			window.localStorage.setItem(key, value);
		}
	}
});

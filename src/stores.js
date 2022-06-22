import { browser } from '$app/env';
import { writable } from 'svelte/store';

const initialValue = '';

export const playerCharacterGeneral = writable({
	playerName: browser ? window.localStorage.getItem('playerName') ?? initialValue : initialValue, // nullish coalescing operator
	characterName: browser
		? window.localStorage.getItem('characterName') ?? initialValue
		: initialValue
});

playerCharacterGeneral.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('playerName', value.playerName);
		window.localStorage.setItem('characterName', value.characterName);
	}
});

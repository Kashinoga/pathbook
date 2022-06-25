import { browser } from '$app/env';
import { writable } from 'svelte/store';

const initialValue = '';

class playerCharacter {
	/**
	 * @param {String} playerName
	 * @param {String} characterName
	 */
	constructor(playerName, characterName) {
		this.playerName = playerName;
		this.characterName = characterName;
	}
}

export const playerCharacterGeneral = writable({
	playerName: browser ? window.localStorage.getItem('playerName') ?? initialValue : initialValue, // nullish coalescing operator
	characterName: browser
		? window.localStorage.getItem('characterName') ?? initialValue
		: initialValue,
	experiencePoints: browser ? window.localStorage.getItem('experiencePoints') ?? '0' : initialValue
});

playerCharacterGeneral.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('playerName', value.playerName);
		window.localStorage.setItem('characterName', value.characterName);
		window.localStorage.setItem('experiencePoints', value.experiencePoints);
	}
});

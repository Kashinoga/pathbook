import { browser } from '$app/env';
import { derived, writable } from 'svelte/store';

const defaultPlayerName = '[loading]';

const initialValue = browser
	? window.localStorage.getItem('theme') ?? defaultPlayerName
	: defaultPlayerName;

export const playerName = writable(initialValue);

playerName.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('theme', value);
	}
});

export { playerName as default };

export const greeting = derived(playerName, ($name) => `Hello, ${$name}.`);

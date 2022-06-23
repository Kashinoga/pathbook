<script>
	import { browser } from '$app/env';
	import { playerCharacterGeneral } from '../stores.js';

	/**
	 * Download
	 */

	// let playerCharacter = '';
	// let downloadFileName = '';

	// if (browser) {
	// 	playerCharacter = 'data:application/json;,' + JSON.stringify(localStorage);

	// 	playerCharacterGeneral.subscribe((value) => {
	// 		let playerName = window.localStorage.getItem('playerName');
	// 		let characterName = window.localStorage.getItem('characterName');
	// 		downloadFileName = characterName + '-' + playerName + '.json';
	// 	});

	// 	let playerName = window.localStorage.getItem('playerName');
	// 	let characterName = window.localStorage.getItem('characterName');
	// 	// downloadFileName = characterName + '-' + playerName + '.json';
	// }

	function downloadCharacter() {
		const a = document.createElement('a');

		let url = 'data:application/json;,' + JSON.stringify(localStorage);

		a.href = url;
		a.download = url;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	}

	/**
	 * Upload
	 */

	function uploadCharacter() {
		const fileElem = document.getElementById('fileElem');
		fileElem?.click();
	}

	/**
	 * @type {FileList}
	 */
	let files;

	$: if (files) {
		const fileText = files[0].text();
		fileText.then((text) => {
			const yeet = JSON.parse(text);
			for (const [key, value] of Object.entries(yeet)) {
				console.log(`${key}: ${value}`);
				window.localStorage.setItem(`${key}`, `${value}`);
			}
		});
	}
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<div class="py-4 space-y-2">
				<h1 class="text-5xl font-bold">Character Sheet</h1>
			</div>

			<div class="space-y-4 place-items-center">
				<div class="btn-group">
					<!-- <a class="btn" id="downloadCharacter" on:click={downloadCharacter}>Backup</a> -->
					<!-- <a class="btn" id="downloadCharacter" download={downloadFileName} href={playerCharacter}
						>Backup</a
					> -->
					<button class="btn" id="downloadCharacter" on:click={downloadCharacter}>Backup</button>
					<input
						type="file"
						id="fileElem"
						multiple
						accept=".json"
						style="display:none"
						bind:files
					/>
					<button class="btn" id="uploadCharacter" on:click={uploadCharacter}>Upload</button>
				</div>
				<div class="btn-group">
					<!-- <input type="file" id="userFile" accept=".json" bind:files /> -->
				</div>

				<div class="form-control">
					<label class="input-group input-group-vertical">
						<span class="py-1">Player Name</span>
						<input
							type="text"
							class="input input-bordered"
							bind:value={$playerCharacterGeneral.playerName}
						/>
					</label>
				</div>
				<div class="form-control">
					<label class="input-group input-group-vertical">
						<span class="py-1">Character Name</span>
						<input
							type="text"
							class="input input-bordered"
							bind:value={$playerCharacterGeneral.characterName}
						/>
					</label>
				</div>
			</div>
		</div>
	</div>
</div>

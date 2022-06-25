<script>
	import { playerCharacterGeneral } from '../stores.js';

	/**
	 * Download
	 */
	function downloadCharacter() {
		const a = document.createElement('a');

		let url = 'data:application/json;,' + encodeURI(JSON.stringify(localStorage, null, 1));

		a.href = url;
		a.download =
			$playerCharacterGeneral.characterName + '-' + $playerCharacterGeneral.playerName + '.json';
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
		window.location.reload();
	}
</script>

<div class="p-4 flex flex-col gap-4 bg-base-200">
	<div class="text-center">
		<h1 class="text-5xl font-bold">Character Sheet</h1>
	</div>

	<div class="btn-group justify-center">
		<button class="btn btn-secondary" id="downloadCharacter" on:click={downloadCharacter}
			>Download</button
		>
		<input type="file" id="fileElem" multiple accept=".json" style="display:none" bind:files />
		<button class="btn btn-secondary" id="uploadCharacter" on:click={uploadCharacter}>Upload</button
		>
	</div>

	<div class="flex flow-row flex-wrap gap-4">
		<div class="form-control grow">
			<label class="input-group input-group-vertical">
				<span class="py-1">Player Name</span>
				<input
					type="text"
					class="input input-bordered"
					bind:value={$playerCharacterGeneral.playerName}
				/>
			</label>
		</div>
		<div class="form-control grow">
			<label class="input-group input-group-vertical">
				<span class="py-1">Character Name</span>
				<input
					type="text"
					class="input input-bordered"
					bind:value={$playerCharacterGeneral.characterName}
				/>
			</label>
		</div>
		<div class="form-control grow">
			<label class="input-group input-group-vertical">
				<span class="py-1">Experience Points</span>
				<input
					type="text"
					class="input input-bordered"
					bind:value={$playerCharacterGeneral.experiencePoints}
				/>
			</label>
		</div>
	</div>
</div>

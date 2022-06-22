<script>
	import { Input } from 'postcss';

	import { playerCharacterGeneral } from '../stores.js';

	let playerCharacter =
		'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(localStorage));

	let playerName = window.localStorage.getItem('playerName');
	let characterName = window.localStorage.getItem('characterName');
	let downloadFileName = characterName + '-' + playerName + '.json';

	/**
	 * @type {FileList | null | undefined}
	 */
	let files;

	$: if (files) {
		const fileText = files[0].text();
		fileText.then((text) => {
			const yeet = JSON.parse(text);
			for (const [key, value] of Object.entries(yeet)) {
				console.log(`${key}: ${value}`);
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
					<a class="btn" href={playerCharacter} download={downloadFileName}>Backup</a>
				</div>
				<div class="btn-group">
					<input type="file" id="userFile" accept=".json" bind:files />
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

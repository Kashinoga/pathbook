<script>
	import {
		playerCharacterAlignments,
		playerCharacterGeneral,
		playerCharacterSizes
	} from '../stores.js';

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

	<form class="flex flow-row flex-wrap gap-4" id="form">
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
				<span class="py-1">Level</span>
				<input
					type="number"
					class="input input-bordered"
					max="20"
					bind:value={$playerCharacterGeneral.level}
				/>
			</label>
		</div>
		<div class="form-control grow">
			<label class="input-group input-group-vertical">
				<span class="py-1">Experience Points</span>
				<input
					type="number"
					class="input input-bordered"
					bind:value={$playerCharacterGeneral.experiencePoints}
				/>
			</label>
		</div>
		<div class="form-control grow">
			<label class="input-group input-group-vertical">
				<span class="py-1">Ancestry</span>
				<input
					type="text"
					class="input input-bordered"
					bind:value={$playerCharacterGeneral.ancestry}
				/>
			</label>
		</div>
		<div class="form-control grow">
			<label class="input-group input-group-vertical">
				<span class="py-1">Heritage</span>
				<input
					type="text"
					class="input input-bordered"
					bind:value={$playerCharacterGeneral.heritage}
				/>
			</label>
		</div>
		<div class="form-control grow">
			<label class="input-group input-group-vertical">
				<span class="py-1">Background</span>
				<input
					type="text"
					class="input input-bordered"
					bind:value={$playerCharacterGeneral.background}
				/>
			</label>
		</div>
		<div class="form-control grow">
			<label class="input-group input-group-vertical">
				<span class="py-1">Class</span>
				<input
					type="text"
					class="input input-bordered"
					bind:value={$playerCharacterGeneral.class}
				/>
			</label>
		</div>
		<div class="form-control grow">
			<label class="input-group input-group-vertical">
				<span class="py-1">Size</span>
				<select class="select select-bordered" bind:value={$playerCharacterGeneral.size}>
					{#each playerCharacterSizes as size}<option>{size}</option>{/each}
				</select>
			</label>
		</div>
		<div class="form-control grow">
			<label class="input-group input-group-vertical">
				<span class="py-1">Alignment</span>
				<select class="select select-bordered" bind:value={$playerCharacterGeneral.alignment}>
					{#each playerCharacterAlignments as alignment}<option>{alignment}</option>{/each}
				</select>
			</label>
		</div>
		<div class="form-control grow">
			<label class="input-group input-group-vertical">
				<span class="py-1">Traits</span>
				<input
					type="text"
					class="input input-bordered"
					bind:value={$playerCharacterGeneral.traits}
				/>
			</label>
		</div>
		<div class="form-control grow">
			<label class="input-group input-group-vertical">
				<span class="py-1">Deity</span>
				<input
					type="text"
					class="input input-bordered"
					bind:value={$playerCharacterGeneral.deity}
				/>
			</label>
		</div>

		<div class="flex flex-row gap-4">
			<div class="flex flex-col gap-4">
				<div class="form-control grow">
					<label class="input-group input-group-vertical">
						<span class="py-1">Strength</span>
						<input
							type="number"
							class="input input-bordered"
							bind:value={$playerCharacterGeneral.strength}
						/>
					</label>
				</div>
				<div class="form-control grow">
					<label class="input-group input-group-vertical">
						<span class="py-1">Dexterity</span>
						<input
							type="number"
							class="input input-bordered"
							bind:value={$playerCharacterGeneral.dexterity}
						/>
					</label>
				</div>
				<div class="form-control grow">
					<label class="input-group input-group-vertical">
						<span class="py-1">Constitution</span>
						<input
							type="number"
							class="input input-bordered"
							bind:value={$playerCharacterGeneral.constitution}
						/>
					</label>
				</div>
				<div class="form-control grow">
					<label class="input-group input-group-vertical">
						<span class="py-1">Wisdom</span>
						<input
							type="number"
							class="input input-bordered"
							bind:value={$playerCharacterGeneral.wisdom}
						/>
					</label>
				</div>
				<div class="form-control grow">
					<label class="input-group input-group-vertical">
						<span class="py-1">Charisma</span>
						<input
							type="number"
							class="input input-bordered"
							bind:value={$playerCharacterGeneral.charisma}
						/>
					</label>
				</div>
			</div>
			<div class="flex flex-col gap-4 stats stats-vertical shadow">
				<div class="stat">
					<div class="stat-title">Strength</div>
					<div class="stat-value">test</div>
					<div class="stat-desc">{$playerCharacterGeneral.strength}</div>
				</div>
				<div class="stat">
					<div class="stat-title">Charisma</div>
					<div class="stat-value">
						{$playerCharacterGeneral.charismaSign}{$playerCharacterGeneral.charismaMod}
					</div>
					<div class="stat-desc">21% more than last month</div>
				</div>
			</div>
		</div>
	</form>
</div>

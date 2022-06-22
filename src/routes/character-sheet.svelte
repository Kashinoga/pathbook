<script>
	import { playerName, greeting } from '../stores.js';
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<div class="py-4 space-y-2">
				<h1 class="text-5xl font-bold">Character Sheet</h1>
				<h1>{$greeting}</h1>
			</div>

			<div class="space-y-4 place-items-center">
				<div class="form-control">
					<label class="input-group input-group-vertical">
						<span class="py-1">Player Name</span>
						<input
							type="text"
							placeholder="Andrew Nguyen"
							class="input input-bordered"
							bind:value={$playerName}
						/>
					</label>
				</div>
				<div class="form-control">
					<label class="input-group input-group-vertical">
						<span class="py-1">Character Name</span>
						<input type="text" placeholder="Flora Deluxe" class="input input-bordered" />
					</label>
				</div>
			</div>
		</div>
	</div>
</div>

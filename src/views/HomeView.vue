<script setup lang="ts">
import router from '@/router';

let roomId = '';
const joinRoom = () => {
	router.push(`/room/${roomId}`);
}
</script>

<template>
	<section class="wrapper">
		<form @submit.prevent="joinRoom">
			<label for="room-id">
				Room code
				<input type="text"
					   id="room-id"
					   name="room"
					   v-model="roomId" />
			</label>
			<button type="submit">Join</button>
		</form>
		<RouterLink to="/new-room">New room</RouterLink>
	</section>
</template>

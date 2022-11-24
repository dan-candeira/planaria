<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

import SocketioService from './services/socketio.service';

onBeforeMount(() => {
	SocketioService.setupSocketConnection();
});

onBeforeUnmount(() => {
	SocketioService.disconnect();
});
</script>

<template>
	<header>
		<h1>
			<RouterLink to="/">Planaria</RouterLink>
		</h1>

		<div id="userConfig"></div>
	</header>
	<main>
		<RouterView />
	</main>
</template>

<style lang="scss">
header {
	display: flex;

	>*:first-child {
		margin-right: auto;
	}

	@supports (display: grid) {}
}

#app {
	padding: 2rem;
}

#userConfig {
	position: relative;
}
</style>

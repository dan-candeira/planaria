<script setup lang="ts">
import router from '@/router';
import socketioService from '@/services/socketio.service';

let gameName = '';
let votingSystem = '';

socketioService.subscribeToRoomCode((room) => {
    router.push(`/room/${room}`);
})

const newRoom = () => {
    socketioService.newRoom();
}
</script>

<template>
    <form @submit.prevent="newRoom">
        <label for="game-name">
            Game name
            <input type="text"
                   id="game-name"
                   name="game"
                   v-model="gameName" />
        </label>
        <label for="voting-system">
            Voting system
            <input type="text"
                   id="voting-system"
                   name="game"
                   v-model="votingSystem" />
        </label>
        <button class="button"
                type="submit">Save</button>
    </form>
</template>
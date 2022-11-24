<script lang="ts" setup>
import socketioService from '@/services/socketio.service';
import { ref } from 'vue';

const props = defineProps(['username', 'roomId'])
const user = ref(props.username);
const changeUsername = () => {
    socketioService.changeUsername(user.value, props.roomId);
}
</script>

<template>
    <button class="button">{{ username }} 😁</button>
    <div class="dropdown">
        <form @submit.prevent="changeUsername">
            <label for="username">
                Display name
                <input type="text"
                       id="username"
                       name="user"
                       v-model="user">
            </label>
            <button class="button"
                    type="button">Cancel</button>
            <button class="button"
                    type="submit">Save</button>
        </form>
    </div>
</template>
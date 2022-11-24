<script setup lang="ts">
import socketioService, { type User } from '@/services/socketio.service';
import { ref, type Ref } from 'vue';
import { useRoute } from 'vue-router';
import { Teleport } from 'vue';
import UserDropdown from '@/components/UserDropdown.vue'

const route = useRoute();
const roomId = String(route.params.id);
const cachedUser = localStorage.getItem("planaria-user");
const user: Ref<string> = ref('');
const users: Ref<User[]> = ref([]);

if (roomId) {
    socketioService.joinRoom(roomId, cachedUser);
    // localStorage.setItem("planaria-room-id", roomId);
}

socketioService.subscribeToUsername((u) => {
    user.value = u;
    localStorage.setItem("planaria-user", u);
})

socketioService.subscribeToUsers((_users) => {
    users.value = _users;
})

const vote = () => {

}


</script>

<template>
    <div>
        <Teleport to="#userConfig">
            <UserDropdown :username="user"
                          :roomId="roomId" />
        </Teleport>

        <ul>
            <li v-for="u in users"
                :key="u.id">
                {{ u.user }}
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
.dropdown {
    position: absolute;
    right: 0;
}
</style>
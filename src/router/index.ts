import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import RoomView from '@/views/RoomView.vue';
import NewRoomView from '@/views/NewRoomView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/AboutView.vue'),
		},
		{
			path: '/new-room',
			name: 'new-room',
			component: NewRoomView,
		},
		{
			path: '/room/:id',
			name: 'room',
			component: RoomView,
		},
		{
			path: '/:pathMatch(.*)*',
			redirect: '/',
		},
	],
});

export default router;

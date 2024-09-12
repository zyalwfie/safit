import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ResumeView from '@/views/ResumeView.vue';
import ProjectsView from '@/views/ProjectsView.vue';
import ContactView from '@/views/ContactView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/resume',
			name: 'resume',
			component: ResumeView,
		},
		{
			path: '/projects',
			name: 'projects',
			component: ProjectsView,
		},
		{
			path: '/contact',
			name: 'contact',
			component: ContactView,
		},
	],
});

export default router;

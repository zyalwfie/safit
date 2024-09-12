<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Navbar from './components/partials/Navbar.vue';
import Footer from './components/partials/Footer.vue';
</script>

<template>
	<Navbar />

	<Transition name="fade">
		<RouterView />
	</Transition>

	<Footer />
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 1.2s linear;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>

<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/partials/Navbar.vue';
import Footer from './components/partials/Footer.vue';
</script>

<template>
	<Navbar />

	<router-view v-slot="{Component}">
		<Transition name="fade">
			<component :is="Component"/>
		</Transition>
	</router-view>

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

<script setup>
import { RouterLink } from 'vue-router';
import MenuIcon from '../icons/MenuIcon.vue';
import CloseIcon from '../icons/CloseIcon.vue';
import { ref } from 'vue';

const showSideBar = ref(false);
</script>

<template>
	<nav>
		<div class="brand">
			<RouterLink
				to="/"
				class="brand-link"
			>
				<span class="circle"></span>
				<h1>auliya safitri <sup>writer</sup></h1>
			</RouterLink>
		</div>
		
		<div class="nav-items">
			<RouterLink
				to="resume"
				class="resume"
				active-class="active"
				>resume</RouterLink
			>
			<div class="vr"></div>
			<RouterLink
				to="projects"
				class="projects"
				active-class="active"
				>projects</RouterLink
			>
			<div class="vr"></div>
			<RouterLink
				to="contact"
				class="contact"
				active-class="active"
				>contact</RouterLink
			>
		</div>

		<div
			class="hamburger-menu"
			@click="showSideBar = !showSideBar"
		>
			<MenuIcon v-show="!showSideBar" />
			<CloseIcon v-show="showSideBar" />
		</div>

	</nav>

	<Transition name="sidebar">
		<aside v-show="showSideBar">
			<RouterLink
				to="resume"
				class="resume"
				active-class="active"
				@click="showSideBar = false"
				>resume</RouterLink
			>
			<RouterLink
				to="projects"
				class="projects"
				active-class="active"
				@click="showSideBar = false"
				>projects</RouterLink
			>
			<RouterLink
				to="contact"
				class="contact"
				active-class="active"
				@click="showSideBar = false"
				>contact</RouterLink
			>
		</aside>
	</Transition>
</template>

<style scoped>
.sidebar-enter-active {
	transition: all 0.3s ease-out;
}

.sidebar-leave-active {
	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.sidebar-enter-from,
.sidebar-leave-to {
	transform: translateY(-20px);
	opacity: 0;
}

nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 3rem;
	position: relative;
	margin-bottom: 1rem;
}

nav .brand .brand-link {
	display: flex;
	align-items: center;
	gap: 0.75rem;
	text-decoration: none;
	color: black;
}

nav .brand .brand-link .circle {
	display: block;
	height: 1.5rem;
	width: 1.5rem;
	border-radius: 9999rem;
	background-color: var(--harvest-gold);
}

nav .brand .brand-link h1 {
	font-size: 1.2rem;
	font-weight: 600;
	font-family: 'Work Sans';
	text-transform: capitalize;
}

nav .brand .brand-link h1 sup {
	vertical-align: bottom;
	letter-spacing: normal;
	font-size: 1rem;
	font-weight: 300;
}

nav .nav-items {
	display: none;
}

nav .vr {
	border-right: 1px solid black;
	height: 1.5rem;
}

nav .hamburger-menu {
	position: absolute;
	right: 3rem;
	z-index: 5;
}

aside {
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background-color: var(--white-smoke);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	padding: 8rem 6rem;
	font-family: 'Montserrat Alternates';
}

aside > * {
	text-decoration: none;
	font-size: 1.3rem;
	text-transform: capitalize;
	color: black;
}

aside .active {
	color: var(--harvest-gold);
}

/* .active {
	display: block;
} */

@media (min-width: 1024px) {
	nav {
		padding-left: 3rem;
		padding-right: 3rem;
	}

	nav .nav-items {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	nav .nav-items .active {
	color: var(--harvest-gold);
}

	nav .nav-items > * {
		text-decoration: none;
		color: black;
		text-transform: capitalize;
		font-family: 'Montserrat Alternates';
		font-size: 0.95rem;
	}

	nav .hamburger-menu {
		display: none;
	}
}
</style>

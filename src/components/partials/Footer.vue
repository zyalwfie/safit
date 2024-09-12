<script setup>
import FacebookIcon from '../icons/FacebookIcon.vue';
import InstagramIcon from '../icons/InstagramIcon.vue';
import LinkedInIcon from '../icons/LinkedInIcon.vue';
import TiktokIcon from '../icons/TiktokIcon.vue';
</script>

<template>
	<footer>
		<div class="phone">
			<h1>phone</h1>
			<h2>123-456-789</h2>
		</div>
		<div class="email">
			<h1>email</h1>
			<h2>safitriauliya601@gmail.com</h2>
		</div>
		<div class="social-media">
			<h1>follow me</h1>
			<div class="platforms">
				<span>
					<InstagramIcon />
				</span>
				<span>
					<FacebookIcon />
				</span>
				<span>
					<LinkedInIcon />
				</span>
				<span>
					<TiktokIcon />
				</span>
			</div>
		</div>
		<div class="copyright">
			<h1>&copy; 2025 by auliya safitri.</h1>
		</div>
	</footer>
</template>

<style scoped>
footer {
	margin-top: 3rem;
	border-top: 1px solid gray;
	padding: 1.5rem 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 15rem;
}

footer .phone {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}

footer .phone h1 {
	font-weight: 600;
	font-family: 'Work Sans';
	text-transform: capitalize;
}

footer .phone h2 {
	font-weight: 300;
	font-family: 'Montserrat Alternates';
}
footer .email {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}

footer .email h1 {
	font-weight: 600;
	font-family: 'Work Sans';
	text-transform: capitalize;
}

footer .email h2 {
	font-weight: 300;
	font-family: 'Montserrat Alternates';
}
footer .social-media {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}

footer .social-media h1 {
	font-weight: 600;
	font-family: 'Work Sans';
	text-transform: capitalize;
}

footer .social-media .platforms {
	display: flex;
	gap: 0.5rem;
}

footer .copyright {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}

footer .copyright h1 {
	font-size: 0.85rem;
	font-weight: 300;
	font-family: 'Work Sans';
	text-transform: capitalize;
}

@media (min-width: 1024px) {
	footer {
		flex-direction: row;
		height: auto;
		padding: 2rem 4rem 5rem;
	}

	footer .phone h1,
	footer .email h1,
	footer .social-media h1 {
		font-size: 1.1rem;
	}
}
</style>

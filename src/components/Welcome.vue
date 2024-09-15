<template>
	<div class="container">
		<img
			src="../assets/female-avatar.svg"
			alt="Auliya Safitri"
		/>
		<div class="desc">
			<h1>hello</h1>
			<h3>a bit about me</h3>
			<p>I'm a paragraph. Click here to add your own text and edit me. I'm a great place for you to tell a story and let your users know a little more about you.</p>
			<div class="buttons">
				<button class="resume">resume</button>
				<button class="projects">projects</button>
				<button class="contact">contact</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 0 3rem;
}

.container img {
	order: 2;
}

.container .desc {
	order: 1;
}

.container .desc h1 {
	font-family: 'Work Sans';
	font-size: 2.5rem;
	font-weight: 600;
	text-transform: capitalize;
	margin-bottom: 1rem;
}

.container .desc h3 {
	font-size: 1.4rem;
	font-family: 'Work Sans';
	font-weight: 600;
	text-transform: capitalize;
	margin-bottom: 0.25rem;
}

.container .desc p {
	font-family: 'Montserrat Alternates';
	font-size: 0.875rem;
	font-weight: 400;
	line-height: 1.5rem;
	margin-bottom: 1rem;
}

.container .desc .buttons {
	display: flex;
	justify-content: space-between;
}

.container .desc .buttons button {
	height: 6rem;
	width: 6rem;
	border-radius: 9999rem;
	border: 1px solid black;
	text-transform: capitalize;
	font-weight: 600;
}

.container .desc .buttons .resume {
	background-color: var(--harvest-gold);
}

.container .desc .buttons .projects {
	background-color: var(--scarlet);
}

.container .desc .buttons .contact {
	background-color: var(--tiffany-blue);
}

@media (min-width: 1024px) {
	.container {
		flex-direction: row;
		padding: 10rem 14rem;
		gap: 4rem;
		align-items: center;
	}

	.container img {
		order: 1;
		width: 30rem;
	}

	.container .desc h1 {
		font-size: 6rem;
		margin-bottom: 2rem;
	}

	.container .desc p {
		margin-bottom: 2rem;
	}

	.container .desc .buttons {
		justify-content: start;
		gap: 1rem;
	}

	.container .desc .buttons button {
		height: 8rem;
		width: 8rem;
		font-size: 1.2em;
	}
}
</style>

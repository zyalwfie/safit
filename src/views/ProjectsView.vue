<template>
	<main>
		<h1>projects</h1>
		<div class="project">
			<div>
				<h2>project name 01</h2>
				<p>
					I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users
					know a little more about you.
				</p>
			</div>
			<img
				src="../assets/project.svg"
				alt="Project"
			/>
		</div>
		<div class="project">
			<div>
				<h2>project name 02</h2>
				<p>
					I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users
					know a little more about you.
				</p>
			</div>
			<img
				src="../assets/project.svg"
				alt="Project"
			/>
		</div>
		<div class="project">
			<div>
				<h2>project name 03</h2>
				<p>
					I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users
					know a little more about you.
				</p>
			</div>
			<img
				src="../assets/project.svg"
				alt="Project"
			/>
		</div>
	</main>
</template>

<style scoped>
main {
	padding: 0 1rem;
}

main h1 {
	font-family: 'Work Sans';
	font-size: 1.75rem;
	font-weight: 600;
	text-transform: capitalize;
	margin-bottom: 2rem;
}

main .project h2 {
	font-family: 'Work Sans';
	font-size: 1.5rem;
	font-weight: 600;
	text-transform: capitalize;
	margin-bottom: 1rem;
}

main .project p {
	font-family: 'Montserrat Alternates';
	font-size: 0.85rem;
	font-weight: 400;
	line-height: 1.5rem;
	margin-bottom: 1rem;
}

main .project img {
	width: 100%;
}

@media (min-width: 1024px) {
	main {
		padding-top: 6rem;
		padding-left: 14rem;
		padding-right: 14rem;
	}

	main h1 {
		margin-bottom: 5rem;
		font-size: 2.5rem;
	}

	main .project {
		display: flex;
		gap: 10rem;
		margin-bottom: 10rem;
	}
	
	main .project h2 {
		font-size: 1.75rem;
	}

	main .project img {
		max-width: 32rem;
	}
}
</style>

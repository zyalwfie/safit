<template>
	<main>
		<h1>resume</h1>
		<div class="work-experience">
			<h2>work experience</h2>
			<div class="work-desc">
				<div class="desc">
					<span>2035 - present</span>
					<div>
						<h3>editor</h3>
						<p>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
					</div>
				</div>
				<div class="desc">
					<span>2035 - 2075</span>
					<div>
						<h3>editor</h3>
						<p>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
					</div>
				</div>
			</div>
		</div>
		<hr />

		<div class="education">
			<h2>education</h2>
			<div class="edu-desc">
				<div class="desc">
					<span>2021 - 2025</span>
					<div>
						<h3>Establishment Name | Master's Degree</h3>
						<p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
					</div>
				</div>
			</div>
		</div>

		<hr />

		<div class="skill-expertise">
			<h2>skill & expertise</h2>
			<div class="desc">
				<ul>
					<li>I'm a paragraph. Click here to add your own text and edit me.</li>
				</ul>
			</div>
		</div>
	</main>
</template>

<style scoped>
hr {
	margin: 2rem 0;
}

main h1 {
	font-family: 'Work Sans';
	font-size: 1.75rem;
	font-weight: 600;
	text-transform: capitalize;
	margin-bottom: 2rem;
}

main h1,
main .work-experience,
main .education,
main .skill-expertise {
	padding: 0 1rem;
}

main .work-experience h2 {
	font-family: 'Work Sans';
	font-size: 1.5rem;
	font-weight: 600;
	text-transform: capitalize;
	width: min-content;
	margin-bottom: 2rem;
}

main .work-experience span {
	font-family: 'Montserrat Alternates';
	font-size: 0.85rem;
	font-weight: 400;
	text-transform: capitalize;
	margin-bottom: 0.3rem;
	display: block;
}

main .work-experience h3 {
	font-family: 'Work Sans';
	font-size: 1.2rem;
	font-weight: 600;
	text-transform: capitalize;
	margin-bottom: 1rem;
}

main .work-experience p {
	font-family: 'Montserrat Alternates';
	font-size: 0.85rem;
	font-weight: 400;
	text-transform: capitalize;
	line-height: 1.5rem;
}

main .work-experience .work-desc .desc {
	margin-bottom: 2rem;
}

main .education h2 {
	font-family: 'Work Sans';
	font-size: 1.5rem;
	font-weight: 600;
	text-transform: capitalize;
	width: min-content;
	margin-bottom: 2rem;
}

main .education span {
	font-family: 'Montserrat Alternates';
	font-size: 0.85rem;
	font-weight: 400;
	text-transform: capitalize;
	margin-bottom: 0.3rem;
	display: block;
}

main .education h3 {
	font-family: 'Work Sans';
	font-size: 1.2rem;
	font-weight: 600;
	text-transform: capitalize;
	margin-bottom: 1rem;
}

main .education p {
	font-family: 'Montserrat Alternates';
	font-size: 0.85rem;
	font-weight: 400;
	text-transform: capitalize;
	line-height: 1.5rem;
}

main .work-experience .work-desc .desc {
	margin-bottom: 2rem;
}

main .skill-expertise h2 {
	font-family: 'Work Sans';
	font-size: 1.5rem;
	font-weight: 600;
	text-transform: capitalize;
	width: min-content;
	margin-bottom: 2rem;
}

main .skill-expertise ul {
	padding: 0 1rem;
	list-style: disc;
	font-family: 'Montserrat Alternates';
	font-size: 0.85rem;
	line-height: 1.5rem;
}

@media (min-width: 1024px) {
	main {
		padding-top: 6rem;
	}

	main h1 {
		font-size: 2.5rem;
		margin-bottom: 5rem;
	}

	main h1,
	main .work-experience,
	main .education,
	main .skill-expertise {
		padding: 0 14rem;
	}

	main .work-experience {
		display: flex;
	}

	main .work-experience .work-desc {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	main .work-experience .work-desc .desc {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
	}

	main .work-experience .work-desc .desc span {
		text-align: end;
	}

	main .education {
		display: flex;
	}

	main .education .edu-desc {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	main .education .edu-desc .desc {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
	}

	main .education .edu-desc .desc span {
		text-align: end;
	}

	main .skill-expertise {
		display: flex	;
	}

	main .skill-expertise .desc {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
	}

	main .skill-expertise .desc ul {
		grid-column: 2/4;
		padding: 0 2rem;
	}

}
</style>

<template>
	<main>
		<div>
			<h1>contact</h1>
			<span>looking forward to hearing from you</span>
		</div>
		<form>

			<div class="name">
				<div class="first-name">
					<label for="first-name">first name</label>
					<input
						type="text"
						id="first-name"
						name="first-name"
					/>
				</div>
				<div class="last-name">
					<label for="last-name">last name</label>
					<input
						type="text"
						id="last-name"
						name="last-name"
					/>
				</div>
			</div>

			<div class="email-container">
				<div class="email">
					<label for="email">email</label>
					<input
						type="email"
						id="email"
						name="email"
					/>
				</div>
				<div class="subject">
					<label for="subject">subject</label>
					<input
						type="subject"
						id="subject"
						name="subject"
					/>
				</div>
			</div>

			<div class="message">
				<label for="message">message</label>
				<textarea
					id="message"
					name="message"
					rows="5"
				>
				</textarea>
			</div>

			<button type="submit">submit</button>
		</form>
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
	margin-bottom: 0.75rem;
}

main span {
	font-family: 'Montserrat Alternates';
	font-size: 0.85rem;
	font-weight: 400;
	line-height: 1.5rem;
	display: block;
	margin-bottom: 2rem;
}

main span::first-letter {
	text-transform: capitalize;
}

main form {
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
}

main form .name label,
main form .email-container label,
main form .message label
 {
	font-weight: 350;
}

main form .name,
main form .email-container {
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
}

main form .name > *,
main form .email-container > *,
main form .message {
	display: flex;
	flex-direction: column;
	gap: .75rem;
}

main form label {
	font-family: 'Work Sans';
	font-weight: 400;
	text-transform: capitalize;
}

main form input,
main form textarea {
	background-color: transparent;
	border: 1px solid black;
	padding: 0.75rem;
}

main form button {
	padding: 1rem;
	display: block;
	text-transform: capitalize;
	font-weight: 600;
	font-family: 'Work Sans';
	font-size: 1.2rem;
	border-radius: 9999rem;
	border: 1px solid black;
	background-color: var(--harvest-gold);
}

@media (min-width: 1024px) {
	main {
		padding: 6rem 14rem 0;
		display: flex;
		gap: 10rem;
	}

	main div h1 {
		font-size: 2.5rem;
	}

	main form {
		flex-grow: 1;
	}

	main form .name,
	main form .email-container {
		flex-direction: row;
	}

	main form .name > *,
	main form .email-container > * {
		flex-grow: 1;
	}	
}
</style>

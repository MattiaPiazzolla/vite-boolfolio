<script>
export default {};
</script>
<template>
	<div class="container text-center">
		<h1>404</h1>
		<p>Page not found</p>
		<router-link to="/">Home</router-link>
	</div>
</template>
<style lang="scss" scoped>
.container {
	height: calc(100vh - 100px);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1 {
		font-size: 5rem;
	}

	p {
		font-size: 2rem;
	}

	a {
		font-size: 2rem;
		text-decoration: none;
		font-weight: 900;
		color: #000;

		&:hover {
			text-decoration: underline;
		}
	}
}
</style>

<script>
export default {};
</script>
<template>
	<header>
		<div class="container-fluid py-3">
			<div class="row">
				<div class="col-12">
					<ul
						class="list-unstyled d-flex justify-content-center align-items-center m-0">
						<li class="mx-2">
							<a href="#">Home</a>
						</li>
						<li class="mx-2">
							<a href="#">Progetti</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</header>
</template>
<style lang="scss">
header {
	color: white;
	background-color: rgb(0, 100, 133);
	margin-bottom: 3rem;

	a {
		text-decoration: none;
		color: white;
		&:hover {
			color: rgb(175, 175, 175);
		}
	}
}
</style>

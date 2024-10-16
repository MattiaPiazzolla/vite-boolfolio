<script>
export default {
	props: {
		menu: Array,
	},
};
</script>

<template>
	<header>
		<div class="container-fluid py-3">
			<div class="row">
				<div class="col-12">
					<ul
						class="list-unstyled d-flex justify-content-center align-items-center m-0">
						<li class="mx-2" v-for="(item, index) in menu" :key="index">
							<router-link :to="{ name: item.name }">
								{{ item.label }}
							</router-link>
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

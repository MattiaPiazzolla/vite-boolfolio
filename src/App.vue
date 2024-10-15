<script>
import AppHeader from "./components/AppHeader.vue";

export default {
	components: {
		AppHeader,
	},
};
</script>
<template>
	<AppHeader />
	<main>
		<div class="container">
			<div class="row">
				<!-- <AppProject :projects="projects" /> -->
				<router-view></router-view>
			</div>
		</div>
	</main>
</template>
<style lang="scss"></style>

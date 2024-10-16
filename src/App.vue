<script>
import { store } from "./store.js";
import AppHeader from "./components/AppHeader.vue";

export default {
	components: {
		AppHeader,
	},
	data() {
		return {
			store,
		};
	},
};
</script>
<template>
	<AppHeader :menu="store.menuItems" />
	<main>
		<div class="container">
			<div class="row">
				<router-view></router-view>
			</div>
		</div>
	</main>
</template>
<style lang="scss"></style>

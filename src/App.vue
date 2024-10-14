<script>
import axios from "axios";
import AppProject from "./components/AppProject.vue";

export default {
	components: {
		AppProject,
	},
	data() {
		return {
			projects: [],
		};
	},
	methods: {
		GetProjects() {
			axios.get("http://localhost:8000/api/index").then((response) => {
				this.projects = response.data;
			});
		},
	},
	mounted() {
		this.GetProjects();
	},
};
</script>
<template>
	<header class="bg-primary mb-5">
		<div class="container py-3">
			<h1 class="text-center text-light">I miei progetti</h1>
		</div>
	</header>
	<main>
		<div class="container">
			<div class="row">
				<AppProject :projects="projects" />
			</div>
		</div>
	</main>
</template>
<style lang="scss"></style>

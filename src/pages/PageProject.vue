<script>
import axios from "axios";
import { store } from "../store.js";

export default {
	data() {
		return {
			store,
			project: {},
		};
	},
	methods: {
		getProject() {
			axios
				.get(`${this.store.baseUrl}/projects/${this.$route.params.slug}`)
				.then((res) => {
					this.project = res.data.results;
				});
		},
	},
	created() {
		this.getProject();
	},
};
</script>
<template>
	<h1>{{ project.name }}</h1>
	<img
		:src="
			project.project_image.startsWith('http')
				? project.project_image
				: `http://127.0.0.1:8000/storage/${project.project_image}`
		"
		class="card-img-top"
		:alt="`${project.name} image`" />
</template>
<style
	lang="scss
"></style>

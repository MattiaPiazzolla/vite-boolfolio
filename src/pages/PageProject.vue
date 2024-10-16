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
	<div>
		<h1>{{ project.name || "Caricamento..." }}</h1>
		<img
			:src="
				project.project_image?.startsWith('http')
					? project.project_image
					: `http://127.0.0.1:8000/storage/${project.project_image}`
			"
			:alt="`${project.name || 'Immagine del progetto'}`" />
		<p>{{ project.summary || "Nessuna descrizione disponibile." }}</p>

		<div>
			<p><strong>Categoria:</strong> {{ project.category?.name || "N/A" }}</p>
			<p><strong>Tecnologie:</strong></p>
			<ul>
				<li v-for="tech in project.technologies" :key="tech.id">
					{{ tech.name }}
				</li>
			</ul>
		</div>
	</div>
</template>
<style lang="scss" scoped>
img {
	max-width: 200px;
	aspect-ratio: 1/1;
}
</style>

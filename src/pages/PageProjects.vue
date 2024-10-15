<script>
export default {
	props: {
		projects: {
			type: Array,
		},
	},
};
</script>
<template>
	<div class="col-md-4 mb-4" v-for="project in projects" :key="project.id">
		<div class="card h-100">
			<img
				:src="
					project.project_image.startsWith('http')
						? project.project_image
						: `http://127.0.0.1:8000/storage/${project.project_image}`
				"
				class="card-img-top"
				:alt="`${project.name} image`" />
			<div class="card-body d-flex flex-column">
				<h5 class="card-title">{{ project.name }}</h5>
				<p class="card-text">
					{{ project.summary || "Nessuna descrizione disponibile." }}
				</p>
				<p>Categoria: {{ project.category?.name || "Senza categoria" }}</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>

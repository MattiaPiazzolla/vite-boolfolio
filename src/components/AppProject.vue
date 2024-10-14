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
				v-bind:src="project.project_image"
				:alt="`${project.name} image`"
				class="card-img-top"
				style="height: 200px; object-fit: cover" />
			<div class="card-body d-flex flex-column">
				<h5 class="card-title">{{ project.name }}</h5>
				<p class="card-text">
					{{ project.summary || "Nessuna descrizione disponibile." }}
				</p>
			</div>
		</div>
	</div>
</template>

<style lang=""></style>

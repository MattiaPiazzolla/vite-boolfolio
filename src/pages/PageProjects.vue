<script>
import axios from "axios";
import SingleProject from "../components/SingleProject.vue";

export default {
	components: {
		SingleProject,
	},
	data() {
		return {
			projects: [],
			first_page: 1,
			last_page: null,
			current_page: null,
		};
	},
	methods: {
		GetProjects(page = 1) {
			axios
				.get("http://localhost:8000/api/index", { params: { page: page } })
				.then((response) => {
					this.projects = response.data.results.data;
					this.last_page = response.data.results.last_page;
					this.current_page = response.data.results.current_page;
				});
		},
		goToPage(page) {
			if (page > 0 && page <= this.last_page) {
				this.GetProjects(page);
			}
		},
	},
	mounted() {
		this.GetProjects();
	},
};
</script>

<template>
	<SingleProject :projects="projects" />
	<nav aria-label="Page navigation">
		<ul class="pagination d-flex justify-content-center my-5">
			<li class="page-item">
				<a
					class="page-link"
					href="#"
					@click.prevent="goToPage(current_page - 1)"
					:class="{ disabled: current_page == 1 }"
					>Precedente</a
				>
			</li>
			<li class="page-item" v-for="i in last_page" :key="i">
				<a class="page-link" href="#" @click.prevent="goToPage(i)">{{ i }}</a>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="#"
					@click.prevent="goToPage(current_page + 1)"
					:class="{ disabled: current_page == last_page }"
					>Successiva</a
				>
			</li>
		</ul>
	</nav>
</template>

<style lang="scss" scoped></style>

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
			first_page: 1,
			last_page: null,
			current_page: null,
		};
	},
	methods: {
		GetProjects() {
			axios.get("http://localhost:8000/api/index").then((response) => {
				console.log(response.data.results);
				this.projects = response.data.results.data;
				this.last_page = response.data.results.last_page;
				this.current_page = response.data.results.current_page;
			});
		},
		goToPage(page) {
			this.current_page = page;
			axios
				.get("http://localhost:8000/api/index", { params: { page: page } })
				.then((response) => {
					this.projects = response.data.results.data;
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
		<nav aria-label="Page navigation">
			<ul class="pagination d-flex justify-content-center my-5">
				<li class="page-item">
					<a
						class="page-link"
						href="#"
						@click="goToPage(current_page - 1)"
						:class="current_page == 1 ? 'disabled' : ''"
						>Precedente</a
					>
				</li>
				<li class="page-item" v-for="i in last_page" :key="i">
					<a class="page-link" href="#" @click="goToPage(i)">{{ i }}</a>
				</li>
				<li class="page-item">
					<a
						class="page-link"
						href="#"
						@click="goToPage(current_page + 1)"
						:class="current_page == last_page ? 'disabled' : ''"
						>Successiva</a
					>
				</li>
			</ul>
		</nav>
	</main>
</template>
<style lang="scss"></style>

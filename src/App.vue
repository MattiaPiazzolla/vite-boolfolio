<script>
import axios from "axios";

export default {
	data() {
		return {
			projects: [],
		};
	},
	methods: {
		GetProjects() {
			axios.get("http://localhost:8000/api/projects").then((response) => {
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
	<div></div>
</template>
<style lang="scss"></style>

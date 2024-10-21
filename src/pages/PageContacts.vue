<script>
import { store } from "../store";
import axios from "axios";

export default {
	data() {
		return {
			name: "",
			surname: "",
			email: "",
			phone: "",
			content: "",
		};
	},
	methods: {
		sendForm() {
			const data = {
				name: this.name,
				surname: this.surname,
				email: this.email,
				phone: this.phone,
				content: this.content,
			};

			axios.post(`${store.baseUrl}/contacts`, data).then((res) => {
				if (res.data.success) {
					this.name = "";
					this.surname = "";
					this.email = "";
					this.phone = "";
					this.content = "";
				}
			});
		},
	},
};
</script>
<template>
	<div>
		<div class="my-5">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="text-center">
							<h1>Contatti</h1>
						</div>
					</div>
					<div class="col-12">
						<form action="" method="post" @submit.prevent="sendForm()">
							<div class="row">
								<div class="col-12">
									<div class="mb-3">
										<label for="name" class="form-label">Nome</label>
										<input
											type="text"
											class="form-control"
											id="name"
											name="name"
											v-model="name"
											placeholder="Inserisci il tuo nome" />
									</div>
								</div>
								<div class="col-12">
									<div class="mb-3">
										<label for="surname" class="form-label">Cognome</label>
										<input
											type="text"
											class="form-control"
											id="surname"
											name="surname"
											v-model="surname"
											placeholder="Inserisci il tuo cognome" />
									</div>
								</div>
								<div class="col-12">
									<div class="mb-3">
										<label for="email" class="form-label">Email</label>
										<input
											type="email"
											class="form-control"
											id="email"
											name="email"
											v-model="email"
											placeholder="Inserisci la tua email" />
									</div>
								</div>
								<div class="col-12">
									<div class="mb-3">
										<label for="phone" class="form-label"
											>Numero di telefono</label
										>
										<input
											type="text"
											class="form-control"
											id="phone"
											name="phone"
											v-model="phone"
											placeholder="Inserisci il tuo numero" />
									</div>
								</div>
								<div class="col-12">
									<div class="mb-3">
										<label for="message" class="form-label">Messaggio</label>
										<textarea
											class="form-control"
											id="content"
											name="content"
											v-model="content"
											placeholder="Inserisci il tuo messaggio"></textarea>
									</div>
								</div>
								<div class="col-12">
									<button type="submit" class="btn btn-primary">Invia</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang=""></style>

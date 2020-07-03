<template>
  <v-form ref="main" @submit.prevent="createNewAuthor()">
      <v-row>
          <v-col>
              <h1 class="text-center light-blue--text text--darken-3">Registro de autores</h1>
          </v-col>
      </v-row>
      <v-row>
          <v-col cols="6">
              <v-text-field v-model="name" label="Nombre completo del autor"></v-text-field>
          </v-col>
          <v-col cols="6">
              <v-text-field v-model="country" label="País del autor"></v-text-field>
          </v-col>
      </v-row>
      <v-row>
          <v-col class="d-flex">
              <v-btn dark color="light-blue accent-4" class="mx-auto">Crear autor</v-btn>
          </v-col>
      </v-row>
      <v-snackbar
        color="success"
        v-model="snackbar"
        top
        right
      >Autor creado!</v-snackbar>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'CreateAuthor',
    data() {
        return{
            name: '',
            country: '',
            snackbar: false
        }
    },
    methods: {
        ...mapActions('author', ['createAuthor']),
        createNewAuthor(){
            const newAuthor = {name: this.name, country: this.country}
            this.createAuthor(newAuthor)
            this.snackbar=true
            this.$ref.main.reset()
        }
    }
}
</script>

<style>

</style>
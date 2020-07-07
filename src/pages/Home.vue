<template>
  <v-container>
    <h1 class="light-blue--text text--darken-3">Bienvenidos a JCBookstore</h1>
    <p class="font-italic light-blue--text text--accent-4">"La librería virtual a tu alcance"</p>
    <v-row>
      <v-btn dark color="blue lighten-1" to="/author" class="mr-4">Gestión de autores</v-btn>
      <v-btn dark color="indigo lighten-1" to="/book">Gestión de libros</v-btn>
    </v-row>
  </v-container>
</template>
    
<script>
  export default {
    
  }
</script>
    
<style>
    
</style>
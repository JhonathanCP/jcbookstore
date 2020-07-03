<template>
  <v-app>
    <v-content>
      <v-app-bar dark class="light-blue darken-3">
        <v-toolbar-title>JCBookstore</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items v-if="$store.getters['login/isUserConnected']">
          <v-btn text exact to="/">Inicio</v-btn>
          <v-btn text to="/author">Autores</v-btn>
          <v-btn text to="/book">Libros</v-btn>
        </v-toolbar-items>
      </v-app-bar>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

};
</script>

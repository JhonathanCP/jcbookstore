<template>
    <div>
        <v-row>
            <v-col cols="6">
                <v-btn 
                    class="mr-4"
                    dark 
                    color="light-blue darken-3" 
                    to="/author/create"
                >Crear autor</v-btn>
                <v-btn 
                    dark 
                    color="cyan accent-4" 
                    to="/author/list"
                >Lista de autores</v-btn>
            </v-col>
        </v-row>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'AuthorPage'
}
</script>

<style>

</style>
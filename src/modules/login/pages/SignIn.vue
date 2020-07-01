<template>
    <v-container fluid class="fill-height">
        <v-row align="center" justify="center">
            <v-col cols="6">
                <v-card class="elevation-10">
                    <v-form @submit.prevent="signIn()">
                        <v-toolbar flat color="light-blue accent-4" dark>
                            <v-toolbar-title class="mx-auto">Ingreso a JCBookstore</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>                            
                                <v-text-field 
                                v-model="email"
                                label="Email" 
                                name="email" 
                                prepend-icon="person" 
                                type="text"></v-text-field>
                                <v-text-field
                                v-model="password"
                                label="Password"
                                name="password"
                                prepend-icon="lock"
                                type="password"></v-text-field>                            
                        </v-card-text>
                        <v-card-actions>
                            <v-btn to="/signup" color="light-blue darken-2" dark>Registrarse</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn type="submit" color="light-blue darken-2" dark>Ingresar</v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'SignIn',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        signIn() {
            const user = {email: this.email, password: this.password}
            this.$store.dispatch('login/signIn', user)/* Función del modulo store.js */
            this.$router.push('/')/* home */
        }
    }
}
</script>
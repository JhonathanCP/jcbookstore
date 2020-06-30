<template>
    <v-content>
        <v-container fluid class="fill-height">
            <v-row align="center" justify="center">
                <v-col cols="6">
                    <v-card class="elevation-10">
                        <v-toolbar flat color="primary" dark>
                            <v-toolbar-title class="mx-auto">Ingresa al Sistema</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-form>
                                <v-text-field 
                                label="Email" 
                                name="email" 
                                prepend-icon="person" 
                                type="text"></v-text-field>
                                <v-text-field
                                label="Password"
                                name="password"
                                prepend-icon="lock"
                                type="password"></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn color="primary" class="ml-auto">Ingresar</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>
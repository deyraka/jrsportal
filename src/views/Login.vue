<template>
    <v-container class="fill-height" fluid>
        <v-row
            align="center" justify="center"
        >
            <v-col
                cols="12" sm="8" md="6"
            >
                <v-card rounded="0">
                    <v-row>
                        <v-col
                            cols="12" md="4" class="cyan"
                        >
                            <v-card-text class="white--text text-center mt-12">
                                <h1 class="text-center display-1">Hi,..</h1>
                                <h5 class="text-center">Selamat datang di Portal JRS</h5>
                                <h5 class="text-center mt-10">Lupa password?</h5>
                                <v-btn
                                    class="mt-2 rounded-pill"
                                    light
                                    color="white"
                                    small
                                >
                                    Klik disini
                                </v-btn>
                            </v-card-text>
                        </v-col>
                        <v-col>
                            <v-card-text class="mt-5">
                                <v-col cols="12">
                                    <v-img
                                    :src="require('../assets/logo.svg')"
                                    class="my-3"
                                    contain
                                    height="100"
                                    />
                                </v-col>
                                <h1 class="text-center display-2 cyan--text text--accent-3"
                                >Log In</h1>
                                <v-form class="px-16">
                                    <v-text-field
                                        label="Email"
                                        name="Email"
                                        prepend-icon="mdi-email"
                                        type="text"
                                        color="cyan"
                                    />
                                    <v-text-field
                                        label="Password"
                                        name="Password"
                                        prepend-icon="mdi-lock"
                                        type="password"
                                        color="cyan"
                                    />
                                </v-form>
                            </v-card-text>
                            <div class="text-center mt-3">
                                <v-btn
                                    class="mb-5"
                                    rounded
                                    color="cyan accent-3"
                                    dark
                                    :to="{ path: '/' }"
                                >Log In</v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    
}
</script>
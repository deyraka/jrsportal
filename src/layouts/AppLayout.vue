<template>
    <v-app>
        <SideNav app/>
        <v-app-bar
        app
        color="cyan accent-4"
        dark
        >
        <div class="d-flex align-center">
            <span class="mr-2">HiJRS Web Management</span>
        </div>

        <v-spacer></v-spacer>

        <v-btn
            :to="{ path: '/login'}"
            text
        >
            <v-icon title="Log In">mdi-login</v-icon>
        </v-btn>
        <v-btn
            href="#"
            target="_blank"
            text
        >
            <v-icon title="Log out">mdi-power</v-icon>
        </v-btn>
        </v-app-bar>
        <v-main  class="grey lighten-4">
        <v-container>
            <router-view></router-view>
        </v-container>
        </v-main>
        <v-footer app light fixed inset :elevation="10" height="50">
        <Footer/>
        </v-footer>
    </v-app>
</template>

<script>
import SideNav from '../components/SideNav';
import Footer from '../components/Footer';

export default {
    name: "AppLayout",
    components: {
        SideNav,
        Footer
    } 
    
}
</script>
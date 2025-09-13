<!-- The top level component -->
<script lang="ts" setup>
    import { ref} from 'vue'
    import { useRouter} from "vue-router"

    const drawer = ref(false)
    const router = useRouter()

    const appBarItems = [
        {text: 'Movie Search', to: '/movie-explorer/'},
        {text: 'About', to: '/movie-explorer/about'}
    ]

    function navigate(item: { text: string; to: string }) {
        drawer.value = false
        router.push(item.to)
    }
    
</script>

<template>
    <v-layout>        
        <v-app-bar :elevation="2">
            <template v-slot:prepend>
                <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            </template>

            <v-app-bar-title>🎬 Movie Explorer</v-app-bar-title>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" temporary>
            <v-list>
                <v-list-item
                    v-for="(item, index) in appBarItems"
                    :key="index"
                    :title="item.text"
                    link
                    @click="navigate(item)"
                />
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <router-view /> <!-- Dynamic page container -->
        </v-main>
       
    </v-layout>    
</template>

<style>
    /* optional global styling */

    /* -- */
    :root {
        --v-font-family: "Avenir, Helvetica, Arial, sans-serif";
    }
</style>

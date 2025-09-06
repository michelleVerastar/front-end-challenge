<!-- Search Text input and button for the movie search -->
<script setup lang="ts">
    import { ref } from "vue";

    const emit = defineEmits<{ (e: "search", query: string): void }>();

    const query = ref("");

    function onSearch() {
        if (query.value.trim()) {
            emit("search", query.value.trim());
        }
    }
</script>

<template>
    <v-row 
        class="align-center" 
        justify="center"
    >
        <!-- Search input and button - wrapped together -->
         <v-col 
            cols="12" 
            md="8"
            lg="6" 
            class="d-flex justify-center gap-2"
        >
            <!-- Search input -->
            <v-text-field
                v-model="query"
                label="Search movies..."
                placeholder="Type movie title here..."
                class="flex-grow-1"
                outlined
                clearable
                @keyup.enter="onSearch"
            >
            <template #append-inner>
                <v-btn
                    color="primary"
                    outlined
                    class="ml-4"
                    @click="onSearch"
                >
                    Search
                </v-btn>
            </template>
        </v-text-field>  
         </v-col>
    </v-row>
</template>

<style scoped>
</style>

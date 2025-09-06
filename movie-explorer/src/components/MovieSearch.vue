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
    <div class="flex gap-2 mb-4">
        <input
            v-model="query"
            type="text"
            placeholder="Search movies..."
            class="border p-2 rounded flex-1"
            @keyup.enter="onSearch"
        />
        <button @click="onSearch" class="bg-blue-600 text-white px-4 py-2 rounded">
            Search
        </button>
    </div>
</template>

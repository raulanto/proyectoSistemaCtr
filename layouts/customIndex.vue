<script setup lang="ts">
const items = ref([
    {
        label: 'Blog',
        icon: 'i-lucide-book-open',
        to: '/getting-started',

    },
    {
        label: 'Inicio',
        icon: 'i-lucide-database',
        to: '/composables',

    },
    {
        label: 'Iniciar',
        icon: 'i-lucide-box',
        to: '/components',

    },

])

</script>

<template>
    <UNavigationMenu :items="items" class="justify-center" />
    <slot />

</template>

<style scoped>

</style>
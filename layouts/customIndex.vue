<script setup lang="ts">
const items = ref([
    {
        label: 'Blog',
        icon: 'i-lucide-book-open',
        to: '/blog',

    },
    {
        label: 'Inicio',
        icon: 'i-lucide-database',
        to: '/',

    },
    {
        label: 'Iniciar',
        icon: 'i-lucide-box',
        to: '/author/login',

    },

])

</script>

<template>
    <UNavigationMenu :items="items" class="justify-center" />
    <slot />

</template>

<style scoped>

</style>
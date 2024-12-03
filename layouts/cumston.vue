components<script setup lang="ts">
const ui={
    base: 'mx-auto',
    padding: 'px-4 sm:px-6 lg:px-8',
    constrained: 'max-w-7xl  md:max-w-7xl lg:max-w-[100rem] ',
}
</script>

<template>
    <lazy-ui-sidebar/>
    <main class="dark:bg-zinc-900 min-h-svh bg-cover ">
        <UContainer class="pt-[6rem] pb-4" :ui="ui">
            <slot />
        </UContainer>
    </main>
    <lazy-ui-footer-dasborad/>
</template>

<style scoped>

</style>
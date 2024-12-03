<script lang="ts" setup>



import Darkmode from "~/components/ui/darkmode.vue";

const emit = defineEmits(['toggleSidebar']);



</script>

<template>
    <nav
        class="bg-[var(--ui-primary)] text-white border-b border-gray-200 px-4 py-2.5 fixed left-0 right-0 top-0 z-50 dark:bg-neutral-900 dark:border-neutral-700  w-screen "
    >
        <div class="flex flex-wrap justify-between items-center">
            <div class="flex justify-start items-center">
                <div class="text-center">
                    <button
                        id="toggle-sidebar-button"
                        class="p-2 mr-2 text-white rounded-lg cursor-pointer hover:text-white hover:bg-tercero-50 focus:bg-tercero-50 dark:focus:bg-tercero-50 focus:ring-2 focus:ring-tercero-50 dark:focus:ring-tercero-50 "
                        @click="$emit('toggleSidebar')"
                    >
                        <lazy-icons-line></lazy-icons-line>
                    </button>
                </div>
                <img alt="Flowbite Logo" class="mr-3 h-8" src="~/assets/logo.svg"/>
                <NuxtLink class="flex items-center justify-between mr-4" to="/panel" >
<!--                    <img alt="Flowbite Logo" class="mr-3 h-8" src="~/assets/logo.svg"/>-->
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        NutricalPass
                    </span>
                </NuxtLink>
            </div>
            <div class="flex items-center lg:order-2 gap-2 mx-8">
                <darkmode/>
            </div>
        </div>
    </nav>
</template>

<style scoped>

</style>
<script lang="ts" setup>
import {ref} from 'vue'
import NavarDas from "~/components/ui/NavarDas.vue";

const toggleSidebar = () => {
    open.value = !open.value;
}


const items = ref([
    [
        {
            label: 'Citas',
            icon: 'i-heroicons-book-open',
            children: [
                {
                    label: 'Calendario',
                    description: 'Fully styled and customizable components for Nuxt.',
                    icon: 'i-heroicons-home',
                    to:'/'
                },
                {
                    label: 'Consulta',
                    description: 'Learn how to install and configure Nuxt UI in your application.',
                    icon: 'i-heroicons-cloud-arrow-down',
                    to:'/consulta/'
                },
            ]
        },
        {
            label: 'Composables',
            icon: 'i-heroicons-circle-stack',
            children: [
                {
                    label: 'defineShortcuts',
                    icon: 'i-heroicons-document-text',
                    description: 'Define shortcuts for your application.',
                    to: '/composables/define-shortcuts'
                },

            ]
        },
        {
            label: 'Components',
            icon: 'i-heroicons-cube-transparent',
            children: [
                {
                    label: 'Link',
                    icon: 'i-heroicons-document-text',
                    description: 'Use NuxtLink with superpowers.',
                    to: '/components/link'
                },
                {
                    label: 'Modal',
                    icon: 'i-heroicons-document-text',
                    description: 'Display a modal within your application.',
                    to: '/components/modal'
                },

            ]
        }
    ],
    [
        {
            label: 'Perfil',
            icon: 'i-heroicons-cube-transparent',
            children: [
                {
                    label: 'Datos generales',
                    icon: 'i-heroicons-document-text',
                    description: 'Use NuxtLink with superpowers.',
                    to: '/profile/'
                },
                {
                    label: 'Modal',
                    icon: 'i-heroicons-document-text',
                    description: 'Display a modal within your application.',
                    to: '/components/modal'
                },

            ]
        },
        {
            label: 'Salir',
            icon: 'i-heroicons-question-mark-circle',
            to:'author/login'
        },
    ]
])

const open = ref(false)

</script>

<template>
    <!--nav de cerrar o abrir-->
    <navar-das @toggleSidebar="toggleSidebar"/>
    <USlideover  v-model:open="open" side="left" title="Menu" class="max-w-[18rem] ">
        <template #body>
            <UNavigationMenu orientation="vertical" :items="items" class="data-[orientation=vertical]:w-58 "/>
        </template>
    </USlideover>
</template>

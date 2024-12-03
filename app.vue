<template>
    <UApp :toaster="true">
        <NuxtLayout>
            <UContextMenu :items>
                <NuxtPage  />
            </UContextMenu>
        </NuxtLayout>
    </UApp>

</template>


<script setup lang="ts">
const congin ={"isTrusted":true,"_vts":1727195331824}
useHead({
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { key: 'theme-color', name: 'theme-color' }
    ],
    link: [
        { rel: 'icon', href: 'logo.svg' }
    ],
    htmlAttrs: {
        lang: 'en'
    }
});

const title = 'SistemasM';
const description = 'Sistema Medico';

useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage: 'https://dashboard-template.nuxt.dev/social-card.png',
    // twitterImage: 'https://dashboard-template.nuxt.dev/social-card.png',
    // twitterCard: 'summary_large_image'
});
const toast = useToast()


const items = ref([
    [
        {
            label: 'Appearance',
            children: [
                {
                    label: 'System',
                    icon: 'i-lucide-monitor'
                },
                {
                    label: 'Light',
                    icon: 'i-lucide-sun'
                },
                {
                    label: 'Dark',
                    icon: 'i-lucide-moon'
                }
            ]
        }
    ],
    [
        {
            label: 'Show Sidebar',
            kbds: ['meta', 's']
        },
        {
            label: 'Show Toolbar',
            kbds: ['shift', 'meta', 'd']
        },
        {
            label: 'Collapse Pinned Tabs',
            disabled: true
        }
    ],
    [
        {
            label: 'Refresh the Page'
        },
        {
            label: 'Clear Cookies and Refresh'
        },
        {
            label: 'Clear Cache and Refresh'
        },
        {
            type: 'separator'
        },
        {
            label: 'Developer',
            children: [
                [
                    {
                        label: 'View Source',
                        kbds: ['meta', 'shift', 'u']
                    },
                    {
                        label: 'Developer Tools',
                        kbds: ['option', 'meta', 'i']
                    },
                    {
                        label: 'Inspect Elements',
                        kbds: ['option', 'meta', 'c']
                    }
                ],
                [
                    {
                        label: 'JavaScript Console',
                        kbds: ['option', 'meta', 'j']
                    }
                ]
            ]
        }
    ]
])

</script>

<style>
@import "tailwindcss";
@import "@nuxt/ui";

</style>


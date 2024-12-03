<script setup lang="ts">
const items = ref([
    [
        {
            label: 'Benjamin',
            avatar: {
                src: 'https://github.com/benjamincanac.png'
            },
            type: 'label'
        }
    ],
    [
        {
            label: 'Profile',
            icon: 'i-heroicons-user'
        },
        {
            label: 'Billing',
            icon: 'i-heroicons-credit-card'
        },
        {
            label: 'Settings',
            icon: 'i-heroicons-cog',
            kbds: [',']
        },
        {
            label: 'Keyboard shortcuts',
            icon: 'i-heroicons-computer-desktop'
        }
    ],
    [
        {
            label: 'Team',
            icon: 'i-heroicons-users'
        },
        {
            label: 'Invite users',
            icon: 'i-heroicons-user-plus',
            children: [
                [
                    {
                        label: 'Email',
                        icon: 'i-heroicons-envelope'
                    },
                    {
                        label: 'Message',
                        icon: 'i-heroicons-chat-bubble-left'
                    }
                ],
                [
                    {
                        label: 'More',
                        icon: 'i-heroicons-plus-circle'
                    }
                ]
            ]
        },
        {
            label: 'New team',
            icon: 'i-heroicons-plus',
            kbds: ['meta', 'n']
        }
    ],
    [
        {
            label: 'GitHub',
            icon: 'i-simple-icons-github',
            to: 'https://github.com/nuxt/ui',
            target: '_blank'
        },
        {
            label: 'Support',
            icon: 'i-heroicons-lifebuoy',
            to: '/components/dropdown-menu'
        },
        {
            label: 'API',
            icon: 'i-heroicons-cloud',
            disabled: true
        }
    ],
    [
        {
            label: 'Logout',
            icon: 'i-heroicons-arrow-right-on-rectangle',
            kbds: ['shift', 'meta', 'q']
        }
    ]
])
</script>

<template>
    <UDropdownMenu :items="items" class="w-48">
        <UButton icon="i-heroicons-bars-3" color="neutral" variant="outline" />
    </UDropdownMenu>
</template>



<style scoped>

</style>
<script setup lang="ts">
const show = ref(false)
const password = ref('password')
const email = ref('')
</script>

<template>
    <USeparator />
    <UForm class="space-y-4 md:space-y-6" action="#">
        <UFormField label="Email"  required>
            <UInput v-model="email" placeholder="Correo electronico" icon="i-heroicons-at-symbol" class="w-full"/>
        </UFormField>

        <UFormField label="Contraseña">
            <UInput
                class="w-full"
                v-model="password"
                placeholder="Password"
                :type="show ? 'text' : 'password'"
                :ui="{ trailing: 'pr-0.5' }"
            >
                <template #trailing>
                    <UButton
                        color="neutral"
                        variant="link"
                        size="sm"
                        :icon="show ? 'i-heroicons-eye-slash' : 'i-heroicons-eye'"
                        aria-label="show ? 'Hide password' : 'Show password'"
                        :aria-pressed="show"
                        aria-controls="password"
                        @click="show = !show"
                    />
                </template>
            </UInput>
        </UFormField>

        <!--            REcueprar contraseña            -->
        <!--                        <div class="flex items-center justify-between">-->
        <!--                            <div class="flex items-start">-->
        <!--                                <div class="flex items-center h-5">-->
        <!--                                    <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">-->
        <!--                                </div>-->
        <!--                                <div class="ml-3 text-sm">-->
        <!--                                    <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>-->
        <!--                                </div>-->
        <!--                            </div>-->
        <!--                            <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>-->
        <!--                        </div>-->
        <NuxtLink to="/">
            <UButton label="Iniciar" block/>

        </NuxtLink>
        <!--                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">-->
        <!--                            Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>-->
        <!--                        </p>-->
    </UForm>
    <USeparator />
</template>

<style scoped>

</style>
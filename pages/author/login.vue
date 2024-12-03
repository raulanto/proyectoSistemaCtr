<script setup lang="ts">

</script>

<template>
    <section class="fondo bg-cover object-cover bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
<!--    Encabezado        -->
            <div class="bg-white rounded-full px-8 py-2">
                <a class="bg-white rounded-full flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img class="w-14 h-14 mr-2" src="~/assets/logo.svg" alt="logo">
                    SistemaMe
                </a>
            </div>

<!--    Formulario        -->
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Ingresar
                    </h1>
                    <author-form-login/>

                </div>
            </div>
<!--        Fin formulario    -->
        </div>
    </section>
</template>

<style scoped>
.fondo{
    background-color: #ffffff;
    opacity: 1;
    background-image:  linear-gradient(#eee8fa 1px, transparent 1px), linear-gradient(to right, #f2e8fa 1px, #ffffff 1px);
    background-size: 20px 20px;
}
</style>
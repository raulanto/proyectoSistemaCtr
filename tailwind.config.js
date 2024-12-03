/** @type {import('tailwindcss').Config} */

export default {
    darkMode: 'class',
    content: [
        "./components/**/*.{json,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{json,ts}",
        "./app.vue",
        "./error.vue",
        "./node_modules/flowbite/**/*.{json,ts}",
        "./node_modules/flowbite-vue/**/*.{json,jsx,ts,tsx,vue}",
        "./nuxt.config.{json,ts}",
    ],

}


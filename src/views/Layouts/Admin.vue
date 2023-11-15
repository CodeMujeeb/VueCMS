<script setup>
    import Header from '../../components/Header.vue'
</script>

<template>
    <v-app-bar title="Vue CMS" class="bg-teal-darken-3" density="compact"></v-app-bar>
    <Header></Header>
    <slot />
</template>
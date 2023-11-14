<script setup>
import { RouterView } from 'vue-router'
import Header from '../src/components/Header.vue'
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Vue CMS" color="secondary" density="compact"></v-app-bar>
    <Header></Header>
    <v-main class="d-flex align-center justify-center" style="min-height: 300px">
      <RouterView />
    </v-main>
  </v-layout>
</template>

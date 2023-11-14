<script setup>
import { RouterView } from 'vue-router'
import Header from '../src/components/Header.vue'
</script>

<template>
  <v-layout>
    <v-app-bar title="Vue CMS" class="bg-teal-darken-3" density="compact"></v-app-bar>
    <Header></Header>
    <v-main>
      <RouterView />
    </v-main>
  </v-layout>
</template>

<script setup>
import { shallowRef, provide } from 'vue';
import { RouterView } from 'vue-router'
import router from  './router/index'
import layouts from  './views/Layouts/layouts'

const layout = shallowRef();

router.afterEach((to) => {
  layout.value = layouts[to.meta.layout];
  
});
provide('app:layout', layout);
</script>

<template>
  <v-layout>
      <component :is="layout">
        <v-container class="mt-5">
          <router-view></router-view>
        </v-container>
      </component>
  </v-layout>
</template>

<style>
body{
  place-items: initial!important;
}
</style>
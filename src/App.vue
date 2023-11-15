<script setup>
import { shallowRef, provide } from 'vue';
import { RouterView } from 'vue-router'
import router from  './router/index'
import layouts from  './views/Layouts/layouts'

const layout = shallowRef();

router.afterEach((to) => {
  layout.value = layouts[to.meta.layout];
  console.log("to", to)
  console.log("layouts", layouts[to.meta.layout])
  console.log("layout", layout)
});
provide('app:layout', layout);
</script>

<template>
  <v-layout>
      <component :is="layout">
         <v-main>
        <RouterView />
      </v-main>
      </component>
  </v-layout>
</template>

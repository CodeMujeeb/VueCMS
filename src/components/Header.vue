<script setup>
import { ref } from 'vue'

const drawer = ref(true)
const rail = ref(false)

</script>

<template>
  <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
      title="Abdul Mujeeb"
      nav
    >
      <template v-slot:append>
        <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-view-dashboard-outline" title="Dashboard" value="dashboard"></v-list-item>
      <v-list-group value="Administration">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-outline"
            title="Administration"
          ></v-list-item>
        </template>
        <v-list-item
          prepend-icon="mdi-account-group-outline"
          value="users"
        >
        <router-link to="/users">Users</router-link>
      </v-list-item>
        <v-list-item
          prepend-icon="mdi mdi-lock-check-outline"
          title="Roles and Permissions"
          value="roles"
        ></v-list-item>
      </v-list-group>
      <v-list-item prepend-icon="mdi mdi-camera-outline" value="Products">
        <router-link to="/products">Products</router-link>
      </v-list-item>
      <v-list-item prepend-icon="mdi mdi-archive-outline" title="Categories" value="Categories"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

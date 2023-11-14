<script setup>
import { ref } from 'vue'

const drawer = ref(true)
const rail = ref(false)

</script>

<template>
  <v-navigation-drawer v-model="drawer" :rail="rail" class="bg-teal-darken-1"
        theme="dark"
        permanent
        @click="rail = false">
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

      <router-link to="/users" class="link">
        <v-list-item
          prepend-icon="mdi-account-group-outline"
          value="users"
        >
        Users </v-list-item>
      </router-link>
      
      <router-link to="/roles" class="link">
        <v-list-item
          prepend-icon="mdi mdi-lock-check-outline"
          title="Roles and Permissions"
          value="roles"
        ></v-list-item>
      </router-link>
      </v-list-group>

      <router-link to="/products" class="link">
        <v-list-item prepend-icon="mdi mdi-camera-outline" value="Products">
        Products
        </v-list-item>
      </router-link>
      
      <router-link to="/categories" class="link">
        <v-list-item prepend-icon="mdi mdi-archive-outline" title="Categories" value="Categories"></v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.link {
  color:white;
  font-size: 0.8125rem;
  background: transparent;
}

.link:hover {
  color:white;
}
</style>
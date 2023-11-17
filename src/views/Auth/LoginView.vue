<template>
  <v-card class="mx-auto" style="max-width: 500px">
    <v-toolbar color="teal-darken-3" cards dark flat>
      <v-btn icon>
        <router-link to="/">
          <v-icon>mdi-arrow-left</v-icon>
        </router-link>
      </v-btn>
      <v-card-title class="text-h6 font-weight-regular"> Sign In </v-card-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-form ref="form" v-model="isValid" class="pa-4 pt-6" @submit.prevent="handleLogin">
      <div class="mt-3 mb-4">
        <BaseInput
          v-model="email"
          label="Email address"
          :rules="[rules.email]"
          :inputType="'email'"
        />
      </div>

      <div class="mb-3">
        <BaseInput
          v-model="password"
          label="Password"
          :rules="[rules.password]"
          :inputType="'password'"
        />
      </div>

      <v-divider></v-divider>

      <v-btn :loading="isLoading" variant="flat" block color="teal" :type="'submit'"> Login </v-btn>
    </v-form>
  </v-card>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const form = reactive({
      email: null,
      password: null,
      isValid: false,
      isLoading: false,
      rules: {
        email: (v) => !!(v || '').match(/@/) || 'Please enter a valid email',
        length: (len) => (v) =>
          (v || '').length >= len || `Invalid character length, required ${len}`,
        password: (v) =>
          !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
          'Password must contain an upper case letter, a numeric character, and a special character',
        required: (v) => !!v || 'This field is required'
      }
    })

    function handleLogin() {
      if (form.isValid) {
        console.log(form.isValid, form.email, form.password)
      } else {
        return false
      }
    }

    return { ...toRefs(form), handleLogin }
  }
}
</script>

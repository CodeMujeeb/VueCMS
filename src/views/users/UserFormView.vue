<template>
  <div class="d-flex justify-center align-center">
    <v-card style="width: 100%">
      <v-toolbar color="teal-darken-3" cards dark flat>
        <v-btn icon>
          <router-link to="/">
            <v-icon>mdi-arrow-left</v-icon>
          </router-link>
        </v-btn>
        <v-card-title class="text-h6 font-weight-regular"> Create User</v-card-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-form ref="form" v-model="is_valid" class="pa-4 pt-6" @submit.prevent="onSubmit">
        <div class="mt-3 mb-4">
          <BaseInput
            v-model="first_name"
            label="First Name"
            :dynamicAttrs="{
              rules: [rules.required, rules.maxLength(60), rules.length(4)]
            }"
          />
        </div>

        <div class="mt-3 mb-4">
          <BaseInput
            v-model="last_name"
            label="Last Name"
            :dynamicAttrs="{
              rules: [rules.required, rules.maxLength(60), rules.length(4)]
            }"
          />
        </div>

        <div class="mt-3 mb-4">
          <BaseInput
            label="Email"
            :dynamicAttrs="{
              readonly: true,
              type: 'email'
            }"
          />
        </div>

        <div class="mt-3 mb-4">
          <BaseSelect
            v-model="status"
            label="Status"
            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
            :dynamicAttrs="{
              rules: [rules.required]
            }"
          />
        </div>

        <div class="mt-5">
          <v-btn :loading="loading" variant="flat" color="teal" :type="'submit'"> Submit </v-btn>
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useValidation } from '../../composables/ValidationComposition'
export default {
  setup() {
    const form = reactive({
      email: null,
      first_name: null,
      last_name: null,
      status: null,
      is_valid: false,
      loading: false
    })

    function onSubmit() {
      if (form.is_valid) {
        console.log(form)
      } else {
        return false
      }
    }

    const validation = useValidation()

    const rules = validation.getRules()

    return { ...toRefs(form), onSubmit, rules }
  }
}
</script>

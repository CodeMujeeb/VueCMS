<template>
  <label v-if="label">{{ label }}</label>
  <v-text-field
    v-model="input"
    variant="filled"
    color="teal-darken-3"
    :label="label"
    :rules="rules"
    @input="$emit('update:modelValue', input)"
    v-bind="dynamicAttrs"
  >
  </v-text-field>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    rules: {
      type: Array,
      default: []
    },
    dynamicAttrs: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, context) {
    const input = ref(null)
    return { input }
  }
}
</script>

<template>
  <label v-if="label">{{ label }}</label>
  <v-select
    v-model="input"
    :items="items"
    variant="solo"
    @change="$emit('update:modelValue', input)"
    v-bind="dynamicAttrs"
  ></v-select>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: []
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    dynamicAttrs: {
      type: Object,
      required: true
    }
  },
  setup() {
    const input = ref('')
    return { input }
  }
}
</script>

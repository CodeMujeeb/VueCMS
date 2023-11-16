<template>
    <label v-if="label">{{ label }}</label>
    <input
        :value="modelValue"
        :placeholder="label"
        @input="$emit('update:modelValue', $event.target.value)"
        class="field"
    >
    <!-- <v-text-field
      :value="modelValue"
      variant="filled"
      color="teal-darken-3"
      :label="label"
      class="field"
    ></v-text-field> -->
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
        type: [String, Number],
        default: ''
    }
  }
}
</script>
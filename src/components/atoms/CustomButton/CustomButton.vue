<template>
  <button :class="buttonClasses" @click="$emit('click')">
    <div v-if="icon" class="button__icon">
      <img :src="icon" alt="icon" />
    </div>
    <span v-if="label" class="button__label">{{ label }}</span>
  </button>
</template>
<script>
export default {
  name: "CustomButton",
  props: {
    label: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
    },
    color: {
      type: String,
      default: "",
      validator(value) {
        return ["", "prime", "secondary"].includes(value);
      },
    },
  },
  computed: {
    buttonClasses() {
      return {
        button: true,
        prime: this.color === "prime",
        secondary: this.color === "secondary",
      };
    },
  },
};
</script>
<style scoped src="./styles.css"></style>

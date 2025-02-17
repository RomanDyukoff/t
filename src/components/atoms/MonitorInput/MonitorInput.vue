<template>
  <div :class="inputClasses">
    <input class="read-input" type="text" :value="`₽ ${inputValue}`" readonly />
  </div>
</template>
<script>
export default {
  name: "MonitorInput",
  props: {
    monitoring: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      inputValue: this.value,
      previousValue: null,
      state: "normal",
    };
  },
  computed: {
    inputClasses() {
      return this.monitoring ? {
        read: true,
        normal: this.state === "normal",
        increased: this.state === "increased",
        decreased: this.state === "decreased"
      } : { read: true };
    },
  },
  watch: {
    value(newValue) {
      if (this.monitoring) {
        this.state = !this.previousValue ?
          "normal" :
          (this.previousValue > newValue ?
            "decreased" :
            "increased"
          );
        this.previousValue = newValue;
      }

      this.inputValue = newValue;
    },
  },
  mounted() {
    this.previousValue = this.value;
  },
};
</script>
<style scoped src="./styles.css"></style>

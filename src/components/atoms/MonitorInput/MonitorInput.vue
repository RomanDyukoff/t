<template>
  <div :class="inputClasses">
    <input class="read-input" type="text" :value="inputValue" readonly />
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
      type: String,
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
      if (this.monitoring) {
        return {
          read: true,
          normal: this.state === "normal",
          increased: this.state === "increased",
          decreased: this.state === "decreased",
        };
      } else {
        return { read: true };
      }
    },
  },
  watch: {
    value(newValue) {
      if (!this.monitoring) return;
      const numericValue = parseFloat(newValue.replace(/[^0-9.-]+/g, ""));
      if (isNaN(numericValue)) {
        this.state = "normal";
      } else {
        this.state =
          this.previousValue > numericValue
            ? "decreased"
            : this.previousValue < numericValue
            ? "increased"
            : "normal";
        this.previousValue = numericValue;
      }
      this.inputValue = newValue;
    },
  },
  mounted() {
    this.previousValue = parseFloat(this.value.replace(/[^0-9.-]+/g, ""));
  },
};
</script>
<style scoped src="./styles.css"></style>

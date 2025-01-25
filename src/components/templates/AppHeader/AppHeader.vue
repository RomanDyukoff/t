<template>
  <header class="header">
    <HeaderBox />
  </header>
</template>
<script>
import { HeaderBox } from "@/components";

export default {
  name: "AppHeader",

  components: {
    HeaderBox,
  },
};
</script>
<style scoped src="./styles.css"></style>

<template>
  <div>
    <AppHeader />
    <MainBox />
  </div>
</template>
<script>
import { AppHeader, MainBox } from "@/components";

export default {
  name: "HomePage",
  components: {
    AppHeader,
    MainBox,
  },
};
</script>
<style scoped src="./styles.css"></style>

<template>
  <div class="main-box">
    <div class="container">
      <div class="main-box__wrapper">
        <div class="main-accordion">
          <AccordionList />
        </div>
        <div class="main-cart"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { AccordionList } from "@/components";

export default {
  name: "MainBox",
  components: {
    AccordionList,
  },
};
</script>
<style scoped src="./styles.css"></style>

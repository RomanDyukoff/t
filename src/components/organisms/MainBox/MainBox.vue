<template>
  <div class="main-box">
    <div class="main-box__wrapper">
      <div class="main-accordion">
        <AccordionList />
      </div>
      <div class="main-cart">
        <CartList />
      </div>
    </div>
  </div>
</template>
<script>
import { AccordionList, CartList } from "@/components";

export default {
  name: "MainBox",
  components: {
    AccordionList,
    CartList,
  },
};
</script>
<style scoped src="./styles.css"></style>

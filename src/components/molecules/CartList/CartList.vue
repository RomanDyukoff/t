<template>
  <div class="cart">
    <CartItem />

    <div class="price">
      <span>Общая стоимость:</span>
      <span>3000</span>
    </div>
  </div>
</template>
<script>
import CartItem from "../CartItem/CartItem.vue";

export default {
  name: "CartList",
  components: {
    CartItem,
  },
};
</script>
<style scoped src="./styles.css"></style>

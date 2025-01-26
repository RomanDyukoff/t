<template>
  <div class="cart">
    <CartItem v-for="(item, index) in carts" :key="index" v-bind="item" />
    <div class="price">
      <span>Общая стоимость:</span>
      <span>{{ formattedTotalPrice }}</span>
    </div>
  </div>
</template>
<script>
import CartItem from "../CartItem/CartItem.vue";
import { mapGetters } from "vuex";
export default {
  name: "CartList",
  components: {
    CartItem,
  },
  computed: {
    ...mapGetters("cart", ["carts", "cartTotalPrice"]),
    formattedTotalPrice() {
      return `₽ ${this.cartTotalPrice.toFixed(2)}`;
    },
  },
};
</script>
<style scoped src="./styles.css"></style>

<template>
  <div
    :id="`${id}`"
    :class="`details-content ${quantity === 0 ? 'disable' : ''}`"
  >
    <p class="details-conten__text">{{ name }} {{ `(${quantity})` }}</p>
    <MonitorInput :value="price" />
    <CustomButton
      :icon="cartIcon"
      label="Купить"
      color="prime"
      @click="handelProduct"
    />
  </div>
</template>
<script>
import rightArrow from "@/assets/svg/right-arrow.svg";
import cartIcon from "@/assets/svg/cart-icon.svg";
import { CustomButton, MonitorInput } from "@/components";
import { mapActions } from "vuex";

export default {
  name: "ItemContent",
  components: {
    CustomButton,
    MonitorInput,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapActions("cart", ["addToCart"]),
    handelProduct() {
      if (this.quantity > 0) {
        this.addToCart({
          category: this.category,
          item: {
            id: this.id,
            name: this.name,
            quantity: this.quantity,
            price: this.price,
          },
        });
      }
    },
  },

  data() {
    return {
      rightArrow,
      cartIcon,
    };
  },
};
</script>
<style scoped src="./styles.css"></style>

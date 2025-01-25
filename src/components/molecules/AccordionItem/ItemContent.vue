<template>
  <div :id="`${propId}`" class="details-content">
    <p class="details-conten__text">{{ propName }} {{ `(${propQuantity})` }}</p>
    <MonitorInput :value="propPrice" />
    <CustomButton :icon="cartIcon" label="Купить" color="prime" />
  </div>
</template>
<script>
import rightArrow from "@/assets/svg/right-arrow.svg";
import cartIcon from "@/assets/svg/cart-icon.svg";
import { CustomButton, MonitorInput } from "@/components";
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
  },
  data() {
    const {
      id: propId,
      name: propName,
      price: propPrice,
      quantity: propQuantity,
    } = this;
    return {
      propId,
      propName,
      propPrice,
      propQuantity,
      rightArrow,
      cartIcon,
    };
  },
};
</script>
<style scoped src="./styles.css"></style>

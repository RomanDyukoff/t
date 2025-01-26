<template>
  <div class="cart-item" :id="id">
    <span class="cart-item__title">{{ category }}</span>
    <div class="item-content">
      <p class="item-content__title">
        {{ name }}
      </p>
      <span>Количество: {{ quantity }}</span>
      <MonitorInput :value="price" />
      <CustomButton
        :icon="deleteIcon"
        color="secondary"
        @click="handleRemove"
      />
    </div>
  </div>
</template>
<script>
import deleteIcon from "@/assets/svg/delete-icon.svg";
import { CustomButton, MonitorInput } from "@/components";
import { mapActions } from "vuex";
export default {
  name: "CartItem",
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
    ...mapActions("cart", ["removeFromCart"]),
    handleRemove() {
      this.removeFromCart({
        id: this.id,
        quantity: this.quantity,
      });
    },
  },

  data() {
    return { deleteIcon };
  },
};
</script>
<style scoped src="./styles.css"></style>

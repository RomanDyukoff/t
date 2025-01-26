<template>
  <div class="cart-item">
    <span class="cart-item__title">Раздел</span>
    <div class="item-content">
      <p class="item-content__title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
        consequatur.
      </p>
      <MonitorInput value="1" />
      <MonitorInput value="$ 18" />
      <CustomButton :icon="deleteIcon" color="secondary" />
    </div>
  </div>
</template>
<script>
import deleteIcon from "@/assets/svg/delete-icon.svg";
import { CustomButton, MonitorInput } from "@/components";

export default {
  name: "CartItem",
  components: {
    CustomButton,
    MonitorInput,
  },
  data() {
    return { deleteIcon };
  },
};
</script>
<style scoped src="./styles.css"></style>

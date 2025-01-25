<template>
  <details
    :id="`${propId}`"
    class="details"
    name="list"
    :style="`--i: ${propId}`"
  >
    <summary class="details__summary">
      <div class="details__icon">
        <img :src="rightArrow" alt="" />
      </div>
      {{ propName }}
    </summary>
    <ItemContent v-for="el of propProducts" :key="el.id" v-bind="el" />
  </details>
</template>
<script>
import rightArrow from "@/assets/svg/right-arrow.svg";
import cartIcon from "@/assets/svg/cart-icon.svg";
import ItemContent from "./ItemContent.vue";

export default {
  name: "AccordionItem",

  components: {
    ItemContent,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
  },
  data() {
    const { id: propId, name: propName, products: propProducts } = this;

    return { rightArrow, cartIcon, propId, propName, propProducts };
  },
};
</script>
<style scoped src="./styles.css"></style>

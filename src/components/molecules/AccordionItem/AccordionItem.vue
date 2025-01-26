<template>
  <details :id="`${id}`" class="details" name="list" :style="`--i: ${id}`">
    <summary class="details__summary">
      <div class="details__icon">
        <img :src="rightArrow" alt="" />
      </div>
      {{ name }}
    </summary>
    <ItemContent
      v-for="el of products"
      :key="el.id"
      :category="name"
      v-bind="el"
    />
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
    return { rightArrow, cartIcon };
  },
};
</script>
<style scoped src="./styles.css"></style>

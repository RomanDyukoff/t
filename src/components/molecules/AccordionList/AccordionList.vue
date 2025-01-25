<template>
  <div class="accordion">
    <AccordionItem v-for="item of groupedGoods" :key="item.id" v-bind="item" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import AccordionItem from "../AccordionItem/AccordionItem.vue";

export default {
  name: "AccordionList",
  components: {
    AccordionItem,
  },
  computed: {
    ...mapGetters("product", ["groupedGoods"]),
  },
  methods: {},
  created() {
    this.$store.dispatch("product/loadGoods");
    this.$store.dispatch("product/loadNames");
  },
};
</script>
<style scoped src="./styles.css"></style>

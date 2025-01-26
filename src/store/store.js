import Vue from "vue";
import Vuex from "vuex";
import { productState, cartState } from "./module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    product: productState,
    cart: cartState,
  },
});

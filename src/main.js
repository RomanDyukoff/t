import Vue from "vue";
import App from "./App.vue";
import store from "@/store/store";
import "@/assets/styles/global.css";

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");

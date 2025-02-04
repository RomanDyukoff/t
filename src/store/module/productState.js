import dataJson from "@/assets/json/data.json";
import namesJson from "@/assets/json/names.json";
import { fetchData } from "@/api";

const getRandomExchangeRate = () => Math.floor(Math.random() * 60) + 20;

const state = {
  goods: [],
  names: {},
  exchangeRate: 50,
};

const mutations = {
  setGoods(state, goods) {
    state.goods = goods;
  },
  setNames(state, names) {
    state.names = names;
  },
  setExchangeRate(state, rate) {
    state.exchangeRate = rate;
  },
  updateQuantity(state, { id, quantityChange }) {
    const product = state.goods.find((good) => good.T === id);
    if (product) {
      product.P += quantityChange;
    }
  },
};

const actions = {
  async loadGoods({ commit }) {
    try {
      const { Value: value } = await fetchData(dataJson);
      commit("setGoods", value.Goods);
    } catch (error) {
      console.error(error.message);
    }
  },
  async loadNames({ commit }) {
    try {
      const data = await fetchData(namesJson);
      commit("setNames", data);
    } catch (error) {
      console.error(error.message);
    }
  },
  async updateExchangeRate({ commit, dispatch }) {
    try {
      const newRate = getRandomExchangeRate();
      commit("setExchangeRate", newRate);
      dispatch("cart/updateCartPrices", null, { root: true });
      await dispatch("product/loadGoods", null, { root: true });
    } catch (error) {
      console.error("Error updating data:", error.message);
    }
  },
  updateProductQuantity({ commit }, payload) {
    commit("updateQuantity", payload);
  },
};

const getters = {
  exchangeRate: (state) => state.exchangeRate,
  groupedGoods(state) {
    const groups = {};

    state.goods.forEach((good) => {
      const groupId = good.G;
      const group = state.names[groupId];

      if (!group) {
        console.warn(`Группа с идентификаторо ${groupId} не найдена`, good);
        return;
      }

      if (!groups[groupId]) {
        groups[groupId] = {
          id: groupId,
          name: group.G,
          products: [],
        };
      }

      if (!group.B || !group.B[good.T]) {
        console.warn(
          `Товар с идентификаторомd ${good.T} не найден в ${groupId} `,
          good
        );
        return;
      }

      const product = {
        id: good.T,
        name: group.B[good.T].N,
        quantity: good.P,
        price: `₽ ${good.C * state.exchangeRate}`,
      };

      groups[groupId].products.push(product);
    });
    return Object.values(groups);
  },
};

const productState = { namespaced: true, state, mutations, actions, getters };

export { productState };

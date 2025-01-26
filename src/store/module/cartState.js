// const parsePrice = (priceString) => {
//   const numericValue = parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
//   return isNaN(numericValue) ? 0 : numericValue;
// };

// const formatPrice = (price) => `₽ ${price.toFixed(2)}`;

const state = {
  carts: [],
};

const mutations = {
  ADD_TO_CART(state, { category, item }) {
    const productInCart = state.carts.find(
      (cartItem) => cartItem.id === item.id
    );

    if (productInCart) {
      productInCart.quantity += 1;
    } else {
      state.carts.push({
        ...item,
        category,
        quantity: 1,
      });
    }
  },
  REMOVE_FROM_CART(state, itemId) {
    const productInCart = state.carts.find(
      (cartItem) => cartItem.id === itemId
    );

    if (productInCart) {
      if (productInCart.quantity > 1) {
        productInCart.quantity -= 1;
      } else {
        state.carts = state.carts.filter((cartItem) => cartItem.id !== itemId);
      }
    }
  },
};

const actions = {
  addToCart({ commit }, { category, item }) {
    commit("ADD_TO_CART", { category, item });
  },
  removeFromCart({ commit }, itemId) {
    commit("REMOVE_FROM_CART", itemId);
  },
};

const getters = {
  carts: (state) => state.carts,
};

const cartState = { namespaced: true, state, mutations, actions, getters };

export { cartState };

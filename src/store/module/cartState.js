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
  addToCart({ commit, dispatch }, { category, item }) {
    commit("ADD_TO_CART", { category, item });
    dispatch(
      "product/updateProductQuantity",
      { id: item.id, quantityChange: -1 },
      { root: true }
    );
  },
  removeFromCart({ commit, dispatch }, item) {
    commit("REMOVE_FROM_CART", item.id);
    dispatch(
      "product/updateProductQuantity",
      { id: item.id, quantityChange: 1 },
      { root: true }
    );
  },
};

const getters = {
  carts: (state) => state.carts,
  cartTotalPrice: (state) =>
    state.carts.reduce((total, item) => {
      const productPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
      const itemTotalPrice = productPrice * item.quantity;
      return total + itemTotalPrice;
    }, 0),
};

const cartState = { namespaced: true, state, mutations, actions, getters };

export { cartState };

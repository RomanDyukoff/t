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
  UPDATE_CART_PRICES(state, { goods, exchangeRate }) {
    state.carts.forEach((cartItem) => {
      const product = goods.find((good) => good.T === cartItem.id);
      if (product) {
        cartItem.price = `₽ ${product.C * exchangeRate}`;
      }
    });
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
  updateCartPrices({ commit, rootState }) {
    commit("UPDATE_CART_PRICES", {
      goods: rootState.product.goods,
      exchangeRate: rootState.product.exchangeRate,
    });
  },
};

const getters = {
  carts: (state) => state.carts,
  cartTotalPrice: (state) => {
    const res = state.carts.reduce((total, item) => {
      const productPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
      const itemTotalPrice = productPrice * item.quantity;
      return total + itemTotalPrice;
    }, 0);

    return res.toLocaleString("ru-RU", {
      style: "currency",
      currency: "RUB",
    });
  },
};

const cartState = { namespaced: true, state, mutations, actions, getters };

export { cartState };

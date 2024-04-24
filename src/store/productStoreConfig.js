const productStoreConfig = {
  state: {
    products: [],
    product: null,
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_PRODUCT(state, product) {
      state.product = product
    },
    ADD_PRODUCT(state, product) {
      state.products.push(product);
    },
    UPDATE_PRODUCT(state, product) {
      const index = state.products.findIndex((p) => p.id === product.id);
      if (index !== -1) {
        state.products.splice(index, 1, product);
      }
    },
    DELETE_PRODUCT(state, productId) {
      const index = state.products.findIndex((p) => p.id === productId);
      if (index !== -1) {
        state.products.splice(index, 1);
      }
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      const products = [
        { id: 1, name: "Product 1", description: "This is product 1" },
        { id: 2, name: "Product 2", description: "This is product 2" },
        { id: 3, name: "Product 3", description: "This is product 3" },
      ];
      commit("SET_PRODUCTS", products);
    },
    async fetchProduct({ commit, state }, id) {
      const product = state.products.find(product => product.id === id);
      commit('SET_PRODUCT', product)
    },
    addProduct({ commit }, product) {
      commit("ADD_PRODUCT", product);
    },
    updateProduct({ commit }, product) {
      commit("UPDATE_PRODUCT", product);
    },
    deleteProduct({ commit }, productId) {
      commit("DELETE_PRODUCT", productId);
    },
  },
};

export default productStoreConfig;

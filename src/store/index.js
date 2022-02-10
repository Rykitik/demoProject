import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    isViewMenu: true,
    isViewAuth: false
  },
  mutations: {
    changeViewMenu(state) {
      state.isViewMenu = !state.isViewMenu;
    },
    changeViewAuth(state) {
      state.isViewAuth = !state.isViewAuth;
    }
  },
  actions: {},
  modules: {},
  plugins: []
});

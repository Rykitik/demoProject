import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    orders: [],
    users: [
      {
        id: 0,
        login: "admin",
        password: "admin",
        role: 1
      }
    ]
  },
  mutations: {
    addOrder(state, order) {
      state.orders.push(order);
    },
    addUser(state, { login, password }) {
      let lastID = state.users.length;
      state.users.push({
        id: lastID,
        login: login,
        password: password,
        role: 0
      });
    }
  },
  actions: {}
});

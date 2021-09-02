import Vue from 'vue';
import Vuex, { StoreOptions } from "vuex";
import { RootState, state } from "@/store/state";
import { mutations } from "@/store/mutations";
import { actions } from "@/store/actions";

// import getters from './getters.ts';
// import mutations from './mutations.js';
// import actions from './actions.ts';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: state,
  mutations: mutations,
  actions: actions,
};

export default new Vuex.Store(store);

// export default new Vuex.Store({
  // strict: process.env.NODE_ENV !== 'production',
// ,
  // state: {
  //   news: [],
  //   ask: [],
  //   jobs: [],
  //   user: {},
  //   item: {},
  //   list: []
  // },
  // getters,
  // mutations,
  // actions,
// })

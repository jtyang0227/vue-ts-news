import { RootState } from "@/store/state";
import { NewsItem } from "@/api";

enum MutationsTypes {
  SET_NEWS = "SET_NEWS",
  SET_ASK = "SET_ASK",
  SET_JOBS = "SET_JOBS"
}


const mutations = {
  [MutationsTypes.SET_NEWS](state: RootState, news: NewsItem[]) {
    state.news = news;
  },
  // [MutationsTypes.SET_ASK](state: RootState, ask: NewsItem[]) {
  //   state.ask = ask;
  // },
  // [MutationsTypes.SET_JOBS](state: RootState, jobs: NewsItem[]) {
  //   state.jobs = jobs;
  // },
};

type Mutations = typeof mutations;

export { MutationsTypes, mutations, Mutations };
// export default {
//   SET_NEWS(state, news) {
//     state.news = news;
//   },
//   SET_ASK(state, ask) {
//     state.ask = ask;
//   },
//   SET_JOBS(state, jobs) {
//     state.jobs = jobs;
//   },
//   SET_USER(state, user) {
//     state.user = user;
//   },
//   SET_ITEM(state, item) {
//     state.item = item;
//   },
//   SET_LIST(state, list) {
//     state.list = list;
//   },
// }
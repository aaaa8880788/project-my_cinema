import { createStore } from "vuex";
import type { Store } from "vuex";
import { useStore as useVuexStore } from "vuex";
import type { IRootState, IStoreType } from "./type";

import login from "./login";
import home from "./home";

// 创建一个新的 store 实例
const store = createStore<IRootState>({
  state() {
    return {};
  },
  mutations: {},
  modules: {
    login,
    home,
  },
});

// 给useStore调用获得的实例对象store加ts类型限制
export function useStore(): Store<IStoreType> {
  return useVuexStore();
}

export default store;

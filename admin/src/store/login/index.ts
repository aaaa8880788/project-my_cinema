import type { Module } from "vuex";

import type { IRootState } from "../type";
import { ILoginState } from "./type";
// 导入网络请求
import { accountLoginRequest } from "../../network/login";
// 导入本地缓存实例
import localCache from "@/utils/local-cache";

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: localCache.getCache("token") || "",
    };
  },
  getters: {},
  mutations: {
    saveToken(state, payload) {
      state.token = payload;
    },
    removeToken(state) {
      state.token = "";
      localCache.deleteCache("token");
    },
  },
  actions: {
    async accountLoginAction({ commit }, payload) {
      const loginInfo = payload;
      const result = await accountLoginRequest("/login", loginInfo);
      if (result.data.status === "Ok") {
        // 保存token
        const token = result.data.token;
        commit("saveToken", token);
        localCache.setCache("token", token);
      }
      return result;
    },
  },
};

export default loginModule;

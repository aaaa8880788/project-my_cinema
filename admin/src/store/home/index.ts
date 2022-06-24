import type { Module } from "vuex";
import { IHomeState } from "./type";
import { IRootState } from "../type";
import { firstToUpper } from "@/utils/string-fristToUpper";

// 导入网络请求
import {
  getDataListRequest,
  addDataRequest,
  deleteDataRequest,
  editDataRequest,
} from "../../network/home";

const homeModule: Module<IHomeState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userListData: [],
      userListTotal: 0,
      movieListData: [],
      movieListTotal: 0,
      cinemaListData: [],
      cinemaListTotal: 0,
      hallListData: [],
      hallListTotal: 0,
      planListData: [],
      planListTotal: 0,
      advertiseListData: [],
      advertiseListTotal: 0,
      commentListData: [],
      commentListTotal: 0,
      orderListData: [],
      orderListTotal: 0,
    };
  },
  mutations: {
    // 保存数据列表
    saveUserListData(state, payload) {
      state.userListData = payload.data || payload.allData;
      state.userListTotal = payload.total;
    },
    // 保存电影列表
    saveMovieListData(state, payload) {
      state.movieListData = payload.data || payload.allData;
      state.movieListTotal = payload.total;
    },
    // 保存影院列表
    saveCinemaListData(state, payload) {
      state.cinemaListData = payload.data || payload.allData;
      state.cinemaListTotal = payload.total;
    },
    // 保存影厅列表
    saveHallListData(state, payload) {
      state.hallListData = payload.data || payload.allData;
      state.hallListTotal = payload.total;
    },
    // 保存排片列表
    savePlanListData(state, payload) {
      state.planListData = payload.data || payload.allData;
      state.planListTotal = payload.total;
    },
    // 保存宣传列表
    saveAdvertiseListData(state, payload) {
      state.advertiseListData = payload.data || payload.allData;
      state.advertiseListTotal = payload.total;
    },
    // 保存评论列表
    saveCommentListData(state, payload) {
      state.commentListData = payload.data || payload.allData;
      state.commentListTotal = payload.total;
    },
    // 保存评论列表
    saveOrderListData(state, payload) {
      state.orderListData = payload.data || payload.allData;
      state.orderListTotal = payload.total;
    },
  },
  actions: {
    // 获取数据列表
    async getListDataAction({ commit }, payload) {
      const queryInfo = payload.queryInfo ?? "";
      const pageInfo = payload.pageInfo ?? "";
      const pageName = payload.pageName ?? "";
      const res = await getDataListRequest(
        `/rest/${pageName}/${queryInfo}`,
        pageInfo
      );
      // console.log(res);

      if (res.status === "Ok") {
        commit(`save${firstToUpper(pageName)}ListData`, res);
      }
      return res;
    },
    // 添加数据
    async addDataAction({ commit }, payload) {
      const { data, pageName } = payload;
      const res = await addDataRequest(`/rest/${pageName}`, data);
      return res;
    },
    // 删除数据
    async deleteDataAction({ commit }, payload) {
      const { id, pageName } = payload;
      const res = await deleteDataRequest(`/rest/${pageName}/${id}`);
      return res;
    },
    // 编辑数据
    async editDataAction({ commit }, payload) {
      // console.log(payload);
      const { id, data, pageName } = payload;
      const res = await editDataRequest(`/rest/${pageName}/${id}`, data);
      return res;
    },
  },
};
export default homeModule;

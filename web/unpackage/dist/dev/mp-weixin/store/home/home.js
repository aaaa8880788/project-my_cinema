"use strict";
var common_vendor = require("../../common/vendor.js");
var request_request = require("../../request/request.js");
const useHomeStore = common_vendor.defineStore("home", {
  state: () => {
    return {
      swiperData: [],
      isShowingData: [],
      willShowingData: [],
      movieListData: []
    };
  },
  actions: {
    async getSwiperData() {
      const res = await request_request.http.get("/web/api/public/movieAdList");
      this.$patch((state) => {
        state.swiperData = res;
      });
    },
    async getIsShowingData(state) {
      const res = await request_request.http.get("/web/api/public/isShowingMovieList");
      if (res.status === "Ok") {
        this.$patch((state2) => {
          state2.isShowingData = res.isShowingData;
        });
      }
    },
    async getWillShowingData(state) {
      const res = await request_request.http.get("/web/api/public/willShowingMovieList");
      if (res.status === "Ok") {
        this.$patch((state2) => {
          state2.willShowingData = res.willShowingData;
        });
      }
    },
    async getMovieListData(state) {
      const res = await request_request.http.get("/web/api/public/movieList");
      if (res.status === "Ok") {
        this.$patch((state2) => {
          state2.movieListData = res.movieList;
        });
      }
    }
  }
});
exports.useHomeStore = useHomeStore;

"use strict";
var common_vendor = require("../../common/vendor.js");
var request_request = require("../../request/request.js");
const useMovieDetailStore = common_vendor.defineStore("movieDetail", {
  state: () => {
    return {
      movieData: []
    };
  },
  actions: {
    async getMovieDetailData(payload) {
      const { movieId } = payload;
      if (!movieId)
        return;
      const res = await request_request.http.get(`/web/api/public/movieDetail/${movieId}`);
      console.log(res);
      if (res.status === "Ok") {
        this.$patch((state) => {
          state.movieData = res.movieDetailData;
        });
      }
    }
  }
});
exports.useMovieDetailStore = useMovieDetailStore;

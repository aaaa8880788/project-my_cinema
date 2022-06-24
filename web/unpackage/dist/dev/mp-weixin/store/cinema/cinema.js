"use strict";
var common_vendor = require("../../common/vendor.js");
var request_request = require("../../request/request.js");
const useCinemaStore = common_vendor.defineStore("cinema", {
  state: () => {
    return {
      cinemaData: []
    };
  },
  actions: {
    async getCinemaData() {
      const res = await request_request.http.get("/web/api/public/cinemaList");
      console.log(res);
      if (res.status === "Ok") {
        this.$patch((state) => {
          state.cinemaData = res.cinemaList;
        });
      }
    }
  }
});
exports.useCinemaStore = useCinemaStore;

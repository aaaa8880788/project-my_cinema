"use strict";
var common_vendor = require("../../common/vendor.js");
var store_cinema_cinema = require("../../store/cinema/cinema.js");
require("../../request/request.js");
if (!Array) {
  const _easycom_nav_top2 = common_vendor.resolveComponent("nav-top");
  const _easycom_cinema_list2 = common_vendor.resolveComponent("cinema-list");
  (_easycom_nav_top2 + _easycom_cinema_list2)();
}
const _easycom_nav_top = () => "../../components/nav-top/nav-top.js";
const _easycom_cinema_list = () => "../../components/cinema-list/cinema-list.js";
if (!Math) {
  (_easycom_nav_top + _easycom_cinema_list)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    const cinema = store_cinema_cinema.useCinemaStore();
    cinema.getCinemaData();
    const cinemaListData = common_vendor.computed$1(() => {
      return cinema.cinemaData;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          cinemaList: common_vendor.unref(cinemaListData)
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Web-code/Web-start/\u5446\u5934\u9E2D\u8D2D\u7968\u7CFB\u7EDF/web/pages/cinema/cinema.vue"]]);
wx.createPage(MiniProgramPage);

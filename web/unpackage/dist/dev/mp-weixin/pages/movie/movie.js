"use strict";
var common_vendor = require("../../common/vendor.js");
var store_movie_movie = require("../../store/movie/movie.js");
require("../../request/request.js");
if (!Array) {
  const _easycom_my_tabs2 = common_vendor.resolveComponent("my-tabs");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_nav_top2 = common_vendor.resolveComponent("nav-top");
  const _easycom_movie_list2 = common_vendor.resolveComponent("movie-list");
  (_easycom_my_tabs2 + _easycom_u_icon2 + _easycom_nav_top2 + _easycom_movie_list2)();
}
const _easycom_my_tabs = () => "../../components/my-tabs/my-tabs.js";
const _easycom_u_icon = () => "../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js";
const _easycom_nav_top = () => "../../components/nav-top/nav-top.js";
const _easycom_movie_list = () => "../../components/movie-list/movie-list.js";
if (!Math) {
  (_easycom_my_tabs + _easycom_u_icon + _easycom_nav_top + _easycom_movie_list)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  props: {
    tabTitle: { type: String, required: false, default: "" }
  },
  setup(__props) {
    const props = __props;
    const movie = store_movie_movie.useMovieStore();
    const tabsList = [{
      name: "\u6B63\u5728\u70ED\u6620"
    }, {
      name: "\u5373\u5C06\u4E0A\u6620"
    }, {
      name: "\u7535\u5F71\u5217\u8868"
    }];
    let currentIndex = common_vendor.ref(0);
    movie.getIsShowingData();
    const isShowingData = common_vendor.computed$1(() => {
      return movie.isShowingData;
    });
    movie.getMovieListData();
    const movieListData = common_vendor.computed$1(() => {
      return movie.movieListData;
    });
    movie.getWillShowingData();
    const willShowingData = common_vendor.computed$1(() => {
      return movie.willShowingData;
    });
    if (props.tabTitle === "\u7535\u5F71\u5217\u8868") {
      currentIndex.value = 2;
    } else if (props.tabTitle === "\u5373\u5C06\u4E0A\u6620") {
      currentIndex.value = 1;
    } else {
      currentIndex.value = 0;
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(($event) => common_vendor.isRef(currentIndex) ? currentIndex.value = $event : currentIndex = $event),
        b: common_vendor.p({
          tabsList,
          modelValue: common_vendor.unref(currentIndex)
        }),
        c: common_vendor.p({
          name: "search",
          size: "40"
        }),
        d: common_vendor.unref(currentIndex) === 0 && common_vendor.unref(isShowingData).length !== 0
      }, common_vendor.unref(currentIndex) === 0 && common_vendor.unref(isShowingData).length !== 0 ? {
        e: common_vendor.p({
          movieListData: common_vendor.unref(isShowingData)
        })
      } : {}, {
        f: common_vendor.unref(currentIndex) === 1 && common_vendor.unref(willShowingData).length !== 0
      }, common_vendor.unref(currentIndex) === 1 && common_vendor.unref(willShowingData).length !== 0 ? {
        g: common_vendor.p({
          movieListData: common_vendor.unref(willShowingData)
        })
      } : {}, {
        h: common_vendor.unref(currentIndex) === 2 && common_vendor.unref(movieListData).length !== 0
      }, common_vendor.unref(currentIndex) === 2 && common_vendor.unref(movieListData).length !== 0 ? {
        i: common_vendor.p({
          movieListData: common_vendor.unref(movieListData)
        })
      } : {}, {
        j: common_vendor.unref(currentIndex) === 0 && common_vendor.unref(isShowingData).length == 0 || common_vendor.unref(currentIndex) === 1 && common_vendor.unref(willShowingData).length == 0 || common_vendor.unref(currentIndex) === 2 && common_vendor.unref(movieListData).length == 0
      }, common_vendor.unref(currentIndex) === 0 && common_vendor.unref(isShowingData).length == 0 || common_vendor.unref(currentIndex) === 1 && common_vendor.unref(willShowingData).length == 0 || common_vendor.unref(currentIndex) === 2 && common_vendor.unref(movieListData).length == 0 ? {} : {});
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Web-code/Web-start/\u5446\u5934\u9E2D\u8D2D\u7968\u7CFB\u7EDF/web/pages/movie/movie.vue"]]);
wx.createPage(MiniProgramPage);

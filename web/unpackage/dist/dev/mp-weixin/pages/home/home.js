"use strict";
var common_vendor = require("../../common/vendor.js");
var store_home_home = require("../../store/home/home.js");
require("../../request/request.js");
if (!Array) {
  const _easycom_nav_top2 = common_vendor.resolveComponent("nav-top");
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  const _easycom_is_showing2 = common_vendor.resolveComponent("is-showing");
  (_easycom_nav_top2 + _easycom_u_swiper2 + _easycom_is_showing2)();
}
const _easycom_nav_top = () => "../../components/nav-top/nav-top.js";
const _easycom_u_swiper = () => "../../uni_modules/vk-uview-ui/components/u-swiper/u-swiper.js";
const _easycom_is_showing = () => "../../components/is-showing/is-showing.js";
if (!Math) {
  (_easycom_nav_top + _easycom_u_swiper + _easycom_is_showing)();
}
const _sfc_main = {
  setup(__props) {
    const home = store_home_home.useHomeStore();
    home.getSwiperData();
    const swiperData = common_vendor.computed$1(() => {
      return home.swiperData.map((item) => {
        return item.adImage;
      });
    });
    common_vendor.index.getSystemInfoSync().windowHeight;
    home.getIsShowingData();
    const isShowingData = common_vendor.computed$1(() => {
      return home.isShowingData;
    });
    home.getWillShowingData();
    const willShowingData = common_vendor.computed$1(() => {
      return home.willShowingData;
    });
    home.getMovieListData();
    const movieListData = common_vendor.computed$1(() => {
      return home.movieListData;
    });
    const goToMovieHandle = (title) => {
      common_vendor.index.reLaunch({
        url: `/pages/movie/movie?tabTitle=${title}`
      });
    };
    const swiperClickHandle = (index) => {
      const swiperData2 = home.swiperData;
      if (swiperData2.length !== 0) {
        common_vendor.index.navigateTo({
          url: `/subPackages/movie-detail/movie-detail?movieId=${swiperData2[index].movieId}`
        });
      }
    };
    const goToDetailHandle = (detail) => {
      common_vendor.index.navigateTo({
        url: `/subPackages/movie-detail/movie-detail?movieId=${detail._id}`
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(swiperClickHandle),
        b: common_vendor.p({
          list: common_vendor.unref(swiperData)
        }),
        c: common_vendor.unref(isShowingData).length
      }, common_vendor.unref(isShowingData).length ? {
        d: common_vendor.o(goToMovieHandle),
        e: common_vendor.o(goToDetailHandle),
        f: common_vendor.p({
          title: "\u6B63\u5728\u70ED\u6620",
          data: common_vendor.unref(isShowingData)
        })
      } : {}, {
        g: common_vendor.unref(willShowingData).length
      }, common_vendor.unref(willShowingData).length ? {
        h: common_vendor.o(goToMovieHandle),
        i: common_vendor.o(goToDetailHandle),
        j: common_vendor.p({
          title: "\u5373\u5C06\u4E0A\u6620",
          data: common_vendor.unref(willShowingData)
        })
      } : {}, {
        k: common_vendor.unref(movieListData).length
      }, common_vendor.unref(movieListData).length ? {
        l: common_vendor.o(goToMovieHandle),
        m: common_vendor.o(goToDetailHandle),
        n: common_vendor.p({
          title: "\u7535\u5F71\u5217\u8868",
          data: common_vendor.unref(movieListData)
        })
      } : {});
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Web-code/Web-start/\u5446\u5934\u9E2D\u8D2D\u7968\u7CFB\u7EDF/web/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);

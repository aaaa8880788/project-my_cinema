"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_formdataTime = require("../../utils/formdata-time.js");
var store_movieDetail_movieDetail = require("../../store/movie-detail/movie-detail.js");
require("../../request/request.js");
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_rate2 = common_vendor.resolveComponent("u-rate");
  (_easycom_u_icon2 + _easycom_u_rate2)();
}
const _easycom_u_icon = () => "../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js";
const _easycom_u_rate = () => "../../uni_modules/vk-uview-ui/components/u-rate/u-rate.js";
if (!Math) {
  (_easycom_u_icon + _easycom_u_rate)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  props: {
    movieId: { type: String, required: false, default: "" }
  },
  setup(__props) {
    const props = __props;
    const movieDetail = store_movieDetail_movieDetail.useMovieDetailStore();
    movieDetail.getMovieDetailData({ movieId: props.movieId });
    const movieData = common_vendor.computed$1(() => {
      return movieDetail.movieData;
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f;
      return common_vendor.e({
        a: Object.keys(common_vendor.unref(movieData)).length
      }, Object.keys(common_vendor.unref(movieData)).length ? common_vendor.e({
        b: common_vendor.unref(movieData).image,
        c: common_vendor.t(common_vendor.unref(movieData).name),
        d: common_vendor.t(common_vendor.unref(movieData).performer),
        e: common_vendor.t((_a = common_vendor.unref(movieData).type) == null ? void 0 : _a.join("\u3001")),
        f: common_vendor.t(common_vendor.unref(movieData).language + common_vendor.unref(movieData).vision),
        g: common_vendor.t(common_vendor.unref(movieData).time),
        h: common_vendor.t(common_vendor.unref(movieData).duration),
        i: common_vendor.p({
          name: "heart-fill"
        }),
        j: common_vendor.p({
          name: "star-fill"
        }),
        k: common_vendor.t((_b = common_vendor.unref(movieData).wishWatch) == null ? void 0 : _b.length),
        l: common_vendor.t((_c = common_vendor.unref(movieData).comments) == null ? void 0 : _c.length),
        m: common_vendor.p({
          current: common_vendor.unref(movieData).movieScoreHalf,
          disabled: true,
          ["inactive-color"]: "#eff2f7",
          ["active-color"]: "#f7ba2a",
          ["inactive-icon"]: "star-fill",
          size: "45"
        }),
        n: common_vendor.t(common_vendor.unref(movieData).movieScoreHalf ? common_vendor.unref(movieData).movieScoreHalf * 2 : "\u6682\u672A\u8BC4\u5206"),
        o: common_vendor.unref(movieData).movieScoreHalf
      }, common_vendor.unref(movieData).movieScoreHalf ? {} : {}, {
        p: common_vendor.t(common_vendor.unref(movieData).summary),
        q: common_vendor.t((_d = common_vendor.unref(movieData).comments) == null ? void 0 : _d.length),
        r: !((_e = common_vendor.unref(movieData).comments) == null ? void 0 : _e.length)
      }, !((_f = common_vendor.unref(movieData).comments) == null ? void 0 : _f.length) ? {} : {
        s: common_vendor.f(common_vendor.unref(movieData).comments, (item, k0, i0) => {
          return {
            a: item.userId.avatar,
            b: common_vendor.t(item.userId.username),
            c: "1753a10f-3-" + i0,
            d: common_vendor.p({
              current: item.userScore / 2,
              disabled: true,
              ["inactive-color"]: "#eff2f7",
              ["active-color"]: "#f7ba2a",
              ["inactive-icon"]: "star-fill",
              size: "35"
            }),
            e: common_vendor.t(item.userScore),
            f: common_vendor.t(item.userComment),
            g: common_vendor.t(common_vendor.unref(utils_formdataTime.formData)(item.updatedAt, "YYYY-MM-DD HH:mm:ss")),
            h: "1753a10f-4-" + i0,
            i: common_vendor.t(item.supportUserId.length)
          };
        }),
        t: common_vendor.p({
          name: "thumb-up"
        })
      }) : {});
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1753a10f"], ["__file", "D:/Web-code/Web-start/\u5446\u5934\u9E2D\u8D2D\u7968\u7CFB\u7EDF/web/subPackages/movie-detail/movie-detail.vue"]]);
wx.createPage(MiniProgramPage);

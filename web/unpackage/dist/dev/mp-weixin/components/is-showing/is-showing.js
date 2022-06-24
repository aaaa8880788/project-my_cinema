"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  (_easycom_u_icon2 + _easycom_u_button2)();
}
const _easycom_u_icon = () => "../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js";
const _easycom_u_button = () => "../../uni_modules/vk-uview-ui/components/u-button/u-button.js";
if (!Math) {
  (_easycom_u_icon + _easycom_u_button)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  props: {
    title: { type: String, required: false, default: "\u8BF7\u4F20\u5165\u6807\u9898" },
    data: { type: Array, required: true }
  },
  emits: ["goToMovieClick", "goToDetailClick"],
  setup(__props, { emit }) {
    const goToMovie = (title) => {
      emit("goToMovieClick", title);
    };
    const goToDetail = (detail) => {
      emit("goToDetailClick", detail);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.title),
        b: common_vendor.t(__props.data.length),
        c: common_vendor.p({
          name: "arrow-right"
        }),
        d: common_vendor.o(($event) => goToMovie(__props.title)),
        e: common_vendor.f(__props.data, (item, k0, i0) => {
          return {
            a: item.image,
            b: common_vendor.t(item.movieScoreHalf !== 0 ? `${item.movieScoreHalf * 2}\u5206` : `\u6682\u672A\u8BC4\u5206`),
            c: common_vendor.t(item.name),
            d: common_vendor.o(($event) => goToDetail(item)),
            e: "2900ca84-1-" + i0,
            f: item._id,
            g: common_vendor.o(($event) => goToDetail(item), item._id)
          };
        }),
        f: common_vendor.p({
          size: "mini",
          type: "error"
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2900ca84"], ["__file", "D:/Web-code/Web-start/\u5446\u5934\u9E2D\u8D2D\u7968\u7CFB\u7EDF/web/components/is-showing/is-showing.vue"]]);
wx.createComponent(Component);

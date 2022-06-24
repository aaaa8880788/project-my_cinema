"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_rate2 = common_vendor.resolveComponent("u-rate");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  (_easycom_u_rate2 + _easycom_u_button2)();
}
const _easycom_u_rate = () => "../../uni_modules/vk-uview-ui/components/u-rate/u-rate.js";
const _easycom_u_button = () => "../../uni_modules/vk-uview-ui/components/u-button/u-button.js";
if (!Math) {
  (_easycom_u_rate + _easycom_u_button)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  props: {
    disabled: { type: null, required: false, default: true },
    activeColor: { type: String, required: false, default: "#f7ba2a" },
    movieListData: { type: Array, required: true }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.movieListData
      }, __props.movieListData ? {
        b: common_vendor.f(__props.movieListData, (item, k0, i0) => {
          return {
            a: item.image,
            b: common_vendor.t(item.name),
            c: "2ec034e4-0-" + i0,
            d: common_vendor.o(($event) => item.movieScoreHalf = $event),
            e: common_vendor.p({
              disabled: __props.disabled,
              activeColor: __props.activeColor,
              modelValue: item.movieScoreHalf
            }),
            f: common_vendor.t(item.movieScoreHalf !== 0 ? `${item.movieScoreHalf * 2}\u5206` : "\u6682\u672A\u8BC4\u5206"),
            g: common_vendor.t(item.type.join("\u3001")),
            h: common_vendor.t(item.performer),
            i: "2ec034e4-1-" + i0,
            j: item._id
          };
        }),
        c: common_vendor.p({
          size: "mini",
          type: "error"
        })
      } : {});
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2ec034e4"], ["__file", "D:/Web-code/Web-start/\u5446\u5934\u9E2D\u8D2D\u7968\u7CFB\u7EDF/web/components/movie-list/movie-list.vue"]]);
wx.createComponent(Component);

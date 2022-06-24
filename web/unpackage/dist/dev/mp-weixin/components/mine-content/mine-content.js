"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  _easycom_u_icon2();
}
const _easycom_u_icon = () => "../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js";
if (!Math) {
  _easycom_u_icon();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  props: {
    data: { type: Array, required: true, default: [] }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.data, (item, k0, i0) => {
          return {
            a: "b2f41838-0-" + i0,
            b: common_vendor.p({
              size: "40",
              name: item.icon
            }),
            c: common_vendor.t(item.name),
            d: "b2f41838-1-" + i0,
            e: item.name
          };
        }),
        b: common_vendor.p({
          size: "40",
          name: "arrow-right"
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b2f41838"], ["__file", "D:/Web-code/Web-start/\u5446\u5934\u9E2D\u8D2D\u7968\u7CFB\u7EDF/web/components/mine-content/mine-content.vue"]]);
wx.createComponent(Component);

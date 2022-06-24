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
    cinemaList: { type: Array, required: true, default: [] }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.cinemaList, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(`${item.demand}\u5143`),
            c: "0361ad7a-0-" + i0,
            d: common_vendor.t(item.address),
            e: "0361ad7a-1-" + i0,
            f: common_vendor.t(`\u8054\u7CFB\u7535\u8BDD${item.phone}`),
            g: common_vendor.f(item.desc1, (item1, k1, i1) => {
              return {
                a: common_vendor.t(item1)
              };
            }),
            h: common_vendor.f(item.desc2, (item2, k1, i1) => {
              return {
                a: common_vendor.t(item2)
              };
            }),
            i: item._id
          };
        }),
        b: common_vendor.p({
          name: "map"
        }),
        c: common_vendor.p({
          name: "phone"
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0361ad7a"], ["__file", "D:/Web-code/Web-start/\u5446\u5934\u9E2D\u8D2D\u7968\u7CFB\u7EDF/web/components/cinema-list/cinema-list.vue"]]);
wx.createComponent(Component);

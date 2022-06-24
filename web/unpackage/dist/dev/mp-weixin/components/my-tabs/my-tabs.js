"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_tabs2 = common_vendor.resolveComponent("u-tabs");
  _easycom_u_tabs2();
}
const _easycom_u_tabs = () => "../../uni_modules/vk-uview-ui/components/u-tabs/u-tabs.js";
if (!Math) {
  _easycom_u_tabs();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  props: {
    tabsList: { type: Array, required: true, default: [] },
    bgc: { type: String, required: false, default: "rbga(0,0,0,0)" },
    ac: { type: String, required: false, default: "#fc0000" },
    modelValue: { type: null, required: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const currentIndexChange = (index) => {
      emit("update:modelValue", index);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(currentIndexChange),
        b: common_vendor.o(currentIndexChange),
        c: common_vendor.p({
          list: __props.tabsList,
          ["is-scroll"]: false,
          modelValue: __props.modelValue,
          ["bg-color"]: __props.bgc,
          ["active-color"]: __props.ac
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Web-code/Web-start/\u5446\u5934\u9E2D\u8D2D\u7968\u7CFB\u7EDF/web/components/my-tabs/my-tabs.vue"]]);
wx.createComponent(Component);

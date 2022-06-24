"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_avatar2 = common_vendor.resolveComponent("u-avatar");
  const _easycom_mine_content2 = common_vendor.resolveComponent("mine-content");
  (_easycom_u_avatar2 + _easycom_mine_content2)();
}
const _easycom_u_avatar = () => "../../uni_modules/vk-uview-ui/components/u-avatar/u-avatar.js";
const _easycom_mine_content = () => "../../components/mine-content/mine-content.js";
if (!Math) {
  (_easycom_u_avatar + _easycom_mine_content)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    common_vendor.useCssVars((_ctx) => ({
      "dcbcfe34-wh": wh
    }));
    const wh = common_vendor.index.getSystemInfoSync().windowHeight - 200 + "px";
    const mainContentData = [
      { name: "\u4E2A\u4EBA\u4FE1\u606F", icon: "account" },
      { name: "\u6211\u7684\u8BA2\u5355", icon: "shopping-cart" },
      { name: "\u60F3\u770B\u7684\u7535\u5F71", icon: "heart" },
      { name: "\u770B\u8FC7\u7684\u7535\u5F71", icon: "thumb-up" }
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          size: "140",
          src: "/static/image/mine/userIcon.png"
        }),
        b: common_vendor.p({
          data: mainContentData
        }),
        c: common_vendor.s(_ctx.__cssVars())
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-dcbcfe34"], ["__file", "D:/Web-code/Web-start/\u5446\u5934\u9E2D\u8D2D\u7968\u7CFB\u7EDF/web/pages/mine/mine.vue"]]);
wx.createPage(MiniProgramPage);

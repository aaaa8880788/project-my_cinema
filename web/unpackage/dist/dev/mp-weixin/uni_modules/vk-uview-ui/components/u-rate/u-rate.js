"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-rate",
  emits: ["update:modelValue", "input", "change"],
  props: {
    value: {
      type: [Number, String],
      default: -1
    },
    modelValue: {
      type: [Number, String],
      default: -1
    },
    count: {
      type: [Number, String],
      default: 5
    },
    current: {
      type: [Number, String],
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: [Number, String],
      default: 32
    },
    inactiveColor: {
      type: String,
      default: "#b2b2b2"
    },
    activeColor: {
      type: String,
      default: "#FA3534"
    },
    gutter: {
      type: [Number, String],
      default: 10
    },
    minCount: {
      type: [Number, String],
      default: 0
    },
    allowHalf: {
      type: Boolean,
      default: false
    },
    activeIcon: {
      type: String,
      default: "star-fill"
    },
    inactiveIcon: {
      type: String,
      default: "star"
    },
    customPrefix: {
      type: String,
      default: "uicon"
    },
    colors: {
      type: Array,
      default() {
        return [];
      }
    },
    icons: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      elId: this.$u.guid(),
      elClass: this.$u.guid(),
      starBoxLeft: 0,
      activeIndex: this.getValue() != -1 ? this.getValue() : this.current,
      starWidth: 0,
      starWidthArr: []
    };
  },
  watch: {
    current(val) {
      this.activeIndex = val;
    },
    value(val) {
      this.activeIndex = val;
    }
  },
  computed: {
    decimal() {
      if (this.disabled) {
        return this.activeIndex * 100 % 100;
      } else if (this.allowHalf) {
        return 50;
      }
    },
    elActiveIcon() {
      const len = this.icons.length;
      if (len && len <= this.count) {
        const step = Math.round(this.activeIndex / Math.round(this.count / len));
        if (step < 1)
          return this.icons[0];
        if (step > len)
          return this.icons[len - 1];
        return this.icons[step - 1];
      }
      return this.activeIcon;
    },
    elActiveColor() {
      const len = this.colors.length;
      if (len && len <= this.count) {
        const step = Math.round(this.activeIndex / Math.round(this.count / len));
        if (step < 1)
          return this.colors[0];
        if (step > len)
          return this.colors[len - 1];
        return this.colors[step - 1];
      }
      return this.activeColor;
    }
  },
  methods: {
    getValue() {
      return this.modelValue;
    },
    getElRectById() {
      this.$uGetRect("#" + this.elId).then((res) => {
        this.starBoxLeft = res.left;
      });
    },
    getElRectByClass() {
      this.$uGetRect("." + this.elClass).then((res) => {
        this.starWidth = res.width;
        for (let i = 0; i < this.count; i++) {
          this.starWidthArr[i] = (i + 1) * this.starWidth;
        }
      });
    },
    touchMove(e) {
      if (this.disabled) {
        return;
      }
      if (!e.changedTouches[0]) {
        return;
      }
      const movePageX = e.changedTouches[0].pageX;
      const distance = movePageX - this.starBoxLeft;
      if (distance <= 0) {
        this.activeIndex = 0;
      }
      let index = Math.ceil(distance / this.starWidth);
      this.activeIndex = index > this.count ? this.count : index;
      if (this.activeIndex < this.minCount)
        this.activeIndex = this.minCount;
      this.emitEvent();
    },
    click(index, e) {
      if (this.disabled) {
        return;
      }
      if (this.allowHalf)
        ;
      if (index == 1) {
        if (this.activeIndex == 1) {
          this.activeIndex = 0;
        } else {
          this.activeIndex = 1;
        }
      } else {
        this.activeIndex = index;
      }
      if (this.activeIndex < this.minCount)
        this.activeIndex = this.minCount;
      this.emitEvent();
    },
    emitEvent() {
      this.$emit("change", this.activeIndex);
      if (this.getValue() != -1) {
        this.$emit("input", this.activeIndex);
        this.$emit("update:modelValue", this.activeIndex);
      }
    },
    showDecimalIcon(index) {
      return this.disabled && parseInt(this.activeIndex) === index;
    }
  },
  mounted() {
    this.getElRectById();
    this.getElRectByClass();
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  _easycom_u_icon2();
}
const _easycom_u_icon = () => "../u-icon/u-icon.js";
if (!Math) {
  _easycom_u_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.count, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.click(index + 1, $event)),
        b: "5a438f8b-0-" + i0,
        c: common_vendor.p({
          name: $data.activeIndex > index ? $options.elActiveIcon : $props.inactiveIcon,
          color: $data.activeIndex > index ? $options.elActiveColor : $props.inactiveColor,
          ["custom-style"]: {
            fontSize: $props.size + "rpx",
            padding: `0 ${$props.gutter / 2 + "rpx"}`
          },
          ["custom-prefix"]: $props.customPrefix,
          ["show-decimal-icon"]: $options.showDecimalIcon(index),
          percent: $options.decimal,
          ["inactive-color"]: $props.inactiveColor
        }),
        d: index
      };
    }),
    b: common_vendor.n($data.elClass),
    c: $data.elId,
    d: common_vendor.o((...args) => $options.touchMove && $options.touchMove(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5a438f8b"], ["__file", "D:/Web-code/Web-start/\u5446\u5934\u9E2D\u8D2D\u7968\u7CFB\u7EDF/web/uni_modules/vk-uview-ui/components/u-rate/u-rate.vue"]]);
wx.createComponent(Component);

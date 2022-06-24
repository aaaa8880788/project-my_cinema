"use strict";
var common_vendor = require("../common/vendor.js");
function formData(time, format = "YYYY-MM-DD") {
  return common_vendor.dayjs(time).format(format);
}
exports.formData = formData;

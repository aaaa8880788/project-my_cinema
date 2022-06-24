"use strict";
var common_vendor = require("../common/vendor.js");
const baseUrl = "http://localhost:3500";
const request = (options = {}) => {
  return new Promise((resolve, reject) => {
    options.header = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
    common_vendor.index.request({
      url: baseUrl + options.url || "",
      method: options.method || "GET",
      data: options.data || {},
      header: options.header || {}
    }).then((res) => {
      const { data } = res;
      if (res.statusCode === 200) {
        resolve(data);
      } else {
        reject(res);
      }
    }).catch((error) => {
      reject(error);
    });
  });
};
const get = (url, data = {}, options = {}) => {
  options.url = url;
  options.method = "GET";
  options.data = data;
  return request(options);
};
const post = (url, data = {}, options = {}) => {
  options.url = url;
  options.method = "POST";
  options.data = data;
  return request(options);
};
var http = {
  request,
  get,
  post
};
exports.http = http;

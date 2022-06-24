// uni.request请求封装
const baseUrl = "http://localhost:3500"; //请求的根路径
const request = (options = {}) => {
  // 这里存放不要token的url地址
  // const whiteList = [
  // 	'/api/public/v1/home/swiperdata',
  // 	'/api/public/v1/home/catitems',
  // 	'/api/public/v1/home/floordata',
  // 	'/api/public/v1/categories',
  // 	'/api/public/v1/goods/search'
  // ]
  // if (whiteList.indexOf(options.url) === -1 && uni.getStorageSync("token") == '') {
  // 	uni.switchTab({ // 登录校验不成功则跳转的登录页面
  // 		url: "/pages/login/login",
  // 	})
  // 	uni.showToast({
  // 		title: '请先登录'
  // 	});
  // 	return new Promise((resolve, reject) => {
  // 		resolve('未登录');
  // 	})
  // }

  return new Promise((resolve, reject) => {
    // 配置默认请求头
    options.header = {
      "Content-Type": "application/x-www-form-urlencoded",
    };
    uni
      .request({
        url: baseUrl + options.url || "",
        method: options.method || "GET",
        data: options.data || {},
        header: options.header || {},
      })
      .then((res) => {
        const { data } = res;
        if (res.statusCode === 200) {
          // console.log('请求接口成功');
          resolve(data);
        } else {
          // console.log('请求接口没有找到');
          reject(res);
        }
        // console.log(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// GET请求
const get = (url, data = {}, options = {}) => {
  options.url = url;
  options.method = "GET";
  options.data = data;
  return request(options);
};

// POST请求
const post = (url, data = {}, options = {}) => {
  options.url = url;
  options.method = "POST";
  options.data = data;
  return request(options);
};

// 默认向外暴露的数据
export default {
  request,
  get,
  post,
};

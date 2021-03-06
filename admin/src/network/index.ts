// network出口文件
import DRequest from "./request";
// 导入本地缓存函数
import localCache from "@/utils/local-cache";
// 导入路由
import router from "../router/index";

const baseURL = import.meta.env.VITE_APP_BASE_URL;
const timeout = Number(import.meta.env.VITE_APP_TIME_OUT);

// 带有拦截器的网络请求实例
const dRequest1 = new DRequest({
  baseURL: baseURL,
  timeout: timeout,
  interceptors: {
    // 添加请求拦截器，在发起请求时加上token请求头，除了登录和注册接口其他都要
    requestInterceptor: (config: any) => {
      const token = localCache.getCache("token");
      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    },
    requestInterceptorCatch: (err) => {
      // console.log('在new实例时有传入拦截器的实例才有的拦截器:请求失败的拦截')
      return err;
    },
    responseInterceptor: (res) => {
      // console.log('在new实例时有传入拦截器的实例才有的拦截器:响应成功的拦截')

      return res.data;
    },
    // 如果返回的接口数据中，状态码为401，说明token过期或失效，则需要清除浏览器中缓存的token
    responseInterceptorCatch: (err) => {
      // console.log('在new实例时有传入拦截器的实例才有的拦截器:响应失败的拦截')
      const { status } = err.response;
      if (status === 401) {
        //   token过期，清除token
        localCache.deleteCache("token");
        // 重新跳转login页面
        router.push("/login");
      }
      return err;
    },
  },
});
// 不带有拦截器的网络请求实例
const dRequest2 = new DRequest({
  baseURL: baseURL,
  timeout: timeout,
});

export { dRequest1, dRequest2 };

import { createApp } from "vue";
import App from "./App.vue";
// 导入字体图标样式
import "@/assets/font-icon/iconfont.css";
// 导入全局css样式
import "@/assets/css/global.css";
// 引入Element Plus样式
import "element-plus/es/components/message/style/css";
import "element-plus/es/components/message-box/style/css";
// 引入element plus图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// 导入element plus国际化配置
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";

// 导入router
import router from "./router";
// 导入vuex
import store from "./store";

const app = createApp(App);
app.use(router);
app.use(store);
// 统一注册Icon图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(ElementPlus, {
  locale: zhCn,
});

app.mount("#app");

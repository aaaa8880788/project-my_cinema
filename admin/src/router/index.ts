import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
// 导入本地缓存实力对象
import localCache from "../utils/local-cache";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    name: "home",
    path: "/home",
    redirect: "/home/userManage",
    component: () => import("@/views/home/home.vue"),
    children: [
      {
        path: "userManage",
        component: () => import("@/views/user-manage/user-manage.vue"),
      },
      {
        path: "movieManage",
        component: () => import("@/views/movie-manage/movie-manage.vue"),
      },
      {
        path: "cinemaManage",
        component: () => import("@/views/cinema-manage/cinema-manage.vue"),
      },
      {
        path: "hallManage",
        component: () => import("@/views/hall-manage/hall-manage.vue"),
      },
      {
        path: "moviePlan",
        component: () => import("@/views/movie-plan/movie-plan.vue"),
      },
      {
        path: "advertiseMovie",
        component: () => import("@/views/advertise-movie/advertise-movie.vue"),
      },
      {
        path: "commentManage",
        component: () => import("@/views/comment-manage/comment-manage.vue"),
      },
      {
        path: "orderManage",
        component: () => import("@/views/order-manage/order-manage.vue"),
      },
    ],
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/login/login.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, from) => {
  if (to.path !== "/login") {
    const token = localCache.getCache("token");
    if (!token) {
      return "login";
    }
  }
});

export default router;

import {
	defineStore
} from "pinia";
// 导入网络请求
import http from "../../request/request.js";
const useCinemaStore = defineStore("cinema", {
	state: () => {
		return {
			cinemaData: [],
		};
	},
	actions: {
		// 轮播图数据请求
		async getCinemaData() {
			const res = await http.get("/web/api/public/cinemaList");
			console.log(res);
			if (res.status === 'Ok') {
				this.$patch((state) => {
					state.cinemaData = res.cinemaList;
				});
			}
		},
	},
});

export default useCinemaStore;

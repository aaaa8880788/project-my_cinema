import {
	defineStore
} from "pinia";
// 导入网络请求
import http from "../../request/request.js";
const useMovieDetailStore = defineStore("movieDetail", {
	state: () => {
		return {
			movieData: [],
		};
	},
	actions: {
		// 电影详情数据请求
		async getMovieDetailData(payload) {
			const { movieId } = payload
			if(!movieId) return
			const res = await http.get(`/web/api/public/movieDetail/${movieId}`);
			console.log(res);
			if (res.status === 'Ok') {
				this.$patch((state) => {
					state.movieData = res.movieDetailData;
				});
			}
		},
	},
});

export default useMovieDetailStore;

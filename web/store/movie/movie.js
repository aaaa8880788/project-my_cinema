import { defineStore } from "pinia";
// 导入网络请求
import http from "../../request/request.js";
const useMovieStore = defineStore("movie", {
  state: () => {
    return {
      isShowingData: [],
	  willShowingData:[],
	  movieListData:[]
    };
  },
  actions: {
	  // 轮播图数据请求
    async getSwiperData() {
      const res = await http.get("/web/api/public/movieAdList");
      this.$patch((state) => {
        state.swiperData = res;
      });
    },
	// 正在热映数据请求
    async getIsShowingData(state) {
      const res = await http.get("/web/api/public/isShowingMovieList");
	  // console.log(res);
	  if(res.status==='Ok'){
		this.$patch((state) => {
		  state.isShowingData = res.isShowingData;
		});
	  } 
    },
	// 即将上映数据请求
	async getWillShowingData(state) {
	  const res = await http.get("/web/api/public/willShowingMovieList");
	  // console.log(res);
	  if(res.status==='Ok'){
		this.$patch((state) => {
		  state.willShowingData = res.willShowingData;
		});
	  } 
	},
	// 电影列表数据请求
	async getMovieListData(state) {
	  const res = await http.get("/web/api/public/movieList");
	  // console.log(res);
	  if(res.status==='Ok'){
		this.$patch((state) => {
		  state.movieListData = res.movieList;
		});
	  } 
	},
  },
});

export default useMovieStore;

<template>
  <div class="plan-plan">
    <!-- 顶部搜索部分 -->
    <page-search
      v-bind="searchConfig"
      v-model="searchData"
      @searchBtnClick="searchBtnHandle"
      @addBtnClick="addBtnHandle"
      @clearBtnClick="clearBtnHandle"
    ></page-search>
    <!-- 表格部分 -->
    <page-table
      :tableData="planList"
      v-bind="tabelConfig"
      v-model:pageInfo="pageInfo"
      :tableDataTotal="planListTotal"
      @pageSizeChange="pageSizeChangeHandle"
      @currentSizeChange="currentSizeChangeHandle"
    >
      <!-- 插槽部分处理 -->
      <template #handle="scope">
        <el-button
          type="primary"
          :icon="Edit"
          @click="editClickHandle(scope.row)"
          >编辑</el-button
        >
        <el-button
          type="danger"
          :icon="Delete"
          @click="deleteClickHandle(scope.row)"
          >删除</el-button
        >
      </template>
    </page-table>
    <!-- 对话框部分 -->
    <page-dialog
      ref="dialogRef"
      @dialogConfirmClick="dialogConfirmHandle"
      v-bind="dialogConfigAdj"
      v-model="formData"
      :dialogTitle="dialogTitle"
      @selectValueChange="selectValueChangeHandle"
    ></page-dialog>
  </div>
</template>

<script setup lang="ts">
import { Delete, Edit } from "@element-plus/icons-vue";
import { useStore } from "@/store";
import { computed, ref, watch } from "vue";
import pageSearch from "@/components/page-search/page-search.vue";
import pageTable from "@/components/page-table/page-table.vue";
import pageDialog from "@/components/page-dialog/page-dialog.vue";
// 导入Element Plus方法
import { ElMessage, ElMessageBox } from "element-plus";
// 搜索框配置项
import searchConfig from "./config/search-config";
// 表格配置项
import tabelConfig from "./config/tabel-config";
// 对话框配置项
import dialogConfig from "./config/dialog-config";
// 导入工具方法
import { gernarateFormData } from "@/utils/formData-gernarate";

// 定义属性
const pageName = "plan";
const store = useStore();
// 搜索框字段
const searchData = ref("");
// 表格查询参数（用于网络请求与分页器）
const pageInfo = ref({
  currentPage: 1,
  pageSize: 10,
});

// 对话框ref对象
const dialogRef = ref<InstanceType<typeof pageDialog>>();

// 通过对话框配置项生成对话框formData数据
const formData = ref(gernarateFormData(dialogConfig));
// 对话框标题
const dialogTitle = ref("");

// 定义方法
// 请求表格数据函数
const getTableData = () => {
  store.dispatch("home/getListDataAction", {
    queryInfo: searchData.value,
    pageInfo: pageInfo.value,
    pageName: pageName,
  });
};
// 分页器触发函数
const pageSizeChangeHandle = (val: any) => {
  getTableData();
};
const currentSizeChangeHandle = (val: any) => {
  getTableData();
};
// 搜索按钮点击
const searchBtnHandle = () => {
  getTableData();
};
// 添加按钮点击
const addBtnHandle = () => {
  dialogTitle.value = "添加排片";
  // 重置表单数据
  formData.value = gernarateFormData(dialogConfig);
  if (dialogRef.value) {
    dialogRef.value.dialogVisible = true;
  }
};
// 搜索部分输入框清空点击
const clearBtnHandle = () => {
  // 重新请求数据
  getTableData();
};
// 对话框确认处理函数
const dialogConfirmHandle = async () => {
  if (!dialogRef.value) return;
  let res;
  const valid: any = await dialogRef.value.validateForm();
  if (!valid) return;
  if (dialogTitle.value === "添加排片") {
    res = await store.dispatch("home/addDataAction", {
      data: formData.value,
      pageName: pageName,
    });
  } else {
    res = await store.dispatch("home/editDataAction", {
      id: formData.value._id,
      data: formData.value,
      pageName: pageName,
    });
  }
  if (res.status === "Ok") {
    // 弹窗提示
    ElMessage({
      message: `${dialogTitle.value}成功~`,
      type: "success",
    });
    getTableData();
    dialogRef.value.dialogVisible = false;
  } else {
    ElMessage({
      message: res.message,
      type: "error",
    });
  }
};
// 编辑按钮点击触发
const editClickHandle = (row: any) => {
  const rowData = JSON.parse(JSON.stringify(row));
  const movieId = rowData.movieId._id;
  const cinemaId = rowData.cinema._id;
  const hallId = rowData.hall._id;

  dialogTitle.value = "编辑排片";
  if (dialogRef.value) {
    selectValueChangeHandle(cinemaId, "cinema");
    formData.value = {
      ...rowData,
      cinema: cinemaId,
      hall: hallId,
      movieId: movieId,
    };
    dialogRef.value.dialogVisible = true;
  }
};
// 删除按钮点击触发
const deleteClickHandle = (row: any) => {
  ElMessageBox.confirm("是否确认删除", "警告", {
    confirmButtonText: "确认",
    cancelButtonText: "取消",
    type: "warning",
    center: true,
  })
    .then(async () => {
      const res = await store.dispatch("home/deleteDataAction", {
        id: row._id,
        pageName: pageName,
      });
      if (res.status === "Ok") {
        // 弹窗提示
        ElMessage({
          message: "删除成功~",
          type: "success",
        });
        getTableData();
      } else {
        ElMessage({
          message: res.message,
          type: "error",
        });
      }
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "取消成功~",
      });
    });
};

// 实现部分
// 首次请求表格数据
getTableData();

// 取出表格数据
const planList = computed(() => {
  return store.state.home.planListData;
});
const planListTotal = computed(() => {
  return store.state.home.planListTotal;
});

// 动态给配置项中的影院名添加数据
// 请求对话框中影院数据
store.dispatch("home/getListDataAction", {
  pageName: "movie",
});
// 请求对话框中电影数据
store.dispatch("home/getListDataAction", {
  pageName: "cinema",
});

// 获取电影、影院数据
const movieListData: any = computed(() => {
  return store.state.home.movieListData;
});
const cinemaListData: any = computed(() => {
  return store.state.home.cinemaListData;
});

const dialogConfigAdj = computed(() => {
  const formItemMovie = dialogConfig.formItems.find((item) => {
    return item.label === "电影名";
  });

  const formItemCinema = dialogConfig.formItems.find((item) => {
    return item.label === "影院名";
  });
  const optionsMovie = movieListData.value.map((item: any) => {
    return {
      label: item.name,
      value: item._id,
    };
  });
  const optionsCinema = cinemaListData.value.map((item: any) => {
    return {
      label: item.name,
      value: item._id,
    };
  });
  formItemMovie!.options = optionsMovie;
  formItemCinema!.options = optionsCinema;
  return dialogConfig;
});
// 在select框选中电影名数据后导入上映时间数据以及电影名字,选中影院名数据后导入影厅数据
const selectValueChangeHandle = (val: any, field: any) => {
  if (field == "movieId") {
    if (!val) {
      formData.value.inDate = "";
      return;
    }
    const movieListDataItem = movieListData.value.find(
      (item: any) => item._id === val
    );
    formData.value.inDate = movieListDataItem.time;
    formData.value.name = movieListDataItem.name;
  }
  if (field == "cinema") {
    formData.value.hall = "";
    const hallItem = dialogConfigAdj.value.formItems.find(
      (item) => item.field === "hall"
    );
    if (!val) {
      hallItem!.options = [];
      return;
    }
    const cinemaListDataItem = cinemaListData.value.find(
      (item: any) => item._id === val
    );
    const hallOptions = cinemaListDataItem.children.map((item: any) => ({
      label: item.name,
      value: item._id,
    }));
    hallItem!.options = hallOptions;
  }
};
</script>

<style scoped>
.plan-plan {
  width: 100%;
  /* background-color: red; */
}
</style>

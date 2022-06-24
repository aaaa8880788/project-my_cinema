<template>
  <div class="user-manage">
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
      :tableData="userList"
      v-bind="tabelConfig"
      v-model:pageInfo="pageInfo"
      :tableDataTotal="userListTotal"
      @pageSizeChange="pageSizeChangeHandle"
      @currentSizeChange="currentSizeChangeHandle"
    >
      <!-- 插槽部分处理 -->
      <!-- 头像列 -->
      <template #avatar="scope">
        <image-preview :imageUrl="scope.row.avatar ?? ''"></image-preview>
      </template>
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
      v-bind="dialogConfig"
      v-model="formData"
      :dialogTitle="dialogTitle"
    ></page-dialog>
  </div>
</template>

<script setup lang="ts">
import { Delete, Edit } from "@element-plus/icons-vue";
import { useStore } from "@/store";
import { computed, ref } from "vue";
import pageSearch from "@/components/page-search/page-search.vue";
import pageTable from "@/components/page-table/page-table.vue";
import pageDialog from "@/components/page-dialog/page-dialog.vue";
import imagePreview from "@/components/image-preview/image-preview.vue";
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
const pageName = "user";
const store = useStore();
// 搜索框字段
const searchData = ref("");
// 表格查询参数（用于网络请求与分页器）
const pageInfo = ref({
  currentPage: 1,
  pageSize: 5,
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
  dialogTitle.value = "添加用户";
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
  if (dialogTitle.value === "添加用户") {
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
  dialogTitle.value = "编辑用户";
  if (dialogRef.value) {
    formData.value = row;
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
const userList = computed(() => {
  return store.state.home.userListData;
});
const userListTotal = computed(() => {
  return store.state.home.userListTotal;
});
</script>

<style scoped>
.user-manage {
  width: 100%;
  /* background-color: red; */
}
</style>

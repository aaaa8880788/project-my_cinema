import { ITable } from "@/components/page-table/type";
const tabelConfig: ITable = {
  propList: [
    {
      prop: "avatar",
      label: "头像",
      align: "center",
      slotName: "avatar",
      minWidth: "50",
    },
    {
      prop: "name",
      label: "用户名",
      align: "center",
      minWidth: "40",
    },
    {
      prop: "username",
      label: "昵称",
      align: "center",
      minWidth: "40",
    },
    {
      prop: "sex",
      label: "性别",
      align: "center",
      minWidth: "20",
    },
    {
      prop: "phone",
      label: "手机",
      align: "center",
      minWidth: "50",
    },
    {
      prop: "sign",
      label: "个人签名",
      align: "center",
    },
    {
      slotName: "handle",
      label: "操作",
      align: "center",
    },
  ],
};

export default tabelConfig;

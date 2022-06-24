import { ITable } from "@/components/page-table/type";
const tabelConfig: ITable = {
  propList: [
    {
      prop: "name",
      label: "影院名",
      align: "center",
      minWidth: "60",
    },
    {
      prop: "phone",
      label: "联系电话",
      align: "center",
      minWidth: "60",
    },
    {
      prop: "address",
      label: "地址",
      align: "center",
      minWidth: "120",
    },
    {
      slotName: "handle",
      label: "操作",
      align: "center",
    },
  ],
};

export default tabelConfig;

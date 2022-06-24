import { ITable } from "@/components/page-table/type";
const tabelConfig: ITable = {
  propList: [
    {
      prop: "image",
      label: "海报",
      align: "center",
      slotName: "image",
      minWidth: "30",
    },
    {
      prop: "name",
      label: "电影名",
      align: "center",
      minWidth: "60",
    },
    {
      prop: "director",
      label: "导演",
      align: "center",
      minWidth: "60",
    },
    {
      prop: "type",
      label: "类型",
      align: "center",
      minWidth: "60",
    },
    {
      prop: "time",
      label: "上映时间",
      align: "center",
      minWidth: "50",
    },
    {
      slotName: "handle",
      label: "操作",
      align: "center",
    },
  ],
};

export default tabelConfig;

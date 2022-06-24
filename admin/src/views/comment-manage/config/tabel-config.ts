import { ITable } from "@/components/page-table/type";
const tabelConfig: ITable = {
  propList: [
    {
      prop: "name",
      label: "电影名",
      align: "center",
      minWidth: "40",
    },
    {
      prop: "adImage",
      label: "宣传海报",
      align: "center",
      slotName: "adImage",
      minWidth: "90",
    },
    {
      prop: "movieId.time",
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

import { ITable } from "@/components/page-table/type";
const tabelConfig: ITable = {
  propList: [
    {
      prop: "movieId.name",
      label: "电影名",
      align: "center",
      minWidth: "80",
    },
    {
      prop: "cinema.name",
      label: "影院名",
      align: "center",
      minWidth: "80",
    },
    {
      prop: "hall.name",
      label: "放映大厅",
      align: "center",
      minWidth: "60",
    },
    {
      prop: "outDate",
      label: "放映日期",
      align: "center",
      minWidth: "50",
    },
    {
      prop: "outTime",
      label: "放映时间",
      align: "center",
      minWidth: "50",
    },
    {
      prop: "sale",
      label: "售价",
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

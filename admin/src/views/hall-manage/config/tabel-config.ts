import { ITable } from "@/components/page-table/type";
const tabelConfig: ITable = {
  propList: [
    {
      prop: "name",
      label: "影厅名",
      align: "center",
      minWidth: "60",
    },
    {
      prop: "cinema.phone",
      label: "影院电话",
      align: "center",
      minWidth: "60",
    },
    {
      prop: "cinema.name",
      label: "影院名",
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

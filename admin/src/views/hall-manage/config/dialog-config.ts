import { IForm } from "@/components/page-dialog/type";
const dialogConfig: IForm = {
  formItems: [
    {
      label: "影院名",
      field: "cinema",
      type: "select",
      placeholder: "请选择影院名",
      rules: [
        {
          required: true,
          message: "请选择影院名",
          trigger: "change",
        },
      ],
    },
    {
      label: "影厅名",
      field: "name",
      type: "input",
      placeholder: "请输入影厅名",
      rules: [
        {
          required: true,
          message: "请输入影厅名",
          trigger: "blur",
        },
      ],
    },
  ],
  labelWidth: "90px",
};
export default dialogConfig;

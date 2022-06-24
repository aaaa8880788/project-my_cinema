import { IForm } from "@/components/page-dialog/type";
import { checkHourM } from "@/utils/form-validator";
const dialogConfig: IForm = {
  formItems: [
    {
      label: "电影名",
      field: "movieId",
      type: "select",
      placeholder: "请选择电影名",
      rules: [
        {
          required: true,
          message: "请选择电影名",
          trigger: "change",
        },
      ],
    },
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
      field: "hall",
      type: "select",
      placeholder: "请选择影厅名",
      rules: [
        {
          required: true,
          message: "请选择影厅名",
          trigger: "change",
        },
      ],
    },
    {
      label: "放映时间",
      field: "outTime",
      type: "select",
      placeholder: "请选择放映时间",
      options: [
        {
          label: "08:05",
          value: "08:05",
        },
        {
          label: "12:05",
          value: "12:05",
        },
        {
          label: "16:05",
          value: "16:05",
        },
        {
          label: "20:05",
          value: "20:05",
        },
      ],
      otherOption: {
        filterable: true,
        "default-first-option": true,
        "allow-create": true,
        "reserve-keyword": false,
      },
      rules: [
        {
          required: true,
          message: "请选择放映时间",
          trigger: "change",
        },
        {
          validator: checkHourM,
          trigger: "change",
        },
      ],
    },
    {
      label: "散场时间",
      field: "leaveTime",
      type: "select",
      placeholder: "请选择散场时间",
      options: [
        {
          label: "11:05",
          value: "11:05",
        },
        {
          label: "12:05",
          value: "12:05",
        },
        {
          label: "15:05",
          value: "15:05",
        },
        {
          label: "16:05",
          value: "16:05",
        },
        {
          label: "23:05",
          value: "23:05",
        },
        {
          label: "00:05",
          value: "00:05",
        },
      ],
      otherOption: {
        filterable: true,
        "default-first-option": true,
        "allow-create": true,
        "reserve-keyword": false,
      },
      rules: [
        {
          required: true,
          message: "请选择散场时间",
          trigger: "change",
        },
        {
          validator: checkHourM,
          trigger: "change",
        },
      ],
    },
    {
      label: "上映日期",
      field: "inDate",
      type: "datePicker",
      otherOption: {
        "value-format": "YYYY-MM-DD",
        disabled: true,
      },
    },
    {
      label: "放映日期",
      field: "outDate",
      type: "datePicker",
      placeholder: "请选择放映日期",
      otherOption: {
        "value-format": "YYYY-MM-DD",
        "disabled-date": (time: Date) => {
          const two = 2 * 24 * 60 * 60 * 1000;
          return (
            time.getTime() < Date.now() || time.getTime() > two + Date.now()
          );
        },
      },
      rules: [{ required: true, message: "请选择放映日期", trigger: "change" }],
    },
    {
      label: "电影售票",
      field: "sale",
      type: "input",
      placeholder: "请输入电影售票（元）",
      rules: [
        { required: true, message: "请输入电影售票（元）", trigger: "blur" },
      ],
    },
  ],
  labelWidth: "90px",
};
export default dialogConfig;

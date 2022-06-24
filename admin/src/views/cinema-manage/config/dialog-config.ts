import { IForm } from "@/components/page-dialog/type";
import localCache from "@/utils/local-cache";
import { checkMobile } from "@/utils/form-validator";

const dialogConfig: IForm = {
  formItems: [
    {
      label: "影院名",
      field: "name",
      type: "input",
      placeholder: "请输入影院名",
      rules: [
        {
          required: true,
          message: "请输入影院名",
          trigger: "blur",
        },
      ],
    },
    {
      label: "联系电话",
      field: "phone",
      type: "input",
      placeholder: "请输入联系电话",
      otherOption: {
        type: "tel",
      },
      rules: [
        { required: true, message: "请输入联系电话", trigger: "blur" },
        { validator: checkMobile, trigger: "blur" },
      ],
    },
    {
      label: "影院特色",
      field: "desc1",
      type: "select",
      placeholder: "请选择影院特色",
      options: [
        {
          label: "MA4D厅",
          value: "MA4D厅",
        },
        {
          label: "IMAX厅",
          value: "IMAX厅",
        },
        {
          label: "4K厅",
          value: "4K厅",
        },
        {
          label: "DCINITY厅",
          value: "DCINITY厅",
        },
        {
          label: "ALPD Pro高亮厅",
          value: "ALPD Pro高亮厅",
        },
        {
          label: "杜比全景声厅",
          value: "杜比全景声厅",
        },
      ],
      otherOption: {
        multiple: true,
        filterable: true,
        "default-first-option": true,
        "allow-create": true,
        "reserve-keyword": false,
      },
    },
    {
      label: "体验特色",
      field: "desc2",
      type: "select",
      placeholder: "请选择体验特色",
      options: [
        {
          label: "退",
          value: "退",
        },
        {
          label: "改签",
          value: "改签",
        },
        {
          label: "折扣卡",
          value: "折扣卡",
        },
      ],
      otherOption: {
        multiple: true,
        filterable: true,
        "default-first-option": true,
        "allow-create": true,
        "reserve-keyword": false,
      },
    },
    // {
    //   label: "体验特色",
    //   field: "desc2",
    //   type: "input",
    //   placeholder: "请输入体验特色",
    // },
    {
      label: "门槛(元)",
      field: "demand",
      type: "input",
      placeholder: "请输入入门门槛(元)",
      otherOption: {
        type: "number",
      },
      rules: [
        {
          required: true,
          message: "请输入入门门槛",
          trigger: "blur",
        },
      ],
    },
    {
      label: "地址",
      field: "address",
      type: "input",
      placeholder: "请输入地址",
      otherOption: {
        type: "textarea",
        autosize: { minRows: 3, maxRows: 7 },
      },
      rules: [{ required: true, message: "请输入地址", trigger: "blur" }],
    },
  ],
  labelWidth: "90px",
};
export default dialogConfig;

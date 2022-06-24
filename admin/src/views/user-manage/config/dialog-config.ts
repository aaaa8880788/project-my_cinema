import { IForm } from "@/components/page-dialog/type";
import localCache from "@/utils/local-cache";
import { checkMobile } from "@/utils/form-validator";

const dialogConfig: IForm = {
  formItems: [
    {
      label: "用户名",
      field: "name",
      type: "input",
      placeholder: "请输入用户名",
      rules: [
        {
          required: true,
          message: "请输入用户名",
          trigger: "blur",
        },
        {
          min: 3,
          max: 10,
          message: "输入格式为3-10个字母或数字",
          trigger: "blur",
        },
      ],
    },
    {
      label: "昵称",
      field: "username",
      type: "input",
      placeholder: "请输入昵称",
    },
    {
      label: "头像",
      field: "avatar",
      type: "upload",
      otherOption: {
        action: import.meta.env.VITE_APP_IMAGE_URL,
        headers: {
          Authorization: localCache.getCache("token") || "",
        },
      },
    },
    {
      label: "手机",
      field: "phone",
      type: "input",
      placeholder: "请输入手机号",
      otherOption: {
        type: "tel",
      },
      rules: [
        { required: true, message: "请输入电话号码", trigger: "blur" },
        {
          validator: checkMobile,
          message: "请输入正确的号码",
          trigger: "blur",
        },
      ],
    },
    {
      label: "密码",
      field: "password",
      type: "input",
      placeholder: "请输入密码",
      otherOption: {
        "show-password": true,
      },
      rules: [
        {
          required: true,
          message: "请输入密码",
          trigger: "blur",
        },
        {
          min: 3,
          max: 10,
          message: "输入格式为3-10个字母或数字",
          trigger: "blur",
        },
      ],
    },
    {
      label: "性别",
      field: "sex",
      type: "select",
      placeholder: "请选择性别",
      options: [
        {
          label: "男",
          value: "男",
        },
        {
          label: "女",
          value: "女",
        },
      ],
    },
    {
      label: "生日",
      field: "birthday",
      type: "datePicker",
      placeholder: "请选择生日",
      otherOption: {
        "value-format": "YYYY-MM-DD",
        "disabled-date": (time: Date) => {
          return time.getTime() > Date.now();
        },
      },
    },
    {
      label: "简介",
      field: "sign",
      type: "input",
      placeholder: "请输入简介",
      otherOption: {
        type: "textarea",
        autosize: { minRows: 2, maxRows: 4 },
      },
    },
  ],
};
export default dialogConfig;

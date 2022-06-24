import { IForm } from "@/components/page-dialog/type";
import localCache from "@/utils/local-cache";
import { checkMovieTime } from "@/utils/form-validator";

const dialogConfig: IForm = {
  formItems: [
    {
      label: "电影名",
      field: "name",
      type: "input",
      placeholder: "请输入电影名",
      rules: [
        {
          required: true,
          message: "请输入电影名",
          trigger: "blur",
        },
      ],
    },
    {
      label: "海报",
      field: "image",
      type: "upload",
      otherOption: {
        action: import.meta.env.VITE_APP_IMAGE_URL,
        headers: {
          Authorization: localCache.getCache("token") || "",
        },
      },
      rules: [
        {
          required: true,
          message: "请上传海报图片",
          trigger: "change",
        },
      ],
    },
    {
      label: "导演",
      field: "director",
      type: "input",
      placeholder: "请输入导演名称",
      otherOption: {
        type: "tel",
      },
      rules: [{ required: true, message: "请输入导演名称", trigger: "blur" }],
    },
    {
      label: "演员",
      field: "performer",
      type: "input",
      placeholder: "请输入演员名称",
      otherOption: {
        type: "tel",
      },
      rules: [{ required: true, message: "请输入演员名称", trigger: "blur" }],
    },
    {
      label: "片长",
      field: "duration",
      type: "input",
      placeholder: "请输入电影时长",
      otherOption: {
        type: "tel",
      },
      rules: [
        { required: true, message: "请输入电影时长", trigger: "blur" },
        {
          validator: checkMovieTime,
          trigger: "blur",
        },
      ],
    },
    {
      label: "语言",
      field: "language",
      type: "select",
      placeholder: "请选择语言",
      options: [
        {
          value: "粤语",
          label: "粤语",
        },
        {
          value: "国语",
          label: "国语",
        },
        {
          value: "英语",
          label: "英语",
        },
        {
          value: "日语",
          label: "日语",
        },
        {
          value: "其它",
          label: "其它",
        },
      ],
      rules: [{ required: true, message: "请选择语言", trigger: "change" }],
    },
    {
      label: "类型",
      field: "type",
      type: "select",
      placeholder: "请选择类型",
      options: [
        {
          value: "动漫",
          label: "动漫",
        },
        {
          value: "言情",
          label: "言情",
        },
        {
          value: "科幻",
          label: "科幻",
        },
        {
          value: "喜剧",
          label: "喜剧",
        },
        {
          value: "爱情",
          label: "爱情",
        },
        {
          value: "剧情",
          label: "剧情",
        },
        {
          value: "动作",
          label: "动作",
        },
        {
          value: "冒险",
          label: "冒险",
        },
        {
          value: "青春",
          label: "青春",
        },
        {
          value: "悬疑",
          label: "悬疑",
        },
        {
          value: "恐怖",
          label: "恐怖",
        },
        {
          value: "其它",
          label: "其它",
        },
      ],
      rules: [{ required: true, message: "请选择类型", trigger: "change" }],
      otherOption: {
        multiple: true,
      },
    },
    {
      label: "上映日期",
      field: "time",
      type: "datePicker",
      placeholder: "请选择上映日期",
      otherOption: {
        "value-format": "YYYY-MM-DD",
      },
      rules: [{ required: true, message: "请选择上映日期", trigger: "change" }],
    },
    {
      label: "电影简介",
      field: "summary",
      type: "input",
      placeholder: "请输入电影简介",
      otherOption: {
        mutiple: true,
        type: "textarea",
        autosize: { minRows: 5, maxRows: 10 },
      },
      rules: [{ required: true, message: "请输入电影简介", trigger: "blur" }],
    },
  ],
  labelWidth: "90px",
};
export default dialogConfig;

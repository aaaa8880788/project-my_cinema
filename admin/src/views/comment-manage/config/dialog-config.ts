import { IForm } from "@/components/page-dialog/type";
import localCache from "@/utils/local-cache";
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
      label: "宣传海报",
      field: "adImage",
      type: "upload",
      otherOption: {
        action: import.meta.env.VITE_APP_IMAGE_URL,
        headers: {
          Authorization: localCache.getCache("token") || "",
        },
      },
    },
  ],
};
export default dialogConfig;

import { IForm } from "@/components/page-dialog/type";
export function gernarateFormData(FormConfig: IForm) {
  // 1.从接收到的配置中取出各个field,组成表单的数据formData
  const formItems = FormConfig.formItems ?? [];
  const formData: any = {};
  formItems.map((item) => {
    formData[item.field] = "";
  });
  return formData;
}

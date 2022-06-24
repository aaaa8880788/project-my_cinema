import type { IAccount } from "./type";
import { dRequest2 } from "../index";

export function accountLoginRequest(url: string, account: IAccount) {
  return dRequest2.post({
    url: url,
    data: account,
  });
}

import type { ILoginState } from "./login/type";
import type { IHomeState } from "./home/type";
export interface IRootState {}

interface IRootWithModule {
  login: ILoginState;
  home: IHomeState;
}

export type IStoreType = IRootWithModule & IRootState;

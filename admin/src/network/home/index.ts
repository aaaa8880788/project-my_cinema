import { dRequest1 } from "../index";
import { userListQuery } from "./type";
function getDataListRequest(url: string, pageInfo?: userListQuery) {
  return dRequest1.get({
    url: url,
    params: pageInfo,
  });
}

function addDataRequest(url: string, data: any) {
  return dRequest1.post({
    url: url,
    data: data,
  });
}

function deleteDataRequest(url: string) {
  return dRequest1.delete({
    url: url,
  });
}

function editDataRequest(url: string, data: any) {
  return dRequest1.put({
    url: url,
    data: data,
  });
}

export {
  getDataListRequest,
  addDataRequest,
  deleteDataRequest,
  editDataRequest,
};

import { postByJson } from "../utils/request";

const ROOT = "http://rap2api.taobao.org/app/mock/123391/authentication"; //本页面通用

function _api(name: string) {
  return ROOT + "/" + name;
}

async function _post<T>(name, param: any = null) {
  return await postByJson<T>(_api(name), param);
}

export async function login(params) {
  const resp = await _post<any>("login", params);
  const { body: {data} } = resp
  return data
}

export async function logout() {
  return await _post<any>("logout");
}

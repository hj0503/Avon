import { postByJson } from "../utils/request";

export async function sysMenu(params) {
  const resp = await postByJson<any>("http://rap2api.taobao.org/app/mock/123391/sysMenu", params);
  const { body: {data} } = resp
  return data
}

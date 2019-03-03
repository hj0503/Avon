import { get } from "../utils/request";

export async function sysMenu() {
  const resp = await get<any>("/sysmenu");
  const { body: {data} } = resp
  return data
}

import { get } from "../utils/request";

const commonApi = '/avon'

export async function sysMenu() {
  const resp = await get<any>(`${commonApi}/sysmenu`);
  const { body: {data} } = resp
  return data
}

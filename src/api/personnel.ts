import { get } from "../utils/request";

type Personnel = {
  nameOrJobNumber: string;
  position: string;
  page: number;
  size: number
}

export async function personnel<T>(params: Personnel): Promise<any> {
  const resp = await get('http://rap2api.taobao.org/app/mock/123392/personnel', params)
  const { body: {data} } = resp
  return data
}
import { postByJson } from '../utils/request'

const ROOT = '/.../...';   //本页面通用

function api(name: string) {
  return ROOT + '/' + name
}

async function _post<T>(name, param = null) {
  return await postByJson<T>(api, param)
}

export async function testFetch() {
  return await postByJson('/taopiaopiao/dianying', null)
}

export async function example(params) {
  const resp = await _post<any>('byyear', params)
  const { body: { data } } = resp
  return data
}
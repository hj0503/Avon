import { postByJson } from '../utils/request'

const ROOT = '/authentication';   //本页面通用

function _api(name: string) {
  return ROOT + '/' + name
}

async function _post<T>(name, param: any = null) {
  return await postByJson<T>(_api(name), param)
}

export async function from(params) {
  return await _post<any>('from', params)
  // const { body: { data } } = resp
  // return data
}

export async function logout() {
  return  await _post<any>('logout')
}
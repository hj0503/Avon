import { postByJson } from '../utils/request'
import md5 from 'js-md5'

const ROOT = '/authentication';   //本页面通用

function _api(name: string) {
  return ROOT + '/' + name
}

async function _post<T>(name, param: any = null) {
  return await postByJson<T>(_api(name), param)
}

export async function testFetch() {
  const resp = await _post<any>('from', {
    username: 'yangzihao',
    password: md5('123')
  })
  const { body: { data } } = resp
  return data
}

export async function example(params) {
  const resp = await _post<any>('byyear', params)
  const { body: { data } } = resp
  return data
}
import axios from 'axios';
import queryString from 'query-string';
import { CODE_SUCCESS } from 'src/data/codes';

function throwIfBadStatus(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return;
  }
  console.log('[', response.url, '] respond bad status [', response.status, response.statusText, ']');
  const error: any = new Error(response.statusText);
  error.response = response;
  throw error;
}

function throwIfUnknownException(response: Response, body: ApiResponse<any>, options) {
  if (body.code !== CODE_SUCCESS) {
    console.log('[', response.url, '] respond bad body [', body.code, body.message, body.data, ']', 'option is [', options, ']');
    throw body;
  }
}

function clearNull(key, value) {
  if (value !== null) {
    return value;
  }
}

function logging(url, options?) {
  console.log('requesting [', url, '] options is [', options, ']');
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request<T>(url, options?): Promise<RequestResponse<T>> {
  let response:any = null;

  logging(url, options);

  try {
    response = await axios(url, {
      cache: 'no-cache',
      credentials: 'include',
      ...options,
    });
  } catch (e) {
    console.log('exception in fetching [', url, ']');
    throw e;
  }

  throwIfBadStatus(response);

  const body: ApiResponse<T> = await response;

  throwIfUnknownException(response, body, options);

  return {
    body,
  };
}

export async function get(url, params, options?) {
  if (!url.indexOf('?') && params) {
    url = url + '?' + queryString.stringify(params);
  }
  return await request(url, { ...options, method: 'GET' });
}

export async function post<T>(url, options?) {
  if (!options) {
    options = {};
  }
  options.method = 'POST';
  return await request<T>(url, options);
}

export async function postByJson<T>(url, params, options?) {
  if (!options) {
    options = {};
  }
  if (!options.params && params) {
    if (!options.headers) {
      options.headers = {};
    }
    options.headers[ 'Content-Type' ] = 'application/json; charset=utf-8';
    options.data = JSON.stringify(params, clearNull);
  }
  return await post<T>(url, options);
}

export interface RequestResponse<T> {
  body: ApiResponse<T>
}

export interface ApiResponse<T> {
  code?: string,
  message?: string,
  succeed?: boolean,
  data: T
}

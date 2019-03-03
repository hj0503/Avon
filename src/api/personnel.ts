import { get, put, Delete, postByJson } from "../utils/request";

const commonApi = '/avon'

/**
 * 员工列表
 */
type Personnel = {
  page: number;
  size: number;
  nameOrJobNumber?: string;
  position?: string;
};

type ModifyPersonnel = {
  id: string;
  name: string;
  phone: string;
  position: string;
  status: string;
  basicWage: string;
};

type DeletePersonnel = {
  id: string;
};

export async function addPersonnel<T>(params: Personnel): Promise<any> {
  const resp = await postByJson(`${commonApi}/personnel`, params);
  const {
    body: { data }
  } = resp;
  return data;
}

export async function personnel<T>(params: Personnel): Promise<any> {
  const resp = await get(`${commonApi}/personnel`, params);
  const {
    body: { data }
  } = resp;
  return data;
}

export async function modifyPersonnel<T>(
  params: ModifyPersonnel
): Promise<any> {
  const resp = await put(`${commonApi}/personnel`, params);
  const { body } = resp;
  return body;
}

export async function deletePersonnel<T>(
  params: DeletePersonnel
): Promise<any> {
  const resp = await Delete(`${commonApi}/personnel/${params}`);
  const { body } = resp;
  return body;
}

/**
 * 提成明细
 */
type Commision = {
  page: number;
  size: number;
  nameOrJobNumber?: string;
  commissionType?: string;
  startDate?: string;
  endDate?: string;
};
export async function commisionList<T>(params: Commision): Promise<any> {
  const resp = await get(`${commonApi}/trans/commission/list`, params);
  const {
    body: { data }
  } = resp;
  return data;
}
export async function commisionCnat<T>(params: Commision): Promise<any> {
  const resp = await get(`${commonApi}/trans/commission/cnamt`, params);
  const {
    body: { data }
  } = resp;
  return data;
}

/**
 * 业绩明细
 */
type Performance = {
  page: number;
  size: number;
};
export async function performanceList<T>(params: Performance): Promise<any> {
  const resp = await get(`${commonApi}/trans/performance/list`, params);
  const {
    body: { data }
  } = resp;
  return data;
}
export async function performanceCnAmt<T>(params: Performance): Promise<any> {
  const resp = await get(`${commonApi}/trans/performance/amt`, params);
  const {
    body: { data }
  } = resp;
  return data;
}

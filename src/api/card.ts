import { get, Delete, put } from "../utils/request";

const commonApi = '/avon'

/**
 * 卡项列表
 */

type CardItem = {
  page: number;
  size: number;
  cardNumberOrName?: string;
};

type DelteCard = {
  id: string;
}

type ModifyCard = {
  id: string;
  cardNumber: string;
  cardName: string;
  amt: string;
  total: string;
  effectiveDate: string;
}

export async function carditem<T>(params: CardItem): Promise<any> {
  const resp = await get(`${commonApi}/carditem`, params);
  const {
    body: { data }
  } = resp;
  return data;
}

export async function modifyCard<T>(
  params: ModifyCard
): Promise<any> {
  const resp = await put(`${commonApi}/carditem`, params);
  const { body } = resp;
  return body;
}

export async function deleteCard<T>(
  params: DelteCard
): Promise<any> {
  const resp = await Delete(`${commonApi}/carditem/${params}`);
  const { body } = resp;
  return body;
}

/** 
 * 已售卡项
*/

type CardTrandsHold = {
  page: number;
  size: number;
  custName?: string;
  phone?: string;
  status?: 1 | 0;
}

type DeleteTrandsHold = {
  ID: String;
}

export async function cardTrandsHold<T>(params: CardTrandsHold): Promise<any> {
  const resp = await get(`${commonApi}/card/trans/hold`, params);
  const {
    body: { data }
  } = resp;
  return data;
}

export async function deleteTrandsHold<T>(params: DeleteTrandsHold): Promise<any> {
  const resp = await Delete(`${commonApi}/card/trans/hold`, params);
  const {
    body: { data }
  } = resp;
  return data;
} 
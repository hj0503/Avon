import { get, put, Delete } from "../utils/request";

type Personnel = {
  nameOrJobNumber: string;
  position: string;
  page: number;
  size: number;
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
}

export async function personnel<T>(params: Personnel): Promise<any> {
  const resp = await get(
    "http://rap2api.taobao.org/app/mock/123392/personnel",
    params
  );
  const {
    body: { data }
  } = resp;
  return data;
}

export async function modifyPersonnel<T>(params: ModifyPersonnel): Promise<any> {
  const resp = await put(
    "http://rap2api.taobao.org/app/mock/123391/personnel",
    params
  );
  const { body } = resp;
  return body;
}

export async function deletePersonnel<T>(params: DeletePersonnel): Promise<any> {
  const resp = await Delete(
    "http://rap2api.taobao.org/app/mock/123391/personnel",
    params
  );
  const { body } = resp;
  return body;
}

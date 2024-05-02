// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** batchDeleteUserSign POST /api/admin/userSign/batchDeleteUserSign */
export async function batchDeleteUserSignUsingPost(
  body: API.BatchDeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/admin/userSign/batchDeleteUserSign', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteUserSign POST /api/admin/userSign/delete */
export async function deleteUserSignUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/admin/userSign/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getUserSignVOById GET /api/admin/userSign/get/vo */
export async function getUserSignVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserSignVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUserSignVO_>('/api/admin/userSign/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listUserSignVOByPage POST /api/admin/userSign/listUserSignVOByPage */
export async function listUserSignVoByPageUsingPost(
  body: API.UserSignQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageUserSignVO_>('/api/admin/userSign/listUserSignVOByPage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

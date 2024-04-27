// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addDataInfo POST /api/admin/dataInfo/add */
export async function addDataInfoUsingPost(
  body: API.DataInfoAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/admin/dataInfo/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** batchDeleteDataInfo POST /api/admin/dataInfo/batchDeleteDataInfo */
export async function batchDeleteDataInfoUsingPost(
  body: API.BatchDeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/admin/dataInfo/batchDeleteDataInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteDataInfo POST /api/admin/dataInfo/delete */
export async function deleteDataInfoUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/admin/dataInfo/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getDataInfoVOById GET /api/admin/dataInfo/get/vo */
export async function getDataInfoVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDataInfoVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseDataInfoVO_>('/api/admin/dataInfo/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** handleDataInfoStatus POST /api/admin/dataInfo/handleDataInfoStatus */
export async function handleDataInfoStatusUsingPost(
  body: API.DataInfoStatusUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/admin/dataInfo/handleDataInfoStatus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listDataInfoByPage POST /api/admin/dataInfo/list/page */
export async function listDataInfoByPageUsingPost(
  body: API.DataInfoQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageDataInfo_>('/api/admin/dataInfo/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listDataInfoVOByPage POST /api/admin/dataInfo/list/page/vo */
export async function listDataInfoVoByPageUsingPost(
  body: API.DataInfoQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageDataInfoVO_>('/api/admin/dataInfo/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listByPage POST /api/admin/dataInfo/listByPage */
export async function listByPageUsingPost(
  body: API.DataInfoQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageDataInfoVO_>('/api/admin/dataInfo/listByPage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateDataInfo POST /api/admin/dataInfo/update */
export async function updateDataInfoUsingPost(
  body: API.DataInfoUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/admin/dataInfo/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

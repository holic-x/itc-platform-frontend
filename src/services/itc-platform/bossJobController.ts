// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** batchDeleteBossJob POST /api/admin/bossJob/batchDeleteBossJob */
export async function batchDeleteBossJobUsingPost(
  body: API.BatchDeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/admin/bossJob/batchDeleteBossJob', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteBossJob POST /api/admin/bossJob/delete */
export async function deleteBossJobUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/admin/bossJob/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getBossJobVOById GET /api/admin/bossJob/get/vo */
export async function getBossJobVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getBossJobVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBossJobVO_>('/api/admin/bossJob/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listBossJobVOByPage POST /api/admin/bossJob/listBossJobVOByPage */
export async function listBossJobVoByPageUsingPost(
  body: API.BossJobQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageBossJobVO_>('/api/admin/bossJob/listBossJobVOByPage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

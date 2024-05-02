// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 检索所有(基于门面模式改造优化) POST /api/searchOptimize/all */
export async function searchAllByCondFacadeUsingPost(
  body: API.SearchRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseSearchVO_>('/api/searchOptimize/all', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 检索所有(基于多种设计模式改造优化) POST /api/searchOptimize/allByCondAdaptor */
export async function searchAllByCondAdaptorUsingPost(
  body: API.SearchRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseSearchVO_>('/api/searchOptimize/allByCondAdaptor', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

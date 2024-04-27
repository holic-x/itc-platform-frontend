// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** V3.根据searchText、type组合条件处理查询 POST /api/search/searchAllByCond */
export async function searchAllByCondUsingPost(
  body: API.SearchRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseSearchVO_>('/api/search/searchAllByCond', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** V1.根据searchText检索所有内容 POST /api/search/searchAllByText */
export async function searchAllByTextUsingPost(
  body: API.SearchRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseSearchVO_>('/api/search/searchAllByText', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** V2.根据searchText检索所有内容(并发处理) POST /api/search/searchAllByTextCon */
export async function searchAllByTextConUsingPost(
  body: API.SearchRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseSearchVO_>('/api/search/searchAllByTextCon', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

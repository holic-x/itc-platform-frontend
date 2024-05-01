// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** batchDeleteFetchPost POST /api/admin/fetchPost/batchDeleteFetchPost */
export async function batchDeleteFetchPostUsingPost(
  body: API.BatchDeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/admin/fetchPost/batchDeleteFetchPost', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** dataCapture POST /api/admin/fetchPost/dataCapture */
export async function dataCaptureUsingPost(options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/admin/fetchPost/dataCapture', {
    method: 'POST',
    ...(options || {}),
  });
}

/** deleteFetchPost POST /api/admin/fetchPost/delete */
export async function deleteFetchPostUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/admin/fetchPost/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listFetchPostVoByPageForAdmin POST /api/admin/fetchPost/list/page */
export async function listFetchPostVoByPageForAdminUsingPost(
  body: API.FetchPostQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageFetchPostVO_>('/api/admin/fetchPost/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** pushFullToES POST /api/admin/fetchPost/pushFullToES */
export async function pushFullToEsUsingPost(options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/admin/fetchPost/pushFullToES', {
    method: 'POST',
    ...(options || {}),
  });
}

/** listFetchPostVOByPageForUser POST /api/fetchPost/list/page */
export async function listFetchPostVoByPageForUserUsingPost(
  body: API.FetchPostQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageFetchPostVO_>('/api/fetchPost/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

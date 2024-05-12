// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addNotification POST /api/admin/cms/notification/add */
export async function addNotificationUsingPost(
  body: API.NotificationAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/admin/cms/notification/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** batchDeleteNotification POST /api/admin/cms/notification/batchDeleteNotification */
export async function batchDeleteNotificationUsingPost(
  body: API.BatchDeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/admin/cms/notification/batchDeleteNotification', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteNotification POST /api/admin/cms/notification/delete */
export async function deleteNotificationUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/admin/cms/notification/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getNotificationVOById GET /api/admin/cms/notification/get/vo */
export async function getNotificationVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getNotificationVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseNotificationVO_>('/api/admin/cms/notification/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getNotificationVOByDomain GET /api/admin/cms/notification/getNotificationVOByDomain */
export async function getNotificationVoByDomainUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getNotificationVOByDomainUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseNotificationVO_>(
    '/api/admin/cms/notification/getNotificationVOByDomain',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** handleNotificationStatus POST /api/admin/cms/notification/handleNotificationStatus */
export async function handleNotificationStatusUsingPost(
  body: API.NotificationStatusUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/admin/cms/notification/handleNotificationStatus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getNotificationVOByPage POST /api/admin/cms/notification/list/page/vo */
export async function getNotificationVoByPageUsingPost(
  body: API.NotificationQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageNotificationVO_>('/api/admin/cms/notification/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getNotificationVOByCond POST /api/admin/cms/notification/list/vo */
export async function getNotificationVoByCondUsingPost(
  body: API.NotificationQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListNotificationVO_>('/api/admin/cms/notification/list/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateNotification POST /api/admin/cms/notification/update */
export async function updateNotificationUsingPost(
  body: API.NotificationUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/admin/cms/notification/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

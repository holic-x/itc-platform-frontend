// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getCurrentLoginUser GET /api/account/get/login */
export async function getCurrentLoginUserUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseLoginUserVO_>('/api/account/get/login', {
    method: 'GET',
    ...(options || {}),
  });
}

/** login POST /api/account/login */
export async function loginUsingPost(body: API.UserLoginRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseLoginUserVO_>('/api/account/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** logout POST /api/account/logout */
export async function logoutUsingPost(options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/account/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

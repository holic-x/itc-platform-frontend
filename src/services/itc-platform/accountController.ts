// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** bindEmail GET /api/account/bindEmail */
export async function bindEmailUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.bindEmailUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/account/bindEmail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getCurrentLoginUser GET /api/account/get/login */
export async function getCurrentLoginUserUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseLoginUserVO_>('/api/account/get/login', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getUserVOMoreByCurrentLoginUser GET /api/account/getUserVOMoreByCurrentLoginUser */
export async function getUserVoMoreByCurrentLoginUserUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseUserVO_>('/api/account/getUserVOMoreByCurrentLoginUser', {
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

/** sendEmailCode GET /api/account/sendEmailCode */
export async function sendEmailCodeUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.sendEmailCodeUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/account/sendEmailCode', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** uploadAvatar POST /api/account/uploadAvatar */
export async function uploadAvatarUsingPost(
  body: {},
  avatar?: File,
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  if (avatar) {
    formData.append('avatar', avatar);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      if (typeof item === 'object' && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ''));
        } else {
          formData.append(ele, JSON.stringify(item));
        }
      } else {
        formData.append(ele, item);
      }
    }
  });

  return request<API.BaseResponseString_>('/api/account/uploadAvatar', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** userSignIn POST /api/account/userSignIn */
export async function userSignInUsingPost(options?: { [key: string]: any }) {
  return request<API.BaseResponseLong_>('/api/account/userSignIn', {
    method: 'POST',
    ...(options || {}),
  });
}

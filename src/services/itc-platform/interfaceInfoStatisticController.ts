// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** listTopInvokeInterfaceInfo GET /api/interfaceInfo/statistic/top/interface/invoke */
export async function listTopInvokeInterfaceInfoUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListInterfaceInfoVO_>(
    '/api/interfaceInfo/statistic/top/interface/invoke',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

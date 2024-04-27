// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** listInterfaceInfoStatisticsByPage POST /api/interfaceInfo/list/page */
export async function listInterfaceInfoStatisticsByPageUsingPost(
  body: API.InterfaceInfoStatisticQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListInterfaceInfoStatisticVO_>('/api/interfaceInfo/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

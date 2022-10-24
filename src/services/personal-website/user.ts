// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取用户信息 获取用户信息 GET /api/v1/user/get */
export async function getUserGet(options?: { [key: string]: any }) {
  return request<API.ApiResponse & { data?: API.User }>('/api/v1/user/get', {
    method: 'GET',
    ...(options || {}),
  });
}

// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 用户登陆 用户登陆 POST /api/v1/user/login */
export async function postUserLogin(body: API.LoginUserRequest, options?: { [key: string]: any }) {
  return request<API.ApiResponse>('/api/v1/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户登出 用户登出 GET /api/v1/user/logout */
export async function getUserLogout(options?: { [key: string]: any }) {
  return request<API.ApiResponse>('/api/v1/user/logout', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 用户注册 用户注册 POST /api/v1/user/register */
export async function postUserRegister(
  body: API.RegisterUserRequest,
  options?: { [key: string]: any },
) {
  return request<API.ApiResponse>('/api/v1/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
